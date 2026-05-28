/**
 * Ping Microsoft Bing IndexNow when pages are published or updated.
 *
 * Usage:
 *   node scripts/ping-indexnow.mjs                    # pings all sitemap URLs
 *   node scripts/ping-indexnow.mjs /blog/my-new-post  # pings a single URL
 *
 * Requires env vars:
 *   PUBLIC_INDEXNOW_KEY  - your IndexNow key (from Bing Webmaster Tools)
 *
 * Key file is served at:
 *   https://thejands.in/{PUBLIC_INDEXNOW_KEY}.txt  (static file in public/)
 */

import { readFileSync } from "fs";
import { resolve } from "path";

const HOST = "https://thejands.in";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

// Load env from .env or .env.local when running locally
for (const file of [".env", ".env.local"]) {
  try {
    const lines = readFileSync(resolve(process.cwd(), file), "utf8").split("\n");
    for (const line of lines) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) process.env[match[1].trim()] ??= match[2].trim();
    }
  } catch {
    // file doesn't exist - skip
  }
}

const key = process.env.PUBLIC_INDEXNOW_KEY;
if (!key) {
  console.error(
    "Error: PUBLIC_INDEXNOW_KEY is not set.\n" +
      "  Add PUBLIC_INDEXNOW_KEY=7cf4de5f053b45188788f1fc0ddff1b3 to .env",
  );
  process.exit(1);
}

// Static key file is served from public/{key}.txt (Option 1 - no server required)
const keyLocation = `${HOST}/${key}.txt`;

async function pingUrls(urls) {
  const payload = {
    host: HOST.replace(/^https?:\/\//, ""),
    key,
    keyLocation,
    urlList: urls,
  };

  console.log(`Pinging IndexNow with ${urls.length} URL(s)...`);

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (res.ok || res.status === 202) {
    console.log(`✓ IndexNow accepted (HTTP ${res.status})`);
  } else {
    const body = await res.text().catch(() => "");
    console.error(`✗ IndexNow rejected (HTTP ${res.status}): ${body}`);
    process.exit(1);
  }
}

// CLI: accept optional path argument(s), else fetch all URLs from sitemap
const args = process.argv.slice(2).filter((a) => a.startsWith("/"));

if (args.length > 0) {
  const urls = args.map((p) => `${HOST}${p}`);
  await pingUrls(urls);
} else {
  // Fetch sitemap and ping all URLs
  const sitemapUrl = `${HOST}/sitemap-0.xml`;
  console.log(`Fetching sitemap: ${sitemapUrl}`);
  const xml = await fetch(sitemapUrl).then((r) => r.text());
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].trim(),
  );

  if (urls.length === 0) {
    console.error("No URLs found in sitemap.");
    process.exit(1);
  }

  console.log(`Found ${urls.length} URL(s) in sitemap.`);
  await pingUrls(urls);
}
