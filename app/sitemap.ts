import type { MetadataRoute } from "next";
import { absoluteUrl, allSuburbs, allSubjects } from "@/lib/business";
import { allPosts } from "@/content/blog";

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

  const subjectPages: MetadataRoute.Sitemap = allSubjects.map((s) => ({
    url: absoluteUrl(`/subjects/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = allPosts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/request-tutor"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/become-tutor"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...blogPages,
    ...subjectPages,
    ...suburbPages,
    { url: absoluteUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
