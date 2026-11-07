/**
 * Enrutador de notificaciones a canales administrativos (ej: Telegram Bot)
 */
export async function sendTelegramNotification(payload: {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  businessName?: string;
  message: string;
  budgetRange?: string;
}): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // Modo silencioso: no simular envíos si no hay configuración
    return false;
  }

  const text = `🚀 *Nueva Solicitud de Presupuesto* 🚀\n\n` +
    `👤 *Cliente:* ${payload.name}\n` +
    `📧 *Email:* ${payload.email}\n` +
    `📱 *Teléfono:* ${payload.phone || "No especificado"}\n` +
    `🏢 *Empresa:* ${payload.businessName || "No especificado"}\n` +
    `🛠️ *Servicio:* ${payload.serviceType.toUpperCase()}\n` +
    `💰 *Presupuesto:* ${payload.budgetRange || "A convenir"}\n\n` +
    `📝 *Mensaje:*\n${payload.message}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });
    return res.ok;
  } catch (err) {
    console.error("Error enviando alerta a Telegram:", err);
    return false;
  }
}

