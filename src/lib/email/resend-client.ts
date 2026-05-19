import { Resend } from "resend";
import { getEnv } from "@/lib/env";
import { isProductionSite } from "@/config/site-env";

let client: Resend | null = null;

export function getResendClient(): Resend | null {
  if (!isProductionSite) return null;
  const apiKey = getEnv("RESEND_API_KEY");
  if (!apiKey) return null;
  if (!client) client = new Resend(apiKey);
  return client;
}

export function getFromEmail(): string {
  return getEnv("RESEND_FROM_EMAIL") ?? "Thejands <hello@thejands.in>";
}

export function getContactNotifyEmail(): string {
  return getEnv("CONTACT_NOTIFY_EMAIL") ?? "hello@thejands.in";
}

export async function sendEmail(params: {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}): Promise<{ ok: true; id?: string } | { ok: false; error: string }> {
  const resend = getResendClient();
  if (!resend) {
    console.info("[email] Skipped (non-production or missing RESEND_API_KEY)", {
      subject: params.subject,
      to: params.to,
    });
    return { ok: true, id: "skipped-non-production" };
  }

  const { data, error } = await resend.emails.send({
    from: getFromEmail(),
    to: params.to,
    subject: params.subject,
    html: params.html,
    text: params.text,
    replyTo: params.replyTo,
  });

  if (error) {
    console.error("[email] Resend error", error);
    return { ok: false, error: error.message };
  }

  return { ok: true, id: data?.id };
}
