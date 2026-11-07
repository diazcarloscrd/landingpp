import "server-only";

export interface TelegramNotificationPayload {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  businessName?: string;
  message: string;
  budgetRange?: string;
  leadId?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Envío de alertas a Telegram para el equipo interno.
 * Utiliza formato HTML debidamente escapado y nunca expone datos personales en logs de error.
 */
export async function sendTelegramNotification(
  payload: TelegramNotificationPayload
): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // Si no está configurado, continuar en silencio (Regla 03)
    return false;
  }

  const html =
    `<b>🚀 Nueva Solicitud de Proyecto (CDByte)</b>\n\n` +
    `<b>Referencia:</b> <code>${escapeHtml(payload.leadId || "N/A")}</code>\n` +
    `<b>Cliente:</b> ${escapeHtml(payload.name)}\n` +
    `<b>Email:</b> ${escapeHtml(payload.email)}\n` +
    `<b>Teléfono:</b> ${escapeHtml(payload.phone || "No especificado")}\n` +
    `<b>Empresa:</b> ${escapeHtml(payload.businessName || "No especificada")}\n` +
    `<b>Servicio:</b> ${escapeHtml(payload.serviceType.toUpperCase())}\n` +
    `<b>Presupuesto:</b> ${escapeHtml(payload.budgetRange || "Flexible")}\n\n` +
    `<b>Mensaje:</b>\n${escapeHtml(payload.message)}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: html,
        parse_mode: "HTML",
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn("Aviso: Telegram devolvió código HTTP no exitoso:", res.status);
      return false;
    }
    return true;
  } catch {
    // Proteger privacidad: no loguear datos personales en caso de error
    console.error("Error al despachar notificación a Telegram (error de red o timeout)");
    return false;
  }
}
