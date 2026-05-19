import type { APIRoute } from "astro";
import { siteConfig } from "@/config/site";
import { allowSearchIndexing } from "@/config/site-env";

export const GET: APIRoute = () => {
  const sitemap = new URL("sitemap-index.xml", siteConfig.url).href;

  const robotsTxt = allowSearchIndexing
    ? `
User-agent: *
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
