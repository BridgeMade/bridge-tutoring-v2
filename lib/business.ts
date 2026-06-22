// Single source of truth for Bridge Tutoring business details.
// Fed into JSON-LD schema, sitemap, robots, and page metadata.
// Keep this accurate — search engines and structured data depend on it.

export const business = {
  name: "Bridge Tutoring",
  legalName: "Bridge Tutoring",
  description:
    "Bridge matches your child with a hand-picked tutor. Online tutoring across South Africa, plus in-person tutoring in Pretoria and Johannesburg.",
  url: "https://bridgetutoring.co.za",
  email: "support@bridgetutoring.co.za",
  country: "ZA",
  // Social / external profiles for sameAs (add as they go live).
  sameAs: [] as string[],
} as const;

// Two service modes drive both schema (areaServed) and local landing pages.
// Online = countrywide; in-person = specific metros and their suburbs.
export const onlineServiceArea = "South Africa";

// In-person service areas. Each suburb becomes a local SEO landing page
// (e.g. /tutors/hatfield) targeting "tutor in <suburb>" search intent.
// `slug` must stay URL-safe, lowercase, hyphenated.
export type Metro = {
  name: "Pretoria" | "Johannesburg";
  region: string; // grouping label, e.g. "Northern Suburbs"
  suburbs: { name: string; slug: string }[];
};

export const inPersonAreas: Metro[] = [
  {
    name: "Pretoria",
    region: "Pretoria",
    suburbs: [
      { name: "Hatfield", slug: "hatfield" },
      { name: "Queenswood", slug: "queenswood" },
      { name: "Garsfontein", slug: "garsfontein" },
      { name: "Waterkloof", slug: "waterkloof" },
    ],
  },
  {
    name: "Johannesburg",
    region: "Northern Suburbs",
    suburbs: [
      { name: "Sandton", slug: "sandton" },
      { name: "Midrand", slug: "midrand" },
      { name: "Fourways", slug: "fourways" },
      { name: "Randburg", slug: "randburg" },
      { name: "Edenvale", slug: "edenvale" },
      { name: "Kempton Park", slug: "kempton-park" },
    ],
  },
  {
    name: "Johannesburg",
    region: "Western Suburbs",
    suburbs: [
      { name: "Roodepoort", slug: "roodepoort" },
      { name: "Krugersdorp", slug: "krugersdorp" },
      { name: "Florida", slug: "florida" },
    ],
  },
];

// Flat list of metros for schema areaServed (online + the two cities).
export const areasServed = [
  onlineServiceArea,
  "Pretoria",
  "Johannesburg",
] as const;

// Absolute URL helper for canonical + OG + schema.
export function absoluteUrl(path = "/"): string {
  const base = business.url.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}
