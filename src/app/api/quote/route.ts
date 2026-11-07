import { NextRequest, NextResponse } from "next/server";
import { validateQuoteForm } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { getSupabaseServerClient } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    // 1. Obtención de IP y control de abuso / rate limit
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const { allowed } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Has superado el límite de solicitudes recientes. Por favor espera unos minutos.",
        },
        { status: 429 }
      );
    }

    // 2. Parseo y validación estricta de carga útil
    const body = await req.json();
    const validation = validateQuoteForm(body);

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

    // 3. Persistencia en Base de Datos (Supabase con fallback seguro local)
    const supabase = getSupabaseServerClient();
    let leadId = `lead-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
    let persistedInSupabase = false;

    if (supabase) {
      const { data: inserted, error: dbError } = await supabase
        .from("leads")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          business_name: data.businessName || null,
          industry: data.industry || null,
          service_type: data.serviceType,
          project_details: data.projectDetails || {},
          message: data.message,
          budget_range: data.budgetRange || null,
          timeline: data.timeline || null,
          status: "new",
          source: "landing_web",
          consent: true,
        })
        .select("id")
        .single();

      if (dbError) {
        console.error("Error persistiendo en Supabase:", dbError);
      } else if (inserted) {
        leadId = inserted.id;
        persistedInSupabase = true;
      }
    }

    // Fallback de almacenamiento seguro estructurado en servidor (para no perder el lead si Supabase no está conectado)
    if (!persistedInSupabase) {
      try {
        const storageDir = path.join(process.cwd(), "docs", "operations", "leads-backup");
        if (!fs.existsSync(storageDir)) {
          fs.mkdirSync(storageDir, { recursive: true });
        }
        const record = {
          id: leadId,
          created_at: new Date().toISOString(),
          ...data,
          status: "new",
        };
        fs.writeFileSync(
          path.join(storageDir, `${leadId}.json`),
          JSON.stringify(record, null, 2),
          "utf-8"
        );
      } catch (backupErr) {
        console.error("Error guardando respaldo local del lead:", backupErr);
      }
    }

    // 4. Disparo opcional de notificación asíncrona (Telegram)
    sendTelegramNotification({
      name: data.name!,
      email: data.email!,
      phone: data.phone,
      serviceType: data.serviceType!,
      businessName: data.businessName,
      message: data.message!,
      budgetRange: data.budgetRange,
    }).catch((err) => console.error("Error en notificación:", err));

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
  } catch (error) {
    console.error("Error crítico procesando solicitud de cotización:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Ocurrió un error inesperado al procesar tu solicitud. Por favor intenta nuevamente.",
      },
      { status: 500 }
    );
  }
}

