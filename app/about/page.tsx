import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Bridge Tutoring — How We Match Tutors",
  description:
    "Bridge is a human-matched tutoring service in Pretoria and Johannesburg. We hand-pick a tutor for your child, build a learning plan, and keep you informed — not a marketplace to search.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bridge Tutoring",
    description:
      "Where students become learners. How Bridge hand-picks tutors and builds learning around how your child actually learns.",
    url: "/about",
    type: "website",
  },
};

const pillars = [
  {
    title: "Structured programmes",
    body: "Not one-off sessions. Each student gets a plan with clear goals and milestones, so progress has direction.",
  },
  {
    title: "Habits & foundations",
    body: "We address how your child learns before we teach the content. Lasting growth starts with the right foundations.",
  },
  {
    title: "Vetted tutors",
    body: "Every tutor is selected for subject knowledge and the ability to connect with a student — not just qualifications on paper.",
  },
  {
    title: "Full visibility",
    body: "You stay informed at every step, with progress you can see — without having to micromanage.",
  },
];

const steps = [
  {
    number: "01",
    title: "You tell us about your child",
    body: "Grade, subjects, goals, and how they learn. It takes about three minutes, and the first assessment is free.",
  },
  {
    number: "02",
    title: "We hand-pick the match",
    body: "Our team finds a vetted tutor who fits your child's needs and schedule — in-person or online. You hear back within 24 hours.",
  },
  {
    number: "03",
    title: "Lessons and progress begin",
    body: "Your tutor builds a personalised plan and keeps you updated. Not the right fit? We'll rematch your child with another tutor.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-flex items-center rounded-full bg-coral-50 text-coral-600 text-sm font-semibold px-4 py-1.5">
            About Bridge
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight text-neutral-900">
            Where students become learners.
          </h1>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Other tutors teach the work. We teach your child how to learn it.
            Bridge is a personalised tutoring service in Pretoria and
            Johannesburg — and online across South Africa — built for parents
            who want more than a quick fix for their child&apos;s marks.
          </p>
        </section>

        {/* Purpose / mission */}
        <section className="bg-neutral-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-coral-500">
                Why we exist
              </p>
              <p className="mt-3 text-2xl font-bold text-neutral-900 leading-snug">
                To bridge the gap between where students are and where
                they&apos;re capable of going.
              </p>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                We close the distance between a student&apos;s current reality
                and their true potential — by building the academic foundations,
                habits, and confidence that make lasting growth possible.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-coral-500">
                How we operate
              </p>
              <p className="mt-3 text-2xl font-bold text-neutral-900 leading-snug">
                The right tutor, a structured plan, and clear progress — so you
                always know your child is in good hands.
              </p>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                We match students across South Africa with expert tutors, build
                personalised learning programmes, and keep parents informed at
                every step.
              </p>
            </div>
          </div>
        </section>

        {/* Not a marketplace */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              We do the matching — you don&apos;t have to search
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed max-w-2xl">
              Bridge isn&apos;t a directory of profiles to scroll through and
              hope for the best. You tell us about your child, and our team
              hand-picks a tutor who fits how they learn, the subjects they
              need, and your schedule. It&apos;s the difference between finding
              a tutor and finding the right one.
            </p>
          </div>
        </section>

        {/* Frustration → solution (parent's words) */}
        <section className="py-16 sm:py-20 bg-coral-50/60">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              We understand the frustration
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed max-w-2xl">
              It&apos;s hard to watch your child work hard and still fall short.
              As a parent, you want the best for them — but finding the right
              support can feel overwhelming. Most services promise results, yet
              lack the expertise, flexibility, or personal approach to actually
              meet your child&apos;s needs.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed max-w-2xl">
              Bridge is built differently. Our tutors work within a proven
              system designed to adapt to how each student learns. We keep you
              informed with monthly progress reports, and our booking system
              makes scheduling and rescheduling simple. With the Bridge app, the
              progress is always visible — so you never have to wonder how your
              child is doing.
            </p>
          </div>
        </section>

        {/* Four pillars */}
        <section className="bg-neutral-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              What makes Bridge different
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl bg-white border border-neutral-100 p-8"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              How it works
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.number}>
                  <span className="text-sm font-bold uppercase tracking-widest text-coral-500">
                    {s.number}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-neutral-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-900 text-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready to find your child&apos;s tutor?
            </h2>
            <p className="mt-4 text-neutral-300 text-lg max-w-xl mx-auto">
              Tell us what your child needs. We&apos;ll hand-pick a tutor and be
              in touch within 24 hours.
            </p>
            <div className="mt-8">
              <Link
                href="/request-tutor"
                data-cta="about_find_tutor"
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
