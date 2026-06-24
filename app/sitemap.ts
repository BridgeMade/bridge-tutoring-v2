import type { MetadataRoute } from "next";
import { absoluteUrl, allSuburbs } from "@/lib/business";

// Static sitemap of all public, indexable routes. Add new pages here
// (and any future /blog entries) so search engines discover them.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const suburbPages: MetadataRoute.Sitemap = allSuburbs.map((s) => ({
    url: absoluteUrl(`/tutors/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/request-tutor"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/become-tutor"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...suburbPages,
    { url: absoluteUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
