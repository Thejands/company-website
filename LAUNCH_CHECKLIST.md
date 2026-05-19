# Website Launch Checklist - Thejands (thejands.in)

Things to double-check before launching the website. Mark each item when verified.

**Quick setup:** copy `.env.example` to `.env` (local) and set the same variables in your Vercel production project.

---

## All images have Alt tags

An alt attribute describes image content for screen readers and search engines (recommended up to ~125 characters). Alt text also shows when images fail to load.

- [ ] Logo: `alt="Thejands logo"` on marketing pages (`Logo.astro`, `LogoMark.astro`)
- [ ] Decorative pricing card logo uses `alt=""` + `aria-hidden="true"` (intentional)
- [ ] Blog post images use post `title` as alt (`PostItem.astro`, `[...slug].astro`)
- [ ] Add descriptive alt text when you upload new marketing images (team photos, case studies, OG PNG)

Example:

```html
<img
  src="founder.jpg"
  alt="Linga presenting a product roadmap to the client team"
/>
```

---

## Website is allowed for indexing

Search engines must be allowed to crawl and index the **production** site.

- [ ] Production: `PUBLIC_SITE_ENV=production` (or unset on Vercel with `VERCEL_ENV=production`)
- [ ] No `noindex` on production: `Seo.astro` outputs `index, follow` when `allowSearchIndexing` is true
- [ ] `robots.txt` allows crawling on production (`src/pages/robots.txt.ts`)
- [ ] Staging/preview: `PUBLIC_SITE_ENV=staging` or Vercel preview auto-blocks indexing (`noindex` + `Disallow: /`)
- [ ] Remove any manual `<meta name="robots" content="noindex, nofollow">` from templates
- [ ] Submit `https://thejands.in/sitemap-index.xml` in Google Search Console / Bing Webmaster

Production `robots.txt` should look like:

```
User-agent: *
Allow: /

Sitemap: https://thejands.in/sitemap-index.xml
```

---

## Social media meta tags are present

When shared on Facebook, LinkedIn, or X, the link preview should show title, description, and image.

- [ ] Open Graph: `og:title`, `og:description`, `og:url`, `og:image`, `og:locale` (`src/components/seo/Seo.astro`)
- [ ] Twitter: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Optional: `twitter:site` / `twitter:creator` when `PUBLIC_TWITTER_HANDLE` or `PUBLIC_SOCIAL_X` is set
- [ ] Test previews:
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator) (or X equivalent)
- [ ] **OG image:** add `public/og-image.png` (1200x630) and set `ogImage` in `site.ts` when ready (SVG works on some platforms only)

---

## Favicon is present

- [ ] `public/favicon.svg` and `public/logo.svg` exist
- [ ] `<link rel="icon">` and `<link rel="shortcut icon">` in `Seo.astro`
- [ ] Optional: add `public/favicon.png` (32x32 / 48x48) for older browsers

---

## Progressive Web App meta tags are present

Users can add the site to their home screen on mobile.

- [ ] `public/site.webmanifest` linked from `Seo.astro`
- [ ] `apple-touch-icon` (currently `logo.svg`; replace with PNG when you add assets)
- [ ] `apple-mobile-web-app-title`, `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`
- [ ] Optional assets to add later:
  - `public/apple-touch-icon.png` (180x180)
  - `public/icons/icon-192.png`, `public/icons/icon-512.png` (update `site.webmanifest`)

---

## Analytics tracks only in production

Avoid polluting analytics with local or staging traffic.

- [ ] `PUBLIC_GTM_ID` set in **production** only
- [ ] GTM loads only when `PUBLIC_SITE_ENV=production` (`src/config/site-env.ts` + `GoogleTagManager.astro`)
- [ ] Staging/preview: no GTM snippet (set `PUBLIC_SITE_ENV=staging` on preview env)
- [ ] Configure GA4 (or other tags) **inside GTM**, not as duplicate hard-coded scripts
- [ ] Optional GTM trigger: `contact_form_submit` event from contact form

---

## Document has title and meta description

- [ ] Every page passes `title` and `description` to `BaseLayout` (or uses site defaults)
- [ ] Home title: `Thejands - Product development for web, mobile & software`
- [ ] Meta descriptions ~150-160 characters, unique per page where possible

---

## External links use rel="noopener"

- [ ] Social footer links: `target="_blank"` + `rel="noopener noreferrer"` (`SocialLinks.astro`)
- [ ] reCAPTCHA policy links: `noopener noreferrer` (`ContactForm.astro`)
- [ ] Audit any new `target="_blank"` links before launch

Reference: [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)

---

