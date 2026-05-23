import { randomUUID } from "node:crypto";
import { siteEnvironment } from "@/config/site-env";
import { getEnv } from "@/lib/env";
import {
  sendTeamContactNotification,
  sendUserContactConfirmation,
} from "@/lib/email/contact-emails";
import { appendContactRow, appendErrorRow } from "@/lib/sheets/append-row";
import type { ContactInput } from "@/lib/contact/validate";

export interface SubmitContactResult {
  ok: true;
  submissionId: string;
  message: string;
}

export interface SubmitContactError {
  ok: false;
  error: string;
  submissionId?: string;
}

export async function submitContact(
  input: ContactInput,
): Promise<SubmitContactResult | SubmitContactError> {
  const submissionId = randomUUID();
  const submittedAt = new Date().toISOString();
  const environment = siteEnvironment;

  const row = {
    id: submissionId,
    submittedAt,
    name: input.name,
    email: input.email,
    message: input.message,
    pageUrl: input.pageUrl ?? "",
    environment,
    status: "new",
  };

  let sheetOk = false;
  let teamEmailOk = false;
  let userEmailOk = false;
  const errors: string[] = [];

  try {
    await appendContactRow(row);
    sheetOk = true;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Sheet append failed";
    errors.push(`sheets: ${msg}`);
    await appendErrorRow({
      occurredAt: submittedAt,
      context: "contact_submission",
      submissionId,
      error: msg,
      environment,
    });
  }

  const [teamResult, userResult] = await Promise.all([
    sendTeamContactNotification(submissionId, input, environment),
    sendUserContactConfirmation(submissionId, input),
  ]);

  teamEmailOk = teamResult.ok;
  userEmailOk = userResult.ok;
  if (!teamResult.ok) errors.push(`team_email: ${teamResult.error}`);
  if (!userResult.ok) errors.push(`user_email: ${userResult.error}`);

  // Use getEnv() so these checks read from process.env at runtime rather than
  // being baked as build-time constants by Vite's import.meta.env inlining.
  const sheetsConfigured = Boolean(getEnv("GOOGLE_SERVICE_ACCOUNT_JSON"));
  const emailsRequired =
    siteEnvironment === "production" && Boolean(getEnv("RESEND_API_KEY"));

  const sheetPass = !sheetsConfigured || sheetOk;
  const emailPass = !emailsRequired || (teamEmailOk && userEmailOk);

  if (sheetPass && emailPass) {
    return {
      ok: true,
      submissionId,
      message: `Thanks, ${input.name}. We sent a confirmation to ${input.email} and will reply soon.`,
    };
  }

  if (errors.length > 0) {
    await appendErrorRow({
      occurredAt: new Date().toISOString(),
      context: "contact_partial_failure",
      submissionId,
      error: errors.join("; "),
      environment,
    });
  }

  return {
    ok: false,
    error:
      "We could not complete your submission. Please email hello@thejands.in directly.",
    submissionId,
  };
}
