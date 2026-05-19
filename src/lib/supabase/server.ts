import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getEnv } from "@/lib/env";

export type Database = {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string;
          slug: string;
          title: string;
          department: string | null;
          location: string | null;
          employment_type: string | null;
          description: string;
          status: "draft" | "published" | "closed";
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["jobs"]["Row"]> & {
          slug: string;
          title: string;
          description: string;
        };
        Update: Partial<Database["public"]["Tables"]["jobs"]["Row"]>;
      };
      candidates: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string | null;
          linkedin_url: string | null;
          created_at: string;
        };
        Insert: {
          email: string;
          full_name: string;
          phone?: string | null;
          linkedin_url?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["candidates"]["Row"]>;
      };
      applications: {
        Row: {
          id: string;
          job_id: string;
          candidate_id: string;
          stage:
            | "applied"
            | "screening"
            | "interview"
            | "offer"
            | "hired"
            | "rejected";
          resume_url: string | null;
          cover_letter: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          job_id: string;
          candidate_id: string;
          stage?: Database["public"]["Tables"]["applications"]["Row"]["stage"];
          resume_url?: string | null;
          cover_letter?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["applications"]["Row"]>;
      };
      application_events: {
        Row: {
          id: string;
          application_id: string;
          event_type: string;
          from_stage:
            | Database["public"]["Tables"]["applications"]["Row"]["stage"]
            | null;
          to_stage:
            | Database["public"]["Tables"]["applications"]["Row"]["stage"]
            | null;
          note: string | null;
          created_at: string;
        };
        Insert: {
          application_id: string;
          event_type: string;
          from_stage?:
            | Database["public"]["Tables"]["applications"]["Row"]["stage"]
            | null;
          to_stage?:
            | Database["public"]["Tables"]["applications"]["Row"]["stage"]
            | null;
          note?: string | null;
        };
        Update: Partial<
          Database["public"]["Tables"]["application_events"]["Row"]
        >;
      };
    };
  };
};

let adminClient: SupabaseClient<Database> | null = null;

export function getSupabaseAdmin(): SupabaseClient<Database> | null {
  const url = getEnv("PUBLIC_SUPABASE_URL");
  const key = getEnv("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) return null;
  if (!adminClient) {
    adminClient = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return adminClient;
}

export function getSupabasePublic(): SupabaseClient<Database> | null {
  const url = getEnv("PUBLIC_SUPABASE_URL");
  const key = getEnv("PUBLIC_SUPABASE_ANON_KEY");
  if (!url || !key) return null;
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
