import type { APIRoute } from "astro";
import { siteConfig } from "@/config/site";
import { allowSearchIndexing } from "@/config/site-env";

export const GET: APIRoute = () => {
  const sitemap = new URL("sitemap-index.xml", siteConfig.url).href;

  const robotsTxt = allowSearchIndexing
    ? `
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /api-docs
Disallow: /_astro/
Disallow: /_next/

# Microsoft / Bing crawlers
User-agent: Bingbot
Allow: /

User-agent: MSNBot
Allow: /

User-agent: BingPreview
Allow: /

User-agent: AdIdxBot
Allow: /

# AI search crawlers - allowed to index public content
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: ${sitemap}
`.trim()
    : `
User-agent: *
Disallow: /
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
