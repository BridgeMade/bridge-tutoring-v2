// Single source of truth for Bridge Tutoring business details.
// Fed into JSON-LD schema, sitemap, robots, and page metadata.
// Keep this accurate — search engines and structured data depend on it.

export const business = {
  name: "Bridge Tutoring",
  legalName: "Bridge Tutoring Services",
  tagline: "Where students become learners.",
  description:
    "Bridge matches your child with a hand-picked tutor and builds a learning programme around how they actually learn. Online tutoring across South Africa, plus in-person tutoring in Pretoria and Johannesburg.",
  url: "https://bridgetutoring.co.za",
  email: "support@bridgetutoring.co.za",
  country: "ZA",
  // Logo for Organization schema (absolute URL resolved at use site).
  logo: "/app-icon-primary.png",
  // Social / external profiles for sameAs (add as they go live).
  sameAs: [] as string[],
} as const;

// Two service modes drive both schema (areaServed) and local landing pages.
// Online = countrywide; in-person = specific metros and their suburbs.
export const onlineServiceArea = "South Africa";

// In-person service areas. Each suburb becomes a local SEO landing page
// (e.g. /tutors/hatfield) targeting "tutor in <suburb>" search intent.
// `slug` must stay URL-safe, lowercase, hyphenated.
// Optional per-suburb local content. When present, the suburb landing page
// renders unique, area-specific sections instead of the generic template —
// required for E-E-A-T and to avoid thin/doorway content across the set.
// Never fabricate: schools, landmarks and demand notes must be real facts
// supplied by the team. Suburbs without `content` fall back to generic copy.
export type SuburbContent = {
  intro: string; // 2–3 unique sentences; primary keyword in the first 100 words
  schools?: string[]; // real, named local schools — strongest local/E-E-A-T signal
  landmarks?: string; // real area context ("near Menlyn", "the Irene estates")
  demandNote?: string; // subjects/grades commonly requested locally, if known
  faqExtra?: { q: string; a: string }[]; // 1–2 suburb-specific FAQs
};

export type Metro = {
  name: "Pretoria" | "Johannesburg";
  region: string; // grouping label, e.g. "Northern Suburbs"
  suburbs: { name: string; slug: string; content?: SuburbContent }[];
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
      { name: "Montana", slug: "montana" },
      { name: "Irene", slug: "irene" },
      { name: "Moreleta Park", slug: "moreleta-park" },
      { name: "Brooklyn", slug: "brooklyn" },
      { name: "Centurion", slug: "centurion" },
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

// A suburb resolved with its metro + region context, for landing pages.
export type SuburbContext = {
  name: string;
  slug: string;
  metro: "Pretoria" | "Johannesburg";
  region: string;
  // Unique local content when the suburb has it; undefined = generic fallback.
  content?: SuburbContent;
  // Other suburbs in the same region — used for internal links.
  nearby: { name: string; slug: string }[];
};

// All suburbs flattened — drives generateStaticParams and the sitemap.
export const allSuburbs: { name: string; slug: string }[] = inPersonAreas.flatMap(
  (m) => m.suburbs.map((s) => ({ name: s.name, slug: s.slug })),
);

// Resolve a slug to its full context, or null if unknown.
export function getSuburbBySlug(slug: string): SuburbContext | null {
  for (const metro of inPersonAreas) {
    const match = metro.suburbs.find((s) => s.slug === slug);
    if (match) {
      return {
        name: match.name,
        slug: match.slug,
        metro: metro.name,
        region: metro.region,
        content: match.content,
        nearby: metro.suburbs
          .filter((s) => s.slug !== slug)
          .map((s) => ({ name: s.name, slug: s.slug })),
      };
    }
  }
  return null;
}

// Subject catalogue — drives /subjects/[subject] pages, the sitemap, and
// internal links. `formValue` must match a value in the request form's
// SUBJECT_OPTIONS so the prefill works. `blurb` is a short, in-voice line for
// the page intro + meta description.
export type Subject = {
  name: string;
  slug: string;
  formValue: string;
  blurb: string;
};

export const subjects: Subject[] = [
  {
    name: "Mathematics",
    slug: "mathematics",
    formValue: "Mathematics",
    blurb:
      "From the basics to matric and beyond. We match your child with a maths tutor who builds real understanding, not just memorised methods.",
  },
  {
    name: "Physical Sciences",
    slug: "physical-sciences",
    formValue: "Physical Sciences",
    blurb:
      "Physics and chemistry can feel abstract. The right tutor connects the theory to how your child thinks — so it finally clicks.",
  },
  {
    name: "Life Sciences",
    slug: "life-sciences",
    formValue: "Life Sciences",
    blurb:
      "Biology rewards understanding over cramming. We match a tutor who helps your child make sense of it and remember it.",
  },
  {
    name: "English",
    slug: "english",
    formValue: "English",
    blurb:
      "Reading, writing, comprehension and literature. A tutor who builds the language confidence your child carries across every subject.",
  },
  {
    name: "Afrikaans",
    slug: "afrikaans",
    formValue: "Afrikaans",
    blurb:
      "First or second language, we match a tutor who makes Afrikaans approachable — grammar, comprehension and the confidence to use it.",
  },
  {
    name: "Accounting",
    slug: "accounting",
    formValue: "Accounting",
    blurb:
      "Accounting builds on itself, so gaps compound. A tutor who fills the gaps and turns the principles into something your child can apply.",
  },
  {
    name: "Economics",
    slug: "economics",
    formValue: "Economics",
    blurb:
      "From micro to macro, a tutor who helps your child connect the concepts to the real world and write answers that earn the marks.",
  },
  {
    name: "Geography",
    slug: "geography",
    formValue: "Geography",
    blurb:
      "Mapwork, climate, and case studies. We match a tutor who makes the content stick and sharpens exam technique.",
  },
  {
    name: "Mathematical Literacy",
    slug: "mathematical-literacy",
    formValue: "Mathematical Literacy",
    blurb:
      "Maths grounded in everyday situations. A tutor who builds your child's confidence with the numbers that matter for matric.",
  },
  {
    name: "Business Studies",
    slug: "business-studies",
    formValue: "Business Studies",
    blurb:
      "Theory that's easy to lose marks on without good structure. A tutor who helps your child learn it well and write it clearly.",
  },
];

export const allSubjects = subjects;

export function getSubjectBySlug(slug: string): Subject | null {
  return subjects.find((s) => s.slug === slug) ?? null;
}

// Absolute URL helper for canonical + OG + schema.
export function absoluteUrl(path = "/"): string {
  const base = business.url.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}
