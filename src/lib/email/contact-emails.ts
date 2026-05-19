import { getContactNotifyEmail, sendEmail } from "@/lib/email/resend-client";
import type { ContactInput } from "@/lib/contact/validate";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendTeamContactNotification(
  submissionId: string,
  input: ContactInput,
  environment: string,
): Promise<{ ok: boolean; error?: string }> {
  const notifyTo = getContactNotifyEmail();
  const subject = `New contact: ${input.name} (${submissionId.slice(0, 8)})`;
  const text = [
    `Submission ID: ${submissionId}`,
    `Environment: ${environment}`,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    input.pageUrl ? `Page: ${input.pageUrl}` : "",
    "",
    "Message:",
    input.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <p><strong>New contact form submission</strong></p>
    <p><strong>ID:</strong> ${escapeHtml(submissionId)}</p>
    <p><strong>Environment:</strong> ${escapeHtml(environment)}</p>
    <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></p>
    ${input.pageUrl ? `<p><strong>Page:</strong> ${escapeHtml(input.pageUrl)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(input.message)}</pre>
  `;

  const result = await sendEmail({
    to: notifyTo,
    subject,
    html,
    text,
    replyTo: input.email,
  });

  return result.ok ? { ok: true } : { ok: false, error: result.error };
}

export async function sendUserContactConfirmation(
  submissionId: string,
  input: ContactInput,
): Promise<{ ok: boolean; error?: string }> {
  const subject = "We received your message - Thejands";
  const text = [
    `Hi ${input.name},`,
    "",
    "Thanks for reaching out to Thejands. We received your message and will reply within one business day.",
    "",
    `Reference: ${submissionId}`,
    "",
    "Your message:",
    input.message,
    "",
    "Thejands",
    "hello@thejands.in",
  ].join("\n");

  const html = `
    <p>Hi ${escapeHtml(input.name)},</p>
    <p>Thanks for reaching out to <strong>Thejands</strong>. We received your message and will reply within one business day.</p>
    <p><strong>Reference:</strong> ${escapeHtml(submissionId)}</p>
    <p><strong>Your message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;background:#f5f5f5;padding:12px;border-radius:8px">${escapeHtml(input.message)}</pre>
    <p>- Thejands<br><a href="mailto:hello@thejands.in">hello@thejands.in</a></p>
  `;

  const result = await sendEmail({
    to: input.email,
    subject,
    html,
    text,
  });

  return result.ok ? { ok: true } : { ok: false, error: result.error };
}
