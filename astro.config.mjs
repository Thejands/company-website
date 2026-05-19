import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://thejands.in",
  output: "static",
  adapter: vercel(),
  trailingSlash: "never",
  compressHTML: true,
  integrations: [icon(), sitemap({
      filter: (page) =>
        !page.includes("/blog") &&
        !page.includes("/widgets") &&
        !page.includes("/admin"),
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date(),
  }), react()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});