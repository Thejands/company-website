import type { APIRoute } from "astro";
import { isAdminRequest } from "@/lib/auth/admin-session";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export const prerender = false;

export const PATCH: APIRoute = async ({ request, params }) => {
  if (!(await isAdminRequest(request))) {
    return new Response(JSON.stringify({ error: "Unauthorized." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const id = params.id;
  if (!id) {
    return new Response(JSON.stringify({ error: "Missing job id." }), {
      status: 400,
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

  const body = (await request.json()) as Record<string, unknown>;
  const updates: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };

  const fields = [
    "title",
    "slug",
    "department",
    "location",
    "employment_type",
    "description",
    "status",
  ] as const;

  for (const field of fields) {
    if (body[field] !== undefined) updates[field] = body[field];
  }

  if (body.status === "published" && !body.published_at) {
    updates.published_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from("jobs")
    .update(updates)
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ job: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const DELETE: APIRoute = async ({ request, params }) => {
  if (!(await isAdminRequest(request))) {
    return new Response(JSON.stringify({ error: "Unauthorized." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const id = params.id;
  const supabase = getSupabaseAdmin();
  if (!supabase || !id) {
    return new Response(JSON.stringify({ error: "Invalid request." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { error } = await supabase.from("jobs").delete().eq("id", id);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
