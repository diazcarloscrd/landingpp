import { NextRequest, NextResponse, after } from "next/server";
import { validateQuoteForm } from "@/lib/validation";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { getSupabaseServerClient } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";

const MAX_BODY_BYTES = 16384; // 16 KB límite de carga útil

export async function POST(req: NextRequest) {
  try {
    // 1. Verificación de Content-Type
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          error: "Formato no admitido. Se requiere application/json.",
        },
        { status: 415 }
      );
    }

    // 2. Control de longitud máxima por cabecera
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
      return NextResponse.json(
        {
          success: false,
          error: "La carga útil enviada excede el tamaño máximo permitido (16 KB).",
        },
        { status: 413 }
      );
    }

    // 3. Lectura controlada del texto y parseo seguro de JSON
    const rawText = await req.text();
    if (rawText.length > MAX_BODY_BYTES) {
      return NextResponse.json(
        {
          success: false,
          error: "La solicitud excede el tamaño máximo permitido.",
        },
        { status: 413 }
      );
    }

    let rawBody: unknown;
    try {
      rawBody = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Cuerpo de solicitud inválido: formato JSON malformado.",
        },
        { status: 400 }
      );
    }

    // 4. Rate Limiting con IP autoritativa
    const ip = getClientIp(req.headers);
    const { allowed } = await checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Has superado el límite de solicitudes recientes. Por favor espera unos minutos.",
        },
        { status: 429 }
      );
    }

    // 5. Validación estricta con listas blancas y tipado
    const validation = validateQuoteForm(rawBody);
    if (!validation.isValid || !validation.sanitizedData) {
      return NextResponse.json(
        {
          success: false,
          error: "Datos de formulario inválidos o incompletos.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const data = validation.sanitizedData;

    // 6. Persistencia obligatoria en Supabase (Regla 02, Regla 03 y Auditoría B1)
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      console.warn("Aviso operativo: Supabase no está configurado en las variables de servidor.");
      return NextResponse.json(
        {
          success: false,
          error:
            "No pudimos registrar tu solicitud en este momento por mantenimiento del sistema. Por favor escribinos directamente por WhatsApp para coordinar tu presupuesto.",
        },
        { status: 503 }
      );
    }

    const { data: inserted, error: dbError } = await supabase
      .from("leads")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        business_name: data.businessName || null,
        service_type: data.serviceType,
        project_details: data.projectDetails || {},
        message: data.message,
        budget_range: data.budgetRange || null,
        timeline: data.timeline || null,
        status: "new",
        source: "landing_web",
        consent: true,
        consent_at: new Date().toISOString(),
      })
      .select("id")
      .single();

    if (dbError || !inserted) {
      console.error("Error al persistir lead en Supabase (código):", dbError?.code);
      return NextResponse.json(
        {
          success: false,
          error:
            "Ocurrió una falla al guardar tu solicitud en la base de datos. Por favor comunicate directamente por WhatsApp.",
        },
        { status: 503 }
      );
    }

    const leadId = inserted.id;

    // 7. Notificación asíncrona segura con after() de Next.js (no bloquea la respuesta ni se interrumpe)
    after(async () => {
      try {
        await sendTelegramNotification({
          leadId,
          name: data.name,
          email: data.email,
          phone: data.phone,
          serviceType: data.serviceType,
          businessName: data.businessName,
          message: data.message,
          budgetRange: data.budgetRange,
        });
      } catch (notifyErr) {
        console.error("Fallo menor en despacho asíncrono de notificación:", notifyErr);
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: "¡Tu solicitud ha sido recibida exitosamente! Nos contactaremos a la brevedad.",
        data: {
          leadId,
          name: data.name,
        },
      },
      { status: 201 }
    );
  } catch {
    console.error("Error no controlado en endpoint de cotización");
    return NextResponse.json(
      {
        success: false,
        error: "Ocurrió un error inesperado en el servidor. Por favor intenta nuevamente.",
      },
      { status: 500 }
    );
  }
}
