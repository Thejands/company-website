/** Read trimmed public env vars (empty string = unset). */
export function publicEnv(name: string): string | undefined {
  const value = import.meta.env[name];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export type SiteEnvironment = "production" | "staging" | "development";

/**
 * Controls indexing, GTM, and robots.txt.
 * - Production (thejands.in): set `PUBLIC_SITE_ENV=production` or deploy with Vercel `VERCEL_ENV=production`
 * - Preview/staging: set `PUBLIC_SITE_ENV=staging` or use Vercel preview (auto-detected)
 */
export function getSiteEnvironment(): SiteEnvironment {
  const explicit = publicEnv("PUBLIC_SITE_ENV");
  if (explicit === "production" || explicit === "staging") return explicit;
  if (import.meta.env.DEV) return "development";
  if (import.meta.env.VERCEL_ENV === "preview") return "staging";
  if (import.meta.env.VERCEL_ENV === "development") return "development";
  if (import.meta.env.PROD) return "production";
  return "development";
}

export const siteEnvironment = getSiteEnvironment();
export const isProductionSite = siteEnvironment === "production";
export const allowSearchIndexing = isProductionSite;
export const gtmId = publicEnv("PUBLIC_GTM_ID");
export const isAnalyticsEnabled = isProductionSite && Boolean(gtmId);
export const indexNowKey = publicEnv("PUBLIC_INDEXNOW_KEY");
export const bingVerifyKey = publicEnv("PUBLIC_BING_VERIFY");

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export function getSocialLinks(): SocialLink[] {
  const entries: Array<{ id: string; label: string; envKey: string }> = [
    { id: "instagram", label: "Instagram", envKey: "PUBLIC_SOCIAL_INSTAGRAM" },
    { id: "facebook", label: "Facebook", envKey: "PUBLIC_SOCIAL_FACEBOOK" },
    { id: "linkedin", label: "LinkedIn", envKey: "PUBLIC_SOCIAL_LINKEDIN" },
    { id: "discord", label: "Discord", envKey: "PUBLIC_SOCIAL_DISCORD" },
    { id: "x", label: "X", envKey: "PUBLIC_SOCIAL_X" },
    { id: "github", label: "GitHub", envKey: "PUBLIC_SOCIAL_GITHUB" },
  ];

  return entries
    .map(({ id, label, envKey }) => {
      const href = publicEnv(envKey);
      return href ? { id, label, href } : null;
    })
    .filter((link): link is SocialLink => link !== null);
}

/** Twitter/X @handle for twitter:creator (without @). */
export function getTwitterHandle(): string | undefined {
  const handle = publicEnv("PUBLIC_TWITTER_HANDLE");
  if (handle) return handle.replace(/^@/, "");

  const xUrl = publicEnv("PUBLIC_SOCIAL_X");
  if (!xUrl) return undefined;

  try {
    const path = new URL(xUrl).pathname.replace(/\/$/, "");
    const segment = path.split("/").filter(Boolean).pop();
    return segment?.replace(/^@/, "") || undefined;
  } catch {
    return undefined;
  }
}
