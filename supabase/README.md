# Supabase setup (Thejands ATS)

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** and run `migrations/001_ats_schema.sql`.
3. In **Storage**, create bucket `resumes` (private). Service role uploads from `/api/careers/apply`.
4. Copy **Project URL**, **anon key**, and **service role key** to Vercel env (see root `.env.example`).
5. Create jobs in `/admin/jobs` with status `published` to show them on `/careers`.
