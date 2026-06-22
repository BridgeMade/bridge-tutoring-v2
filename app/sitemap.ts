import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/business";

// Static sitemap of all public, indexable routes. Add new pages here
// (and any future /blog entries) so search engines discover them.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/request-tutor"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/become-tutor"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
