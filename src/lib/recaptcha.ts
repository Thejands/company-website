import { getEnv } from "@/lib/env";

export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = getEnv("RECAPTCHA_SECRET_KEY");
  if (!secret) {
    if (getEnv("PUBLIC_RECAPTCHA_SITE_KEY")) {
      console.error(
        "RECAPTCHA_SECRET_KEY is required when PUBLIC_RECAPTCHA_SITE_KEY is set",
      );
      return false;
    }
    return true;
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

export function isRecaptchaRequired(): boolean {
  return Boolean(getEnv("PUBLIC_RECAPTCHA_SITE_KEY"));
}
