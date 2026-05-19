/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_ENV?: "production" | "staging";
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY?: string;
  readonly RECAPTCHA_SECRET_KEY?: string;
  readonly PUBLIC_CONTACT_FORM_URL?: string;
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
