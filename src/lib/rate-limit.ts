import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getEnv } from "@/lib/env";

let contactLimiter: Ratelimit | null = null;

function getContactLimiter(): Ratelimit | null {
  const url = getEnv("UPSTASH_REDIS_REST_URL");
  const token = getEnv("UPSTASH_REDIS_REST_TOKEN");
  if (!url || !token) return null;

  if (!contactLimiter) {
    contactLimiter = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      prefix: "thejands:contact",
    });
  }
  return contactLimiter;
}

export async function checkContactRateLimit(
  identifier: string,
): Promise<{ allowed: true } | { allowed: false; retryAfter?: number }> {
  const limiter = getContactLimiter();
  if (!limiter) return { allowed: true };

  const result = await limiter.limit(identifier);
  if (result.success) return { allowed: true };

  return {
    allowed: false,
    retryAfter: Math.ceil((result.reset - Date.now()) / 1000),
  };
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}
