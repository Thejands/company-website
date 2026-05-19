import { getSupabaseAdmin } from "@/lib/supabase/server";
import {
  sendApplicantConfirmation,
  sendTeamApplicationNotification,
} from "@/lib/email/career-emails";

const MAX_COVER = 8000;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export interface ApplyInput {
  jobSlug: string;
  fullName: string;
  email: string;
  phone?: string;
  linkedinUrl?: string;
  coverLetter?: string;
  resumeFile?: File | null;
}

export async function submitJobApplication(
  input: ApplyInput,
): Promise<
  | { ok: true; applicationId: string; message: string }
  | { ok: false; error: string }
> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { ok: false, error: "Careers system is not configured yet." };
  }

  const cover = input.coverLetter?.trim() ?? "";
  if (cover.length > MAX_COVER) {
    return { ok: false, error: "Cover letter is too long." };
  }

  const { data: job, error: jobError } = await supabase
    .from("jobs")
    .select("id, title, slug, status")
    .eq("slug", input.jobSlug)
    .eq("status", "published")
    .maybeSingle();

  if (jobError || !job) {
    return { ok: false, error: "This role is not open for applications." };
  }

  const { data: candidate, error: candError } = await supabase
    .from("candidates")
    .upsert(
      {
        email: input.email.toLowerCase(),
        full_name: input.fullName,
        phone: input.phone ?? null,
        linkedin_url: input.linkedinUrl ?? null,
      },
      { onConflict: "email" },
    )
    .select("id")
    .single();

  if (candError || !candidate) {
    return { ok: false, error: "Could not save candidate profile." };
  }

  let resumeUrl: string | null = null;
  if (input.resumeFile && input.resumeFile.size > 0) {
    if (input.resumeFile.size > MAX_FILE_BYTES) {
      return { ok: false, error: "Resume must be 5 MB or smaller." };
    }
    if (
      input.resumeFile.type &&
      !ALLOWED_TYPES.includes(input.resumeFile.type)
    ) {
      return {
        ok: false,
        error: "Resume must be PDF or Word document.",
      };
    }

    const ext = input.resumeFile.name.split(".").pop()?.toLowerCase() || "pdf";
    const path = `${job.id}/${candidate.id}-${Date.now()}.${ext}`;
    const buffer = Buffer.from(await input.resumeFile.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(path, buffer, {
        contentType: input.resumeFile.type || "application/pdf",
        upsert: false,
      });

    if (uploadError) {
      console.error("[careers] Resume upload failed", uploadError);
      return { ok: false, error: "Could not upload resume. Try again." };
    }

    const { data: publicUrl } = supabase.storage
      .from("resumes")
      .getPublicUrl(path);
    resumeUrl = publicUrl.publicUrl;
  }

  const { data: application, error: appError } = await supabase
    .from("applications")
    .insert({
      job_id: job.id,
      candidate_id: candidate.id,
      stage: "applied",
      resume_url: resumeUrl,
      cover_letter: cover || null,
    })
    .select("id")
    .single();

  if (appError || !application) {
    if (appError?.code === "23505") {
      return {
        ok: false,
        error: "You have already applied for this role.",
      };
    }
    return { ok: false, error: "Could not save application." };
  }

  await supabase.from("application_events").insert({
    application_id: application.id,
    event_type: "created",
    to_stage: "applied",
    note: "Application submitted via careers page",
  });

  await Promise.all([
    sendTeamApplicationNotification({
      applicationId: application.id,
      jobTitle: job.title,
      candidateName: input.fullName,
      candidateEmail: input.email,
    }),
    sendApplicantConfirmation({
      applicationId: application.id,
      jobTitle: job.title,
      candidateName: input.fullName,
      candidateEmail: input.email,
    }),
  ]);

  return {
    ok: true,
    applicationId: application.id,
    message: `Thanks, ${input.fullName}. We received your application for ${job.title}. Check your email for confirmation.`,
  };
}
