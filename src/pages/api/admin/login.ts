import type { APIRoute } from "astro";
import {
  createSessionToken,
  sessionCookieHeader,
} from "@/lib/auth/admin-session";
import { getEnv } from "@/lib/env";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const adminPassword = getEnv("ADMIN_PASSWORD");
  if (!adminPassword) {
    return new Response(JSON.stringify({ error: "Admin not configured." }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = (await request.json()) as { password?: string };
  if (body.password !== adminPassword) {
    return new Response(JSON.stringify({ error: "Invalid password." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const token = await createSessionToken();
  if (!token) {
    return new Response(JSON.stringify({ error: "Session error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": sessionCookieHeader(token),
    },
  });
};
