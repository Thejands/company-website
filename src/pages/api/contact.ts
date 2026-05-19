import type { APIRoute } from "astro";
import { siteConfig } from "@/config/site";

export const prerender = false;

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  recaptchaToken?: string;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = import.meta.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    if (import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY) {
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
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();
    const recaptchaToken = body.recaptchaToken?.trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const recaptchaRequired = Boolean(
      import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY,
    );

    if (recaptchaRequired) {
      if (!recaptchaToken) {
        return new Response(
          JSON.stringify({ error: "Please complete the reCAPTCHA." }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      const validCaptcha = await verifyRecaptcha(recaptchaToken);
      if (!validCaptcha) {
        return new Response(
          JSON.stringify({ error: "reCAPTCHA verification failed." }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }

    const formEndpoint = import.meta.env.PUBLIC_CONTACT_FORM_URL;
    if (formEndpoint) {
      const forward = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Thejands inquiry from ${name}`,
        }),
      });

      if (!forward.ok) {
        return new Response(
          JSON.stringify({
            error: "Could not deliver message. Email us directly.",
          }),
          { status: 502, headers: { "Content-Type": "application/json" } },
        );
      }
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: `Thanks - we'll reply to ${email} soon.`,
        fallbackEmail: siteConfig.contact.email,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
