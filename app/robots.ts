import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/business";

// Allow all crawlers everywhere except API routes, and point them to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
