import type { APIRoute } from "astro";
import { isAdminRequest } from "@/lib/auth/admin-session";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  if (!(await isAdminRequest(request))) {
    return new Response(JSON.stringify({ error: "Unauthorized." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return new Response(JSON.stringify({ error: "Supabase not configured." }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { data, error } = await supabase
    .from("applications")
    .select(
      `
      id,
      stage,
      resume_url,
      cover_letter,
      created_at,
      updated_at,
      jobs ( id, title, slug ),
      candidates ( id, full_name, email, phone, linkedin_url )
    `,
    )
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ applications: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
