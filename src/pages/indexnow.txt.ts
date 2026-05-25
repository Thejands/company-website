import type { APIRoute } from "astro";
import { indexNowKey } from "@/config/site-env";

export const GET: APIRoute = () => {
  if (!indexNowKey) {
    return new Response(null, { status: 404 });
  }

  return new Response(indexNowKey, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
