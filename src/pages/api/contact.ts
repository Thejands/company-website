import type { APIRoute } from "astro";
import { submitContact } from "@/lib/contact/submit-contact";
import { validateContactInput } from "@/lib/contact/validate";
import {
  isRecaptchaRequired,
  verifyRecaptcha,
  RECAPTCHA_ACTIONS,
} from "@/lib/recaptcha";
import { checkContactRateLimit, getClientIp } from "@/lib/rate-limit";

export const prerender = false;

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  pageUrl?: string;
  recaptchaToken?: string;
}

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const ip = getClientIp(request);
    const rate = await checkContactRateLimit(ip);
    if (!rate.allowed) {
      return json(
        {
          error:
            "Too many submissions. Please try again later or email us directly.",
          retryAfter: rate.retryAfter,
        },
        429,
      );
    }

    const body = (await request.json()) as ContactBody;

    if (isRecaptchaRequired()) {
      const token = body.recaptchaToken?.trim();
      if (!token) {
        return json({ error: "Please complete the reCAPTCHA." }, 400);
      }
      if (!(await verifyRecaptcha(token, RECAPTCHA_ACTIONS.CONTACT_FORM))) {
        return json({ error: "reCAPTCHA verification failed." }, 400);
      }
    }

    const validated = validateContactInput(body);
    if (!validated.ok) {
      return json({ error: validated.error }, 400);
    }

    const pageUrl =
      validated.data.pageUrl || request.headers.get("referer") || undefined;

    const result = await submitContact({
      ...validated.data,
      pageUrl,
    });

    if (!result.ok) {
      return json(
        { error: result.error, submissionId: result.submissionId },
        502,
      );
    }

    return json(
      {
        ok: true,
        submissionId: result.submissionId,
        message: result.message,
      },
      200,
    );
  } catch (e) {
    console.error("[contact] Unhandled error", e);
    return json({ error: "Invalid request." }, 500);
  }
};