## Remove unused CSS

- [ ] Tailwind v4 scans `src/**/*` via Vite (tree-shakes unused utilities on build)
- [ ] After large UI changes, run `npm run build` and check CSS bundle size in `dist`
- [ ] If adding many one-off classes, consider [PurgeCSS](https://github.com/FullHuman/purgecss) (usually not needed with Tailwind v4)

---

## Efficient cache policy and compression on static assets

- [ ] `vercel.json` sets long cache headers for images, fonts, and `/_astro/*` hashed assets
- [ ] Vercel serves Brotli/gzip automatically
- [ ] CDN cache busting: hashed filenames in `/_astro/` update on each deploy

---

## Social profiles (env-driven)

Footer icons and JSON-LD `sameAs` appear only for URLs set in env.

- [ ] `PUBLIC_SOCIAL_INSTAGRAM`
- [ ] `PUBLIC_SOCIAL_FACEBOOK`
- [ ] `PUBLIC_SOCIAL_LINKEDIN`
- [ ] `PUBLIC_SOCIAL_DISCORD`
- [ ] `PUBLIC_SOCIAL_X`
- [ ] `PUBLIC_SOCIAL_GITHUB`
- [ ] `PUBLIC_TWITTER_HANDLE` (optional, for Twitter meta)

---

## Contact form (Resend + Google Sheets)

First-party pipeline at `POST /api/contact` (no Formspree).

### Resend setup

1. Create account at [resend.com](https://resend.com)
2. Add domain `thejands.in` and verify DNS (SPF + DKIM)
3. Set in Vercel production:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL=Thejands <hello@thejands.in>`
   - `CONTACT_NOTIFY_EMAIL=hello@thejands.in`
4. Emails only send when `PUBLIC_SITE_ENV=production`

### Google Sheets setup

1. Create a spreadsheet with tabs:
   - `contact_submissions` - headers: `id`, `submitted_at`, `name`, `email`, `message`, `page_url`, `environment`, `status`
   - `errors` - headers: `occurred_at`, `context`, `submission_id`, `error`, `environment`
2. [Google Cloud Console](https://console.cloud.google.com) - enable **Google Sheets API**
3. Create a **service account**, download JSON key
4. Share the spreadsheet with the service account email (Editor)
5. Set in Vercel:
   - `GOOGLE_SERVICE_ACCOUNT_JSON` - paste JSON or base64-encoded JSON
   - `GOOGLE_SHEETS_SPREADSHEET_ID` - from the sheet URL
   - `GOOGLE_SHEETS_TAB_NAME=contact_submissions`
   - `GOOGLE_SHEETS_ERRORS_TAB_NAME=errors`

### Optional rate limiting

- [Upstash Redis](https://upstash.com) - set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` (5 submissions/hour per IP)

### Admin contact inbox

- [ ] Set `ADMIN_PASSWORD` in Vercel
- [ ] Visit `/admin` - view submissions at `/admin/submissions`

---

## ATS / Careers (Supabase)

1. Create a [Supabase](https://supabase.com) project
2. Run SQL from `supabase/migrations/001_ats_schema.sql` in the SQL editor
3. Create Storage bucket `resumes` (private recommended; service role uploads)
4. Set env vars:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Publish jobs at `/admin/jobs` (status: published)
6. Public careers: `/careers` and `/careers/[slug]`
7. Pipeline: `/admin/applications`

---

## Thejands-specific deployment

- [ ] `site` in `astro.config.mjs` is `https://thejands.in`
- [ ] Custom domain + HTTPS on Vercel
- [ ] `PUBLIC_RECAPTCHA_SITE_KEY` + `RECAPTCHA_SECRET_KEY` on production (contact form)
- [ ] Resend + Google Sheets env vars configured (see above)
- [ ] Supabase env vars configured if using careers
- [ ] `ADMIN_PASSWORD` set for `/admin`
- [ ] `hello@thejands.in` MX records live
- [ ] Phone numbers in `site.ts` verified
- [ ] Legal pages reviewed: `/privacy`, `/terms`, `/cookies`
- [ ] `npm run build` passes on Node 22+

---

## Quick commands

```bash
cp .env.example .env   # local env template
npm run build
npm run preview        # http://localhost:4321

# Link check (after build)
npx linkinator dist/client --recurse --skip ".*\\.(png|jpg|webp|woff2?)$"
```

---

## Assets to add when ready

1. `public/og-image.png` - 1200x630 social preview
2. `public/apple-touch-icon.png` - 180x180
3. PWA icons in `public/icons/` and update `site.webmanifest`
4. Founder/team photos with alt text
