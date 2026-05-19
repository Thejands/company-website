/** Server-only env helpers (never expose secrets to client). */
export function getEnv(name: string): string | undefined {
  const value = import.meta.env[name];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function requireEnv(name: string): string {
  const value = getEnv(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

/** Parse service account JSON from raw JSON or base64-encoded JSON. */
export function parseServiceAccountJson(raw: string): Record<string, unknown> {
  const trimmed = raw.trim();
  try {
    if (trimmed.startsWith("{")) {
      return JSON.parse(trimmed) as Record<string, unknown>;
    }
    const decoded = Buffer.from(trimmed, "base64").toString("utf8");
    return JSON.parse(decoded) as Record<string, unknown>;
  } catch {
    throw new Error("Invalid GOOGLE_SERVICE_ACCOUNT_JSON");
  }
}
