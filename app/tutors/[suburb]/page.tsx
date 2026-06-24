import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  allSuburbs,
  getSuburbBySlug,
  absoluteUrl,
  type SuburbContext,
} from "@/lib/business";

// Subjects surfaced on local pages (link through to the prefilled request form).
const SUBJECTS = [
  "Mathematics",
  "Physical Sciences",
  "Life Sciences",
  "English",
  "Afrikaans",
  "Accounting",
  "Economics",
  "Geography",
];

export function generateStaticParams() {
  return allSuburbs.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb } = await params;
  const ctx = getSuburbBySlug(suburb);
  if (!ctx) return {};

  const title = `Tutors in ${ctx.name} — In-Person & Online`;
  const description = `Find a hand-picked tutor in ${ctx.name}, ${ctx.metro}. Bridge matches your child with a vetted tutor for in-person or online lessons. Free assessment, reply within 24 hours.`;

  return {
    title,
    description,
    alternates: { canonical: `/tutors/${ctx.slug}` },
    openGraph: {
      title: `${title} — Bridge Tutoring`,
      description,
      url: `/tutors/${ctx.slug}`,
      type: "website",
    },
  };
}

// FAQ content, kept here so it feeds both the visible section and the schema.
function faqsFor(ctx: SuburbContext) {
  return [
    {
      q: `Do you offer in-person tutoring in ${ctx.name}?`,
      a: `Yes. We match your child with a vetted tutor for face-to-face lessons at home in ${ctx.name} and the surrounding ${ctx.metro} area. If online suits your family better, that's available too.`,
    },
    {
      q: `Which subjects can my child get help with in ${ctx.name}?`,
      a: `From Grade R through matric and into university — maths, the sciences, languages, accounting and more. Tell us the subject and we find a tutor who covers it.`,
    },
    {
      q: `How does matching work?`,
      a: `Bridge isn't a directory you search. You tell us about your child, and our team hand-picks a tutor who fits their needs, schedule and how they learn. You hear back within 24 hours.`,
    },
    {
      q: `What does it cost to get started?`,
      a: `The first assessment is free, with no obligation. It helps us understand where your child is before we match a tutor.`,
    },
  ];
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb } = await params;
  const ctx = getSuburbBySlug(suburb);
  if (!ctx) notFound();

  const faqs = faqsFor(ctx);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: `Tutors in ${ctx.name}`,
        item: absoluteUrl(`/tutors/${ctx.slug}`),
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main className="flex-1">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 text-sm text-neutral-500"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-coral-500">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-neutral-700 font-medium">Tutors in {ctx.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <span className="inline-flex items-center rounded-full bg-coral-50 text-coral-600 text-sm font-semibold px-4 py-1.5">
            {ctx.name} · {ctx.metro}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight text-neutral-900">
            Tutors in {ctx.name}, hand-picked for your child.
          </h1>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Looking for a tutor in {ctx.name}? Bridge matches your child with a
            vetted tutor for lessons at home across {ctx.metro} — or online,
            anywhere in South Africa. You tell us what your child needs, and we
            do the matching. You hear back within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/request-tutor"
              data-cta="suburb_find_tutor"
              className="inline-flex items-center justify-center rounded-xl bg-coral-400 text-white font-semibold px-8 py-4 text-base hover:bg-coral-500 transition-colors"
            >
              Find your tutor
            </Link>
            <Link
              href="#subjects"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 text-neutral-700 font-semibold px-8 py-4 text-base hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              Browse subjects
            </Link>
          </div>
          <p className="mt-5 text-sm text-neutral-500">
            Trusted by 500+ families · Free assessment · No obligation
          </p>
        </section>

        {/* In-person + online */}
        <section className="bg-neutral-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8">
              <h2 className="text-xl font-bold text-neutral-900">
                In-person in {ctx.name}
              </h2>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Face-to-face lessons at home in {ctx.name} and nearby {ctx.metro}{" "}
                suburbs. We match your child with a tutor close to you who fits
                their schedule and the way they learn.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8">
              <h2 className="text-xl font-bold text-neutral-900">
                Online, anywhere
              </h2>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Prefer lessons from home? Live one-on-one online tutoring is
                available across South Africa — the same hand-picked tutors and
                personal attention, on your schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Subjects */}
        <section id="subjects" className="py-16 sm:py-20 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              Subjects we cover in {ctx.name}
            </h2>
            <p className="mt-3 text-neutral-500 text-lg">
              From Grade R through matric. Pick a subject to get started.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {SUBJECTS.map((s) => (
                <Link
                  key={s}
                  href={`/request-tutor?subject=${encodeURIComponent(s)}`}
                  data-cta="suburb_subject"
                  className="rounded-full bg-neutral-50 border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-700 hover:border-coral-400 hover:text-coral-600 transition-colors"
                >
                  {s}
                </Link>
              ))}
              <Link
                href="/request-tutor"
                className="rounded-full bg-coral-400 text-white px-5 py-2 text-sm font-medium hover:bg-coral-500 transition-colors"
              >
                + many more
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              Tutoring in {ctx.name} — common questions
            </h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl bg-white border border-neutral-100 p-6">
                  <dt className="font-semibold text-neutral-900">{f.q}</dt>
                  <dd className="mt-2 text-neutral-600 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Nearby areas — internal links */}
        {ctx.nearby.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-neutral-900">
                Tutors in nearby areas
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {ctx.nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/tutors/${n.slug}`}
                    className="rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-700 hover:border-coral-400 hover:text-coral-600 transition-colors"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-neutral-900 text-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready to find your child&apos;s tutor in {ctx.name}?
            </h2>
            <p className="mt-4 text-neutral-300 text-lg max-w-xl mx-auto">
              Tell us what your child needs. We&apos;ll hand-pick a tutor and be
              in touch within 24 hours.
            </p>
            <div className="mt-8">
              <Link
                href="/request-tutor"
                data-cta="suburb_cta_find_tutor"
                className="inline-flex items-center justify-center rounded-xl bg-coral-400 text-white font-semibold px-8 py-4 text-base hover:bg-coral-500 transition-colors"
              >
                Find your tutor
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
