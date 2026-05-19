-- Thejands ATS schema (run in Supabase SQL editor or via CLI)

create extension if not exists "pgcrypto";

create type job_status as enum ('draft', 'published', 'closed');
create type application_stage as enum (
  'applied',
  'screening',
  'interview',
  'offer',
  'hired',
  'rejected'
);

create table if not exists jobs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  department text,
  location text,
  employment_type text default 'full_time',
  description text not null,
  status job_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists candidates (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  full_name text not null,
  phone text,
  linkedin_url text,
  created_at timestamptz not null default now(),
  unique (email)
);

create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references jobs (id) on delete cascade,
  candidate_id uuid not null references candidates (id) on delete cascade,
  stage application_stage not null default 'applied',
  resume_url text,
  cover_letter text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (job_id, candidate_id)
);

create table if not exists application_events (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references applications (id) on delete cascade,
  event_type text not null,
  from_stage application_stage,
  to_stage application_stage,
  note text,
  created_at timestamptz not null default now()
);

create index if not exists idx_jobs_status_published on jobs (status, published_at desc);
create index if not exists idx_applications_job_stage on applications (job_id, stage);
create index if not exists idx_applications_created on applications (created_at desc);

alter table jobs enable row level security;
alter table candidates enable row level security;
alter table applications enable row level security;
alter table application_events enable row level security;

-- Public read published jobs
create policy "Public read published jobs"
  on jobs for select
  using (status = 'published');

-- Service role bypasses RLS when using SUPABASE_SERVICE_ROLE_KEY on server

-- Storage bucket for resumes (create in dashboard: resumes, private)
-- Policies: service role upload; admin read via signed URLs
