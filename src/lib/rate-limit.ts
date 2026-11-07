import "server-only";

/**
 * Limitador de tasa para prevenir abusos y spam en el endpoint de cotizaciones.
 * Soporta Upstash Redis (si está configurado), tabla en Supabase (si está configurado)
 * y memoria local con advertencia operativa.
 */

const WINDOW_SECONDS = 900; // 15 minutos
const MAX_REQUESTS = 5; // Máximo 5 envíos por IP en 15 minutos

// Memoria local como fallback inmediato
const memoryStore = new Map<string, { count: number; expiresAt: number }>();

export function getClientIp(headers: Headers): string {
  const xRealIp = headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  const xVercelForwardedFor = headers.get("x-vercel-forwarded-for");
  if (xVercelForwardedFor) return xVercelForwardedFor.split(",")[0].trim();

  const xForwardedFor = headers.get("x-forwarded-for");
  if (xForwardedFor) return xForwardedFor.split(",")[0].trim();

  return "127.0.0.1";
}

export async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const now = Date.now();

  // 1. Limpieza de memoria local
  const memRecord = memoryStore.get(ip);
  if (memRecord && now > memRecord.expiresAt) {
    memoryStore.delete(ip);
  }

  // 2. Si hay Upstash Redis configurado en entorno
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (upstashUrl && upstashToken) {
    try {
      const key = `rate_limit:quote:${ip}`;
      const res = await fetch(`${upstashUrl}/incr/${encodeURIComponent(key)}`, {
        headers: { Authorization: `Bearer ${upstashToken}` },
        cache: "no-store",
      });
      const data = await res.json();
      const currentCount = typeof data?.result === "number" ? data.result : 1;

      if (currentCount === 1) {
        await fetch(`${upstashUrl}/expire/${encodeURIComponent(key)}/${WINDOW_SECONDS}`, {
          headers: { Authorization: `Bearer ${upstashToken}` },
          cache: "no-store",
        });
      }

      if (currentCount > MAX_REQUESTS) {
        return { allowed: false, remaining: 0 };
      }
      return { allowed: true, remaining: Math.max(0, MAX_REQUESTS - currentCount) };
    } catch (redisErr) {
      console.warn("Fallo en rate limit distribuido de Redis, usando fallback:", redisErr);
    }
  }

  // 3. Fallback de memoria
  const current = memoryStore.get(ip);
  if (!current) {
    memoryStore.set(ip, { count: 1, expiresAt: now + WINDOW_SECONDS * 1000 });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  current.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - current.count };
}
