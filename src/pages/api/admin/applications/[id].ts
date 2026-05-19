import type { APIRoute } from "astro";
import { isAdminRequest } from "@/lib/auth/admin-session";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export const prerender = false;

const STAGES = [
  "applied",
  "screening",
  "interview",
  "offer",
  "hired",
  "rejected",
] as const;

export const GET: APIRoute = async ({ request, params }) => {
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

  const { data, error } = await supabase
    .from("applications")
    .select(
      `
      *,
      jobs ( title, slug ),
      candidates ( full_name, email, phone, linkedin_url ),
      application_events ( id, event_type, from_stage, to_stage, note, created_at )
    `,
    )
    .eq("id", id)
    .maybeSingle();

  if (error || !data) {
    return new Response(
      JSON.stringify({ error: error?.message ?? "Not found." }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  return new Response(JSON.stringify({ application: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const PATCH: APIRoute = async ({ request, params }) => {
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

  const body = (await request.json()) as { stage?: string; note?: string };
  const stage = body.stage as (typeof STAGES)[number] | undefined;

  if (!stage || !STAGES.includes(stage)) {
    return new Response(JSON.stringify({ error: "Invalid stage." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { data: existing } = await supabase
    .from("applications")
    .select("stage")
    .eq("id", id)
    .single();

  const fromStage = existing?.stage ?? null;

  const { data, error } = await supabase
    .from("applications")
    .update({ stage, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  await supabase.from("application_events").insert({
    application_id: id,
    event_type: "stage_change",
    from_stage: fromStage,
    to_stage: stage,
    note: body.note?.trim() || null,
  });

  return new Response(JSON.stringify({ application: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
