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
      {
        name: "Hatfield",
        slug: "hatfield",
        content: {
          intro:
            "Looking for a tutor in Hatfield? It's one of Pretoria's busiest academic hubs — built around the University of Pretoria's main campus, the Gautrain station, and a cluster of the city's best-known schools. Bridge matches your child with a vetted tutor for lessons at home in Hatfield, or online anywhere in South Africa. You tell us what your child needs, and we do the matching.",
          landmarks:
            "Hatfield sits at the heart of academic Pretoria — anchored by the University of Pretoria's Hatfield campus and the LC de Villiers sports grounds, well connected by the Hatfield Gautrain station and A Re Yeng routes, and close to Loftus Versfeld, the home of the Blue Bulls. Families here often want tutoring that keeps pace with the university-focused schools around them.",
          schools: [
            "Pretoria Boys High School",
            "Pretoria High School for Girls",
            "St Alban's College",
            "Hatfield Christian School",
          ],
          demandNote:
            "Around Hatfield we see the most demand across Grades 8–12 — core high-school preparation for university exemption — with steady support in Grades 4–7 too. Mathematics, Mathematical Literacy, Physical Sciences, Life Sciences, Accounting and English Home Language come up most often.",
          faqExtra: [
            {
              q: "Can a tutor help my child prepare for university exemption in Hatfield?",
              a: "Yes. Many families around Hatfield's schools are working towards a strong matric and university entry. We match your child with a tutor who knows the CAPS and IEB requirements and can focus on the subjects that carry the most weight for exemption.",
            },
          ],
        },
      },
      { name: "Queenswood", slug: "queenswood" },
      { name: "Garsfontein", slug: "garsfontein" },
      { name: "Waterkloof", slug: "waterkloof" },
      {
        name: "Montana",
        slug: "montana",
        content: {
          intro:
            "Looking for a tutor in Montana? This established Pretoria North suburb, along the Zambezi corridor, has a strong Afrikaans heritage and a fast-growing mix of families across Montana Park, Doornpoort and Annlin. Bridge matches your child with a vetted tutor for lessons at home in Montana, or online anywhere in South Africa, in Afrikaans or English.",
          landmarks:
            "Montana runs along Sefako Makgatho (Zambezi) Drive in Pretoria North, anchored by the Kolonnade shopping centres and Netcare Montana Hospital, with the Wonderboom Nature Reserve and Magaliesberg ridge to the south. It's a traditionally Afrikaans area now diversifying quickly, so families often need tutoring in either Afrikaans or English.",
          schools: [
            "Hoërskool Montana",
            "Laerskool Montana",
            "Curro Academy Pretoria",
            "Wonderboom Hoërskool",
            "Laerskool Stephanus Roos",
          ],
          demandNote:
            "Around Montana we see the most demand in Grades 10–12 — matric preparation and university exemption — with steady foundational support in Grades 4–7. Requests span both mediums: Mathematics (Wiskunde), Physical Sciences, Life Sciences, Accounting and Business Studies, plus Afrikaans and English language support.",
          faqExtra: [
            {
              q: "Can my child be tutored in Afrikaans in Montana?",
              a: "Yes. Montana has a strong base of Afrikaans-medium schools, so we regularly match tutors who teach in Afrikaans (Wiskunde, Fisiese Wetenskappe, Lewenswetenskappe and more) as well as in English. Tell us which your child needs and we match accordingly.",
            },
          ],
        },
      },
      { name: "Irene", slug: "irene" },
      {
        name: "Moreleta Park",
        slug: "moreleta-park",
        content: {
          intro:
            "Looking for a tutor in Moreleta Park? This is the heart of Pretoria East — a family-dense suburb of security estates and golf developments, surrounded by some of the city's best-known schools. Bridge matches your child with a vetted tutor for lessons at home in Moreleta Park, or online anywhere in South Africa, in Afrikaans or English to suit your family.",
          landmarks:
            "Moreleta Park sits in the middle of Pretoria East, anchored by the Moreletapark church, the Moreleta Kloof Nature Reserve and shopping hubs like Woodlands Boulevard and Parkview. It's ringed by high-performing schools, and the academic and sporting rivalries between them mean many local families invest early in one-on-one support.",
          schools: [
            "Woodhill College",
            "Hoërskool Garsfontein",
            "Hoërskool Waterkloof",
            "Eastside Primary School",
            "Laerskool Constantiapark",
          ],
          demandNote:
            "Around Moreleta Park we see the most demand in Grades 10–12 — matric preparation and university APS points — with strong demand in Grades 8–9 and steady foundational support in Grades 4–7. Requests span both mediums: Mathematics (Wiskunde), Physical Sciences, Life Sciences, Accounting, Economics, and Afrikaans and English language support.",
          faqExtra: [
            {
              q: "Do you have tutors for the Pretoria East schools near Moreleta Park?",
              a: "Yes. We regularly support families around schools like Woodhill College, Hoërskool Garsfontein and Hoërskool Waterkloof. We match your child with a tutor who knows the CAPS or IEB requirements and can work in Afrikaans or English, at home in Moreleta Park or online.",
            },
          ],
        },
      },
      { name: "Brooklyn", slug: "brooklyn" },
      {
        name: "Centurion",
        slug: "centurion",
        content: {
          intro:
            "Looking for a tutor in Centurion? From the estates around Midstream, Copperleaf and Thatchfield to the established suburbs of Eldoraigne and Lyttelton, Centurion is home to a busy mix of Afrikaans and English schools, both public and private. Bridge matches your child with a vetted tutor for lessons at home in Centurion, or online anywhere in South Africa — in the language and curriculum that suits them.",
          landmarks:
            "Centurion runs along the N1 and N14 between Pretoria and Johannesburg, built around Centurion Mall, SuperSport Park and the Gautrain station, with growing estate hubs like Midstream, Copperleaf and Heritage Hill. It's one of the few areas where strong Afrikaans-medium and English-medium schools sit side by side, so families often need a tutor who can work in the right language and curriculum.",
          schools: [
            "Sutherland High School",
            "Hoërskool Centurion",
            "Cornwall Hill College",
            "Curro Thatchfield",
            "Abbotts College Centurion",
          ],
          demandNote:
            "Around Centurion we see the most demand in Grades 10–12 — matric preparation and building APS points for university — with strong momentum in Grades 8–9 and steady support in Grades 4–7. Requests span both mediums: Mathematics (Wiskunde), Physical Sciences, Life Sciences, Accounting (Rekeningkunde) and Business Studies, plus Afrikaans and English language support.",
          faqExtra: [
            {
              q: "Can my child be tutored in Afrikaans in Centurion?",
              a: "Yes. Centurion has a high number of Afrikaans-medium schools, so we regularly match tutors who teach in Afrikaans (Wiskunde, Fisiese Wetenskappe, Lewenswetenskappe and more) as well as in English. Tell us which your child needs and we match accordingly.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Johannesburg",
    region: "Northern Suburbs",
    suburbs: [
      {
        name: "Sandton",
        slug: "sandton",
        content: {
          intro:
            "Looking for a tutor in Sandton? At the centre of Johannesburg's business district, Sandton and its suburbs — Bryanston, Morningside, Rivonia and Sandown — are home to many of the city's leading independent schools and busy professional families. Bridge matches your child with a vetted tutor for lessons at home in Sandton, or online anywhere in South Africa.",
          landmarks:
            "Sandton is anchored by Sandton City and Nelson Mandela Square, the Sandton Gautrain station, and the corporate corridors of Bryanston, Morningside and Rivonia. With demanding work schedules the norm, many families here prefer a tutor who travels to their home or works with their child online, around the school and work day.",
          schools: [
            "St Stithians College",
            "Crawford International Sandton",
            "Bryanston High School",
            "Redhill School",
            "St David's Marist Inanda",
          ],
          demandNote:
            "Around Sandton we see heavy demand in Grades 10–12 — matric, university exemption and applications abroad — with strong demand in Grades 8–9 and Grades 1–7. Requests include Mathematics, Physical Sciences, Life Sciences, Information Technology, Accounting, Economics, Business Studies, and language support in English, Afrikaans and isiZulu.",
          faqExtra: [
            {
              q: "Do you have tutors for the IEB and independent schools in Sandton?",
              a: "Yes. Sandton has a high concentration of independent schools running IEB and international curricula. We match your child with a tutor who understands the demands of their school and can work at home or online, around a busy family schedule.",
            },
          ],
        },
      },
      {
        name: "Midrand",
        slug: "midrand",
        content: {
          intro:
            "Looking for a tutor in Midrand? Sitting between Johannesburg and Pretoria around Waterfall City and the Gautrain, Midrand is a fast-growing area of security estates and a high concentration of independent schools. Bridge matches your child with a vetted tutor for lessons at home in Midrand, or online anywhere in South Africa.",
          landmarks:
            "Midrand is anchored by the Mall of Africa and Waterfall City, the Midrand Gautrain station off the K101, and the Kyalami circuit along the R55. With so many families living in gated estates like Waterfall, Blue Hills and Carlswald, home visits and online lessons are usually the easiest way to fit tutoring around busy commuting schedules.",
          schools: [
            "Curro Waterfall",
            "Nova Pioneer Midrand",
            "Reddford House Blue Hills",
            "Midrand High School",
            "Carlswald Preparatory School",
          ],
          demandNote:
            "Around Midrand we see heavy demand in Grades 1–7 — foundational support for the many young families in the estates — and in Grades 10–12 for matric and university exemption. Requests include Mathematics, Physical Sciences, Life Sciences, Information Technology and CAT, Accounting, Business Studies, Economics, and language support in English, Afrikaans and isiZulu.",
          faqExtra: [
            {
              q: "Do you tutor children at the private schools around Midrand?",
              a: "Yes. Midrand has a high concentration of independent schools — Curro, Nova Pioneer, Reddford House and more — across IEB, CAPS and Cambridge. We match your child with a tutor who fits their school's curriculum and the way they're taught, at home or online.",
            },
          ],
        },
      },
      {
        name: "Fourways",
        slug: "fourways",
        content: {
          intro:
            "Looking for a tutor in Fourways? This fast-growing Johannesburg North node is built around large gated estates — Steyn City, Dainfern, Helderfontein and Lonehill — and a wide mix of independent and public schools. Bridge matches your child with a vetted tutor for lessons at home in Fourways, or online anywhere in South Africa.",
          landmarks:
            "Fourways centres on Montecasino and Fourways Mall at the William Nicol and Witkoppen crossroads, surrounded by estate communities like Steyn City, Dainfern and Cedar Lakes. With busy arterials like William Nicol and Witkoppen often congested, many local families prefer a tutor who comes to their estate or works with their child online.",
          schools: [
            "Dainfern College",
            "Reddam House Helderfontein",
            "Fourways High School",
            "Steyn City School",
            "HeronBridge College",
          ],
          demandNote:
            "Around Fourways we see high demand in Grades 10–12 — matric preparation and university exemption — alongside heavy demand for foundational support in Grades 1–7. Requests include Mathematics, Physical Sciences, Life Sciences, Information Technology, Accounting, Business Studies, Economics, and language support in English, Afrikaans and isiZulu.",
          faqExtra: [
            {
              q: "Do you tutor in the estates around Fourways?",
              a: "Yes. We regularly support families in estates like Steyn City, Dainfern, Helderfontein and Lonehill. Tell us where you are and we match a tutor who can come to your home within the estate, or work with your child online.",
            },
          ],
        },
      },
      {
        name: "Randburg",
        slug: "randburg",
        content: {
          intro:
            "Looking for a tutor in Randburg? This large Johannesburg North area spreads across distinct neighbourhoods — Randpark Ridge, Ferndale, Fontainebleau, Fairland and Robin Hills — each with its own schools. Bridge matches your child with a vetted tutor for lessons at home in Randburg, or online anywhere in South Africa, in English or Afrikaans.",
          landmarks:
            "Randburg centres on Cresta Shopping Centre and the Malibongwe/Republic Road crossroads, with MultiChoice City in Bordeaux and the green expanse of Delta Park to the south. Because it's really a cluster of sub-suburbs rather than one centre, many families prefer a tutor who comes to them at home.",
          schools: [
            "Rand Park High School",
            "Hoërskool Randburg",
            "Curro Aurora High School",
            "Trinityhouse Randpark Ridge",
            "Ferndale High School",
          ],
          demandNote:
            "Around Randburg we see the most demand in Grades 10–12 — matric preparation and university APS points — with strong movement in Grades 8–9 and steady foundational support in Grades 4–7. Requests include Mathematics, Physical Sciences, Life Sciences, Accounting, Business Studies, Economics, and English and Afrikaans language support.",
          faqExtra: [
            {
              q: "Do you tutor across the different Randburg suburbs?",
              a: "Yes. Randburg covers a wide spread — from Randpark Ridge and Northriding to Ferndale, Fairland and Fontainebleau. Tell us where you are and we match a tutor who can come to your home, or work with your child online.",
            },
          ],
        },
      },
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
  {
    name: "isiZulu",
    slug: "isizulu",
    formValue: "isiZulu",
    blurb:
      "Home language or first additional, we match a tutor who makes isiZulu approachable — building your child's vocabulary, comprehension and the confidence to use it.",
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
