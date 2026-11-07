/**
 * Limitador de tasa básico en memoria para prevenir spam/abusos en la API de cotizaciones
 */
const rateLimitMap = new Map<string, { count: number; firstRequestTime: number }>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutos
const MAX_REQUESTS = 6; // Máximo 6 solicitudes por IP cada 15 min

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (now - record.firstRequestTime > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}

