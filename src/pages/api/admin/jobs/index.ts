import type { APIRoute } from "astro";
import { isAdminRequest } from "@/lib/auth/admin-session";
import { slugify } from "@/lib/careers/slug";
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
    .from("jobs")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ jobs: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
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

  const body = (await request.json()) as {
    title?: string;
    slug?: string;
    department?: string;
    location?: string;
    employment_type?: string;
    description?: string;
    status?: "draft" | "published" | "closed";
  };

  const title = body.title?.trim();
  const description = body.description?.trim();
  if (!title || !description) {
    return new Response(
      JSON.stringify({ error: "Title and description required." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const slug = body.slug?.trim() || slugify(title);
  const status = body.status ?? "draft";
  const published_at = status === "published" ? new Date().toISOString() : null;

  const { data, error } = await supabase
    .from("jobs")
    .insert({
      title,
      slug,
      description,
      department: body.department?.trim() || null,
      location: body.location?.trim() || null,
      employment_type: body.employment_type?.trim() || "full_time",
      status,
      published_at,
    })
    .select("*")
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ job: data }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
