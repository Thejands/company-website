/** Server-only env helpers (never expose secrets to client). */
export function getEnv(name: string): string | undefined {
  // Prefer process.env — Vercel injects runtime env vars there at request time,
  // whereas import.meta.env inlines values at *build* time (private vars missing
  // at build would be baked in as undefined even if added to Vercel later).
  const value =
    (typeof process !== "undefined" ? process.env[name] : undefined) ??
    import.meta.env[name];
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
  let credentials: Record<string, unknown>;
  try {
    if (trimmed.startsWith("{")) {
      credentials = JSON.parse(trimmed) as Record<string, unknown>;
    } else {
      const decoded = Buffer.from(trimmed, "base64").toString("utf8");
      credentials = JSON.parse(decoded) as Record<string, unknown>;
    }
  } catch {
    throw new Error("Invalid GOOGLE_SERVICE_ACCOUNT_JSON");
  }

  // Vercel may store the JSON's \n escape sequences as literal backslash-n
  // characters (\\n in the raw string) rather than actual newline characters.
  // The PEM parser requires real newlines — without them Node.js / OpenSSL
  // throws "error:1E08010C:DECODER routines::unsupported" at JWT-sign time.
  if (typeof credentials.private_key === "string") {
    credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
  }

  return credentials;
}
