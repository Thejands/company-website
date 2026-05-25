/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_ENV?: "production" | "staging";
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY?: string;
  // reCAPTCHA Enterprise server-side vars (non-PUBLIC — never sent to the browser)
  readonly RECAPTCHA_ENTERPRISE_API_KEY?: string; // Google Cloud API Key (starts with "AIza…")
  readonly RECAPTCHA_PROJECT_ID?: string; // GCP project ID (e.g. "thejands-website")
  readonly RESEND_API_KEY?: string;
  readonly RESEND_FROM_EMAIL?: string;
  readonly CONTACT_NOTIFY_EMAIL?: string;
  readonly GOOGLE_SERVICE_ACCOUNT_JSON?: string;
  readonly GOOGLE_SHEETS_SPREADSHEET_ID?: string;
  readonly GOOGLE_SHEETS_TAB_NAME?: string;
  readonly GOOGLE_SHEETS_ERRORS_TAB_NAME?: string;
  readonly UPSTASH_REDIS_REST_URL?: string;
  readonly UPSTASH_REDIS_REST_TOKEN?: string;
  readonly ADMIN_PASSWORD?: string;
  readonly PUBLIC_SUPABASE_URL?: string;
  readonly PUBLIC_SUPABASE_ANON_KEY?: string;
  readonly SUPABASE_SERVICE_ROLE_KEY?: string;
  readonly PUBLIC_INDEXNOW_KEY?: string;
  readonly PUBLIC_BING_VERIFY?: string;
  readonly PUBLIC_TWITTER_HANDLE?: string;
  readonly PUBLIC_SOCIAL_INSTAGRAM?: string;
  readonly PUBLIC_SOCIAL_FACEBOOK?: string;
  readonly PUBLIC_SOCIAL_LINKEDIN?: string;
  readonly PUBLIC_SOCIAL_DISCORD?: string;
  readonly PUBLIC_SOCIAL_X?: string;
  readonly PUBLIC_SOCIAL_GITHUB?: string;
  readonly VERCEL_ENV?: "production" | "preview" | "development";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
