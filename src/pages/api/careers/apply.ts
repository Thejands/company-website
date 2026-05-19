import type { APIRoute } from "astro";
import { submitJobApplication } from "@/lib/careers/submit-application";
import { checkContactRateLimit, getClientIp } from "@/lib/rate-limit";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const ip = getClientIp(request);
  const rate = await checkContactRateLimit(`apply:${ip}`);
  if (!rate.allowed) {
    return new Response(
      JSON.stringify({
        error: "Too many applications. Please try again later.",
      }),
      { status: 429, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    const form = await request.formData();
    const jobSlug = String(form.get("jobSlug") ?? "").trim();
    const fullName = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const linkedinUrl = String(form.get("linkedinUrl") ?? "").trim();
    const coverLetter = String(form.get("coverLetter") ?? "").trim();
    const resumeFile = form.get("resume");

    if (!jobSlug || !fullName || !email) {
      return new Response(
        JSON.stringify({ error: "Name, email, and role are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const result = await submitJobApplication({
      jobSlug,
      fullName,
      email,
      phone: phone || undefined,
      linkedinUrl: linkedinUrl || undefined,
      coverLetter: coverLetter || undefined,
      resumeFile: resumeFile instanceof File ? resumeFile : null,
    });

    if (!result.ok) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        ok: true,
        applicationId: result.applicationId,
        message: result.message,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("[careers/apply]", e);
    return new Response(JSON.stringify({ error: "Invalid request." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
