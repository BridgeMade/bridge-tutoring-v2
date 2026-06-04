import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const subjects = [
  "Mathematics", "Physical Sciences", "Life Sciences",
  "English", "Accounting", "Geography",
  "History", "Afrikaans", "Economics",
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    body: "Fill in a short form — grade, subjects, location, and goals. Takes about 3 minutes.",
  },
  {
    number: "02",
    title: "We find your match",
    body: "Our team reviews your request and hand-picks tutors who fit your child's needs and schedule.",
  },
  {
    number: "03",
    title: "Start learning",
    body: "We introduce you to your tutor. First session within days, not weeks.",
  },
];

const testimonials = [
  {
    quote:
      "My daughter went from failing Maths to getting 78% in her final exam. The tutor Bridge found was patient and really understood how she learns.",
    name: "Nomsa M.",
    location: "Pretoria East",
  },
  {
    quote:
      "I was sceptical about one-on-one tutoring but the results speak for themselves. My son's confidence has improved so much.",
    name: "Pieter V.",
    location: "Sandton",
  },
  {
    quote:
      "Fast response from Bridge — within a day we had a tutor lined up for Physical Science. Highly recommend.",
    name: "Thandi K.",
    location: "Midrand",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      {/* Hero */}
      <section className="bg-teal-700 text-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-teal-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Pretoria &amp; Johannesburg
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Your child deserves a tutor who actually gets them.
            </h1>
            <p className="mt-6 text-lg text-teal-100 leading-relaxed max-w-xl">
              Bridge hand-picks the right tutor for your child — no algorithms,
              no guessing. Just real people making real matches.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-xl bg-white text-teal-700 font-semibold px-8 py-4 text-base hover:bg-teal-50 transition-colors"
              >
                Find a tutor
              </Link>
              <Link
                href="/become-tutor"
                className="inline-flex items-center justify-center rounded-xl border border-teal-400 text-white font-semibold px-8 py-4 text-base hover:bg-teal-600 transition-colors"
              >
                Become a tutor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-teal-800 text-teal-100 py-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium">
            <li className="flex items-center gap-2">
              <span className="text-teal-300">✓</span> Human-matched, not algorithm-matched
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-300">✓</span> Pretoria &amp; Johannesburg
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-300">✓</span> Hear back within 24 hours
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-300">✓</span> In-person &amp; online
            </li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-neutral-900">
              How Bridge works
            </h2>
            <p className="mt-3 text-neutral-500 text-lg">
              Simple, fast, and personal.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-teal-50 p-8"
              >
                <span className="text-3xl font-bold text-teal-300">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-neutral-600 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/request-tutor"
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 text-white font-semibold px-8 py-4 text-base hover:bg-teal-700 transition-colors"
            >
              Request a tutor now
            </Link>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              Subjects we cover
            </h2>
            <p className="mt-3 text-neutral-500 text-lg">
              Grade R through matric — and beyond.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {subjects.map((s) => (
              <span
                key={s}
                className="rounded-full bg-white border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-700 shadow-sm"
              >
                {s}
              </span>
            ))}
            <span className="rounded-full bg-teal-600 text-white px-5 py-2 text-sm font-medium shadow-sm">
              + many more
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-neutral-900">
              What parents say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-neutral-50 p-8">
                <p className="text-neutral-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-neutral-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Tutors */}
      <section className="bg-purple-700 text-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Are you a tutor?</h2>
            <p className="mt-4 text-purple-100 text-lg leading-relaxed">
              Join Bridge and get matched with students who need exactly what
              you offer. We handle the finding — you handle the teaching.
            </p>
            <div className="mt-8">
              <Link
                href="/become-tutor"
                className="inline-flex items-center justify-center rounded-xl bg-white text-purple-700 font-semibold px-8 py-4 text-base hover:bg-purple-50 transition-colors"
              >
                Apply to become a tutor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
