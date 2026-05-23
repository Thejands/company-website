/**
 * reCAPTCHA Enterprise — server-side assessment via REST API.
 *
 * Uses the Google Cloud reCAPTCHA Enterprise REST endpoint.
 * No gRPC / @google-cloud package required (Vercel-compatible).
 *
 * Required env vars:
 *   PUBLIC_RECAPTCHA_SITE_KEY    — Enterprise site key (also used client-side)
 *   RECAPTCHA_ENTERPRISE_API_KEY — Google Cloud API key (starts with "AIza…")
 *                                  NOT the reCAPTCHA secret key.
 *                                  Create at: Cloud Console → APIs & Services
 *                                  → Credentials → Create API Key, then restrict
 *                                  to "reCAPTCHA Enterprise API" only.
 *   RECAPTCHA_PROJECT_ID         — GCP project ID (default: "thejands-website")
 *
 * Score range: 0.0 (likely bot) → 1.0 (likely human). Threshold: 0.5.
 *
 * Non-production bypass:
 *   When PUBLIC_SITE_ENV is not "production", verification is skipped and all
 *   tokens are accepted. This lets localhost / staging work without needing
 *   the domain registered in the Enterprise console.
 */

import { getEnv } from "@/lib/env";

const SCORE_THRESHOLD = 0.5;

// Action names — must match what the client passes to grecaptcha.enterprise.execute()
export const RECAPTCHA_ACTIONS = {
  CONTACT_FORM: "CONTACT_FORM",
  CAREER_APPLY: "CAREER_APPLY",
} as const;

export type RecaptchaAction =
  (typeof RECAPTCHA_ACTIONS)[keyof typeof RECAPTCHA_ACTIONS];

/** Returns true when reCAPTCHA Enterprise is configured and should be enforced. */
export function isRecaptchaRequired(): boolean {
  return Boolean(getEnv("PUBLIC_RECAPTCHA_SITE_KEY"));
}

/**
 * Returns true when we're running in production mode.
 * Non-production (localhost / staging) always bypasses verification.
 */
function isProduction(): boolean {
  return getEnv("PUBLIC_SITE_ENV") === "production";
}

/**
 * Verify a reCAPTCHA Enterprise token against the assessment API.
 *
 * @param token - Token from grecaptcha.enterprise.execute() on the client
 * @param expectedAction - Must match the action string used on the client
 * @returns true if the token is valid, action matches, and score ≥ 0.5
 */
export async function verifyRecaptcha(
  token: string,
  expectedAction: RecaptchaAction = RECAPTCHA_ACTIONS.CONTACT_FORM,
): Promise<boolean> {
  // ── Non-production bypass ──────────────────────────────────────────────────
  // Skip verification on localhost / staging so developers aren't blocked and
  // the domain doesn't need to be added to the Enterprise console.
  if (!isProduction()) {
    console.log(
      `[recaptcha] Non-production env — skipping verification for action "${expectedAction}"`,
    );
    return true;
  }

  // ── Key validation ─────────────────────────────────────────────────────────
  const apiKey = getEnv("RECAPTCHA_ENTERPRISE_API_KEY");
  const projectId = getEnv("RECAPTCHA_PROJECT_ID") ?? "thejands-website";
  const siteKey = getEnv("PUBLIC_RECAPTCHA_SITE_KEY");

  if (!apiKey) {
    console.error(
      "[recaptcha] RECAPTCHA_ENTERPRISE_API_KEY is not set — cannot verify token.",
    );
    return false;
  }

  // Google Cloud API keys always start with "AIza". If the key starts with
  // anything else (e.g. "6Lds..." — a reCAPTCHA site/secret key) it is the
  // wrong credential type and will be rejected by the assessment endpoint.
  if (!apiKey.startsWith("AIza")) {
    console.error(
      "[recaptcha] RECAPTCHA_ENTERPRISE_API_KEY looks wrong — it should be a " +
        "Google Cloud API Key (starts with 'AIza…'), NOT a reCAPTCHA site key or secret key. " +
        "Create one at: Cloud Console → APIs & Services → Credentials → Create API Key, " +
        "then restrict it to 'reCAPTCHA Enterprise API'.",
    );
    return false;
  }

  if (!siteKey) {
    console.error(
      "[recaptcha] PUBLIC_RECAPTCHA_SITE_KEY is not set — cannot verify token.",
    );
    return false;
  }

  // ── REST assessment ────────────────────────────────────────────────────────
  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`;

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: {
          token,
          siteKey,
          expectedAction,
        },
      }),
    });
  } catch (err) {
    console.error("[recaptcha] Network error calling assessment API:", err);
    return false;
  }

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "(unreadable)");
    console.error(
      `[recaptcha] Assessment API returned ${res.status}:`,
      errorBody,
    );
    return false;
  }

  const data = (await res.json()) as {
    tokenProperties?: {
      valid?: boolean;
      action?: string;
      invalidReason?: string;
      hostname?: string;
    };
    riskAnalysis?: {
      score?: number;
      reasons?: string[];
    };
    name?: string;
  };

  // 1. Token must be valid
  if (!data.tokenProperties?.valid) {
    console.warn(
      "[recaptcha] Token invalid — reason:",
      data.tokenProperties?.invalidReason ?? "unknown",
      "| hostname:",
      data.tokenProperties?.hostname ?? "unknown",
      "(ensure this domain is registered in the reCAPTCHA Enterprise console)",
    );
    return false;
  }

  // 2. Action must match to prevent token replay across different form actions
  if (data.tokenProperties.action !== expectedAction) {
    console.warn(
      `[recaptcha] Action mismatch — expected "${expectedAction}", got "${data.tokenProperties.action}"`,
    );
    return false;
  }

  // 3. Score must meet threshold
  const score = data.riskAnalysis?.score ?? 0;
  const reasons = data.riskAnalysis?.reasons ?? [];

  console.log(
    `[recaptcha] Score: ${score} | action: ${data.tokenProperties.action} | reasons: [${reasons.join(", ")}]`,
  );

  return score >= SCORE_THRESHOLD;
}
