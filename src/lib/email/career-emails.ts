import { getContactNotifyEmail, sendEmail } from "@/lib/email/resend-client";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendTeamApplicationNotification(params: {
  applicationId: string;
  jobTitle: string;
  candidateName: string;
  candidateEmail: string;
}): Promise<{ ok: boolean; error?: string }> {
  const subject = `New application: ${params.candidateName} - ${params.jobTitle}`;
  const text = [
    `Application ID: ${params.applicationId}`,
    `Role: ${params.jobTitle}`,
    `Candidate: ${params.candidateName}`,
    `Email: ${params.candidateEmail}`,
    "",
    "Review in admin: /admin/applications",
  ].join("\n");

  const html = `
    <p><strong>New job application</strong></p>
    <p><strong>ID:</strong> ${escapeHtml(params.applicationId)}</p>
    <p><strong>Role:</strong> ${escapeHtml(params.jobTitle)}</p>
    <p><strong>Candidate:</strong> ${escapeHtml(params.candidateName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(params.candidateEmail)}</p>
    <p><a href="https://thejands.in/admin/applications">Open applications</a></p>
  `;

  const result = await sendEmail({
    to: getContactNotifyEmail(),
    subject,
    html,
    text,
    replyTo: params.candidateEmail,
  });
  return result.ok ? { ok: true } : { ok: false, error: result.error };
}

export async function sendApplicantConfirmation(params: {
  candidateName: string;
  candidateEmail: string;
  jobTitle: string;
  applicationId: string;
}): Promise<{ ok: boolean; error?: string }> {
  const subject = `Application received - ${params.jobTitle} at Thejands`;
  const text = [
    `Hi ${params.candidateName},`,
    "",
    `Thanks for applying for ${params.jobTitle} at Thejands. We received your application and will review it soon.`,
    "",
    `Reference: ${params.applicationId}`,
    "",
    "Thejands",
    "hello@thejands.in",
  ].join("\n");

  const html = `
    <p>Hi ${escapeHtml(params.candidateName)},</p>
    <p>Thanks for applying for <strong>${escapeHtml(params.jobTitle)}</strong> at Thejands. We received your application and will review it soon.</p>
    <p><strong>Reference:</strong> ${escapeHtml(params.applicationId)}</p>
    <p>- Thejands<br><a href="mailto:hello@thejands.in">hello@thejands.in</a></p>
  `;

  const result = await sendEmail({
    to: params.candidateEmail,
    subject,
    html,
    text,
  });
  return result.ok ? { ok: true } : { ok: false, error: result.error };
}
