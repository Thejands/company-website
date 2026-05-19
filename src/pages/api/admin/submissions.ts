import type { APIRoute } from "astro";
import { isAdminRequest } from "@/lib/auth/admin-session";
import { readContactSubmissions } from "@/lib/sheets/read-rows";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  if (!(await isAdminRequest(request))) {
    return new Response(JSON.stringify({ error: "Unauthorized." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const submissions = await readContactSubmissions(200);
  return new Response(JSON.stringify({ submissions }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
