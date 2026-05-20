# Thejands company website

Marketing site and internal tooling for [Thejands](https://thejands.in) - product studio for web, mobile, and custom software.

**Production:** [https://thejands.in](https://thejands.in)  
**Repository:** [github.com/Thejands/company-website](https://github.com/Thejands/company-website)

---

## Stack

- [Astro 6](https://astro.build/) with hybrid static + server routes (Vercel adapter)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React](https://react.dev/) islands (Motion, shadcn-style UI where needed)
- [TypeScript](https://www.typescriptlang.org/)
- Contact: [Resend](https://resend.com) + [Google Sheets](https://sheets.google.com)
- Careers / ATS: [Supabase](https://supabase.com) (Postgres + Storage)
- Optional rate limiting: [Upstash Redis](https://upstash.com)

---

## Features

- Marketing pages: home, services, process, about, contact, legal
- SEO: meta tags, Open Graph, Twitter cards, JSON-LD, sitemap, RSS
- Google Tag Manager (production only)
- Contact form with reCAPTCHA v2, email notifications, sheet logging
- Password-protected admin: submission viewer, job CRUD, application pipeline
- Public careers board with apply flow and resume upload
- Social profiles and handles from environment variables
- Staging/preview: `noindex` and blocked indexing via `PUBLIC_SITE_ENV`

See [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) for production setup and [DESIGN.md](./DESIGN.md) for brand and UI guidelines.

---

## Requirements

- **Node.js** `>=22.12.0` (see `.nvmrc`)
- npm 10+

---

## Local development

```bash
git clone https://github.com/Thejands/company-website.git
cd company-website
nvm use 22          # or: fnm use 22
npm install
cp .env.example .env
# Edit .env with your keys (social URLs work without backend keys)
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

**Dev server shows `TypeError` / blank page?** A stale process or Vite cache on port 4321 is the usual cause:

```bash
# Stop other dev servers, then:
npm run dev:clean
# Or manually:
lsof -ti :4321 | xargs kill 2>/dev/null
rm -rf node_modules/.vite .astro
npm run dev
```

Only run one `npm run dev` at a time. Projects in iCloud Drive can hit flaky HMR; prefer a local non-synced folder if issues persist.

---

## Configuration

| Area                          | Where                                         |
| ----------------------------- | --------------------------------------------- |
| Site name, nav, contact email | `src/config/site.ts`                          |
| Environment, GTM, social URLs | `.env` / Vercel env (see `.env.example`)      |
| Indexing & analytics gating   | `PUBLIC_SITE_ENV` in `src/config/site-env.ts` |
| Astro build & sitemap         | `astro.config.mjs`                            |

Copy `.env.example` to `.env` locally. Set the same variables in the Vercel project for production and preview.

**Admin** (`/admin`): set `ADMIN_PASSWORD`.  
**Contact API**: Resend + Google Sheets (+ optional Upstash).  
**Careers**: Supabase - run `supabase/migrations/001_ats_schema.sql` (see [supabase/README.md](./supabase/README.md)).

---

## Project structure

```text
/
├── public/                 # Static assets (logo, favicon, OG image)
├── src/
│   ├── components/         # UI, layout, SEO, forms
│   ├── config/             # site.ts, site-env.ts
│   ├── content/blog/       # MDX blog (excluded from sitemap)
│   ├── layouts/            # BaseLayout, AdminLayout
│   ├── lib/                # contact, email, sheets, careers, auth, supabase
│   ├── pages/              # Routes + src/pages/api/*
│   └── styles/             # global.css (Tailwind v4)
├── supabase/migrations/    # ATS schema
├── .env.example
├── LAUNCH_CHECKLIST.md
└── DESIGN.md
```

---

## Commands

| Command             | Action                                               |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Development server                                   |
| `npm run build`     | Production build (also runs on `git push` via Husky) |
| `npm run preview`   | Preview production build                             |
| `npm run lint`      | ESLint with auto-fix                                 |
| `npm run format`    | Prettier                                             |
| `npm run fix`       | Format + lint                                        |
| `npm run check`     | Astro diagnostics                                    |
| `npm run typecheck` | TypeScript check                                     |
| `npm test`          | Vitest                                               |

Git hooks require Node 22+ (see `.husky/ensure-node.sh`).

---

## Deployment

Deploy to **Vercel** connected to this repository. Use `PUBLIC_SITE_ENV=production` on the production domain and `staging` (or rely on preview defaults) for preview URLs.

Complete env and DNS steps in [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md).

---

## Contributing

Internal contributors: see [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## License

Copyright (c) 2026 Thejands. See [LICENSE](./LICENSE).
