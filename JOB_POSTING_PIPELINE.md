# Job Posting and Application Pipeline (Thejands)

This is the operational SOP for creating jobs, publishing roles, collecting applications, and moving candidates through the ATS pipeline.

---

## 1) Prerequisites (one-time setup)

1. **Run ATS migration in Supabase**
   - Execute: `supabase/migrations/001_ats_schema.sql`
   - Creates tables: `jobs`, `candidates`, `applications`, `application_events`
   - Creates enums:
     - `job_status`: `draft`, `published`, `closed`
     - `application_stage`: `applied`, `screening`, `interview`, `offer`, `hired`, `rejected`

2. **Create Storage bucket**
   - In Supabase Storage, create bucket: `resumes`
   - Set it to private (recommended)

3. **Set required env vars**
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_PASSWORD`
   - Optional (email notifications): `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_NOTIFY_EMAIL`

4. **Start app**
   - `npm run dev:clean`
   - Open `/admin`

---

## 2) Pipeline overview

1. Admin creates a role in `/admin/jobs`
2. Role stays hidden while `status = draft`
3. Admin publishes role (`status = published`)
4. Role appears on public `/careers` and `/careers/[slug]`
5. Candidate applies from role page (`/api/careers/apply`)
6. System stores:
   - candidate profile (`candidates`)
   - job application (`applications`)
   - audit event (`application_events`)
7. Admin reviews in `/admin/applications`
8. Admin moves stage: `applied -> screening -> interview -> offer -> hired/rejected`
9. Each move writes a new `application_events` row for history

---

## 3) Job creation and publishing flow

### Admin UI path

1. Go to `/admin/jobs`
2. Click **New job**
3. Fill fields:
   - `title` (required)
   - `slug` (optional; auto-generated from title if empty)
   - `department`
   - `location`
   - `status` (`draft`, `published`, `closed`)
   - `description` (required) - use markdown-style formatting:
     - `## Section heading`
     - `- Bullet item`
     - Blank line between paragraphs
4. Click **Save**

### Status behavior

- `draft`: not visible on public careers pages
- `published`: visible publicly; `published_at` is set automatically
- `closed`: hidden from careers listing

### Edit and close role

1. In `/admin/jobs`, click **Edit**
2. Update content or change status
3. Save changes

### Delete role

- Click **Delete** on `/admin/jobs`
- Job is deleted; linked applications cascade-delete at DB level (`on delete cascade`)

---

## 4) Public application flow

### Candidate journey

1. Candidate visits `/careers`
2. Candidate opens role page `/careers/<slug>`
3. Candidate submits form (name, email, optional phone/linkedin/cover, optional resume)

### API route

- Endpoint: `POST /api/careers/apply`
- Accepts `multipart/form-data`
- Required fields: `jobSlug`, `fullName`, `email`

### Validation rules

- Job must exist and be `published`
- Cover letter max: `8000` chars
- Resume max: `5MB`
- Allowed resume MIME:
  - `application/pdf`
  - `application/msword`
  - `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- Duplicate prevention: same candidate cannot apply to same role twice (`unique (job_id, candidate_id)`)

### What gets created

1. `candidates` upsert by email
2. Resume uploaded to `resumes/<job_id>/<candidate_id>-<timestamp>.<ext>`
3. `applications` row with stage `applied`
4. `application_events` row with `event_type = created`
5. Emails:
   - internal team notification
   - applicant confirmation

---

## 5) Application stage pipeline (admin)

### Admin view

- Open `/admin/applications`
- Kanban columns:
  - `applied`
  - `screening`
  - `interview`
  - `offer`
  - `hired`
  - `rejected`

### Move candidate stage

1. Click candidate card
2. Choose new stage from dropdown
3. Click **Update stage**

### System action on update

- Updates `applications.stage`
- Writes `application_events` row:
  - `event_type = stage_change`
  - `from_stage`
  - `to_stage`
  - optional note

---

## 6) API reference (internal)

### Jobs

- `GET /api/admin/jobs` - list all jobs (admin auth required)
- `POST /api/admin/jobs` - create job
- `PATCH /api/admin/jobs/:id` - update job
- `DELETE /api/admin/jobs/:id` - delete job

### Applications

- `GET /api/admin/applications` - list applications grouped by stage (admin auth required)
- `GET /api/admin/applications/:id` - full application detail with events
- `PATCH /api/admin/applications/:id` - update stage

### Public

- `POST /api/careers/apply` - submit candidate application

---

## 7) Recommended operating process

1. **Create as draft**
2. Internal review on staging
3. Set `published` only when approved
4. Review `applied` queue daily
5. Move every application to next stage within SLA
6. Keep notes in `application_events` when stage changes
7. Mark final outcomes as `hired` or `rejected`
8. Set job `closed` once hiring complete

---

## 8) Troubleshooting

- **Job not visible on `/careers`**
  - Check job status is `published`
  - Confirm Supabase env vars are set

- **Apply form fails**
  - Check `SUPABASE_SERVICE_ROLE_KEY`
  - Check `resumes` bucket exists
  - Verify file type/size limits

- **No emails sent**
  - Verify Resend env vars
  - Check sender domain verification

- **Admin shows unauthorized**
  - Re-login at `/admin`
  - Verify `ADMIN_PASSWORD`

---

## 9) File map (where logic lives)

- Admin jobs UI: `src/pages/admin/jobs/index.astro`
- Jobs APIs: `src/pages/api/admin/jobs/index.ts`, `src/pages/api/admin/jobs/[id].ts`
- Public careers pages: `src/pages/careers/index.astro`, `src/pages/careers/[slug].astro`
- Apply API: `src/pages/api/careers/apply.ts`
- Application service: `src/lib/careers/submit-application.ts`
- Admin applications UI: `src/pages/admin/applications/index.astro`
- Applications API: `src/pages/api/admin/applications/index.ts`, `src/pages/api/admin/applications/[id].ts`
- DB schema: `supabase/migrations/001_ats_schema.sql`
