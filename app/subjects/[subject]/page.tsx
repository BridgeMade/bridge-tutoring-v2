import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  allSubjects,
  getSubjectBySlug,
  allSuburbs,
  subjects as allSubjectsList,
  absoluteUrl,
  type Subject,
} from "@/lib/business";

export function generateStaticParams() {
  return allSubjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject } = await params;
  const subj = getSubjectBySlug(subject);
  if (!subj) return {};

  const title = `${subj.name} Tutors — In-Person & Online`;
  const description = `Find a hand-picked ${subj.name} tutor in Pretoria, Johannesburg or online across South Africa. ${subj.blurb}`.slice(
    0,
    160,
  );

  return {
    title,
    description,
    alternates: { canonical: `/subjects/${subj.slug}` },
    openGraph: {
      title: `${title} — Bridge Tutoring`,
      description,
      url: `/subjects/${subj.slug}`,
      type: "website",
    },
  };
}

function faqsFor(subj: Subject) {
  return [
    {
      q: `Do you offer ${subj.name} tutoring online?`,
      a: `Yes. We match your child with a ${subj.name} tutor for live one-on-one online lessons anywhere in South Africa, or in-person in Pretoria and Johannesburg.`,
    },
    {
      q: `What grades do your ${subj.name} tutors cover?`,
      a: `From Grade R through matric, and into university where it applies. Tell us your child's grade and we match a tutor suited to that level.`,
    },
    {
      q: `How do you choose the right ${subj.name} tutor?`,
      a: `Bridge isn't a directory you search. You tell us about your child, and our team hand-picks a vetted tutor who fits their level, goals and how they learn. You hear back within 24 hours.`,
    },
    {
      q: `What does it cost to start?`,
      a: `The first assessment is free, with no obligation. It helps us understand where your child is before we match a tutor.`,
    },
  ];
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const subj = getSubjectBySlug(subject);
  if (!subj) notFound();

  const faqs = faqsFor(subj);
  const otherSubjects = allSubjectsList.filter((s) => s.slug !== subj.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: `${subj.name} Tutors`,
        item: absoluteUrl(`/subjects/${subj.slug}`),
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

  const requestHref = `/request-tutor?subject=${encodeURIComponent(subj.formValue)}`;

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
            <li className="text-neutral-700 font-medium">{subj.name} tutors</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <span className="inline-flex items-center rounded-full bg-coral-50 text-coral-600 text-sm font-semibold px-4 py-1.5">
            {subj.name}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight text-neutral-900">
            {subj.name} tutors, hand-picked for your child.
          </h1>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-2xl">
            {subj.blurb} In-person in Pretoria and Johannesburg, or online
            anywhere in South Africa — you tell us what your child needs, and we
            do the matching. You hear back within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href={requestHref}
              data-cta="subject_find_tutor"
              className="inline-flex items-center justify-center rounded-xl bg-coral-400 text-white font-semibold px-8 py-4 text-base hover:bg-coral-500 transition-colors"
            >
              Find a {subj.name} tutor
            </Link>
            <Link
              href="#areas"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 text-neutral-700 font-semibold px-8 py-4 text-base hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              See areas we cover
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
                In-person {subj.name} lessons
              </h2>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Face-to-face at home across Pretoria and Johannesburg. We match
                your child with a {subj.name} tutor close to you who fits their
                schedule and the way they learn.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8">
              <h2 className="text-xl font-bold text-neutral-900">
                Online {subj.name} tutoring
              </h2>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Live one-on-one {subj.name} lessons anywhere in South Africa —
                the same hand-picked tutors and personal attention, from the
                comfort of home.
              </p>
            </div>
          </div>
        </section>

        {/* Areas we cover — cross-links to suburb pages */}
        <section id="areas" className="py-16 sm:py-20 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              {subj.name} tutors near you
            </h2>
            <p className="mt-3 text-neutral-500 text-lg">
              In-person across these areas — or online, anywhere in South Africa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {allSuburbs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/tutors/${s.slug}`}
                  className="rounded-full bg-neutral-50 border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-700 hover:border-coral-400 hover:text-coral-600 transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              {subj.name} tutoring — common questions
            </h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl bg-white border border-neutral-100 p-6"
                >
                  <dt className="font-semibold text-neutral-900">{f.q}</dt>
                  <dd className="mt-2 text-neutral-600 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Other subjects — internal links */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral-900">
              Other subjects we cover
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {otherSubjects.map((s) => (
                <Link
                  key={s.slug}
                  href={`/subjects/${s.slug}`}
                  className="rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-700 hover:border-coral-400 hover:text-coral-600 transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-900 text-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready to find your child&apos;s {subj.name} tutor?
            </h2>
            <p className="mt-4 text-neutral-300 text-lg max-w-xl mx-auto">
              Tell us what your child needs. We&apos;ll hand-pick a tutor and be
              in touch within 24 hours.
            </p>
            <div className="mt-8">
              <Link
                href={requestHref}
                data-cta="subject_cta_find_tutor"
                className="inline-flex items-center justify-center rounded-xl bg-coral-400 text-white font-semibold px-8 py-4 text-base hover:bg-coral-500 transition-colors"
              >
                Find a {subj.name} tutor
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
