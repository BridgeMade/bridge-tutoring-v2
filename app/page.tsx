import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { allPosts } from "@/content/blog";

const subjects = [
  "Mathematics", "Physical Sciences", "Life Sciences",
  "English", "Accounting", "Geography",
  "History", "Afrikaans", "Economics",
];

const stats = [
  { value: "90%", label: "of students improve in one semester" },
  { value: "+1200", label: "hours tutored and counting" },
  { value: "+25", label: "subjects taught and more" },
  { value: "500+", label: "parents choose Bridge" },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    body: "Fill in a short form — grade, subjects, location, and goals. Takes about 3 minutes.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" /></svg>
    ),
  },
  {
    number: "02",
    title: "We find your match",
    body: "Our team hand-picks tutors who fit your child's needs, schedule, and learning style.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
    ),
  },
  {
    number: "03",
    title: "Focused lessons begin",
    body: "Your tutor builds a personalised learning plan and sessions start within days, not weeks.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
    ),
  },
  {
    number: "04",
    title: "Track progress",
    body: "We check in regularly so you always know how your child is improving and what's next.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
    ),
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
      <section className="bg-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-8 py-16 sm:py-20 lg:py-24">
            {/* Text */}
            <div className="lg:flex-1 lg:max-w-[540px] pt-8 lg:pt-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral-50 text-coral-600 text-sm font-semibold px-4 py-1.5">
                Online tutoring &amp; in person (Johannesburg, Pretoria)
              </span>
              <h1 className="mt-5 text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight text-neutral-900">
                Tutor support that builds confidence and improves results.
              </h1>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                Bridge isn&apos;t a marketplace to search. Tell us what your
                child needs, and our team hand-picks a vetted tutor, in person
                or online. You&apos;ll hear back within 24 hours.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/request-tutor"
                  data-cta="hero_find_tutor"
                  className="inline-flex items-center justify-center rounded-xl bg-coral-400 text-white font-semibold px-8 py-4 text-base hover:bg-coral-500 transition-colors"
                >
                  Find your tutor
                </Link>
                <Link
                  href="#how-it-works"
                  data-cta="hero_how_it_works"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 text-neutral-700 font-semibold px-8 py-4 text-base hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  See how it works
                </Link>
              </div>
              <p className="mt-5 text-sm text-neutral-500">
                Trusted by <span className="font-semibold text-neutral-700">500+ families</span> · Free assessment · No obligation
              </p>
            </div>

            {/* Image with coral blob */}
            <div className="hidden lg:flex lg:flex-1 items-center justify-center relative min-h-[540px]">
              {/* Grid line pattern — behind everything */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e5e5" strokeWidth="0.8"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Coral blob — above grid, below image */}
              <svg viewBox="0 0 500 540" className="absolute w-[500px] h-[540px] text-coral-400 z-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M310,40 C365,15 445,55 468,130 C491,205 470,295 450,368 C430,441 400,500 330,520 C260,540 175,522 115,478 C55,434 20,365 12,290 C4,215 70,175 150,155 C210,140 255,65 310,40Z" />
              </svg>

              <Image
                src="/hero image 2.png"
                alt="Smiling student"
                width={460}
                height={520}
                className="relative z-20 object-contain w-auto max-h-[520px]"
                priority
              />
            </div>

            {/* Mobile image */}
            <div className="lg:hidden flex justify-center relative min-h-[280px] sm:min-h-[340px]">
              <svg viewBox="0 0 500 500" className="absolute w-[320px] h-[320px] text-coral-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M390,220 C415,275 420,345 385,395 C350,445 280,465 215,460 C150,455 85,428 52,378 C19,328 18,255 38,192 C58,129 100,76 158,50 C216,24 290,24 348,58 C406,92 365,165 390,220Z" />
              </svg>
              <Image
                src="/hero image 2.png"
                alt="Smiling student"
                width={280}
                height={280}
                className="relative z-10 object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-14 bg-coral-50/60 border-y border-coral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 divide-x-0 sm:divide-x divide-coral-100">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center px-4">
                <dt className="text-4xl font-black text-coral-500">{stat.value}</dt>
                <dd className="mt-2 text-sm text-neutral-600 leading-snug max-w-[130px] mx-auto">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How you learn — online + in-person (differentiator + local SEO) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-neutral-900">
              In-person or online — your choice
            </h2>
            <p className="mt-3 text-neutral-500 text-lg">
              Lessons that fit your family, wherever you are in South Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-8 hover:border-coral-200 transition-colors">
              <h3 className="text-xl font-bold text-neutral-900">
                In-person tutoring
              </h3>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Face-to-face lessons at home across Pretoria and Johannesburg —
                from Hatfield and Waterkloof to Sandton, Fourways and Roodepoort.
                We match your child with a tutor close to you.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-8 hover:border-coral-200 transition-colors">
              <h3 className="text-xl font-bold text-neutral-900">
                Online tutoring
              </h3>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Live one-on-one lessons anywhere in South Africa. Same hand-picked
                tutors, same personal attention — from the comfort of home, on
                your schedule.
              </p>
            </div>
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
              Grade R through matric — and beyond. Pick a subject to get started.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {subjects.map((s) => (
              <Link
                key={s}
                href={`/request-tutor?subject=${encodeURIComponent(s)}`}
                data-cta="subject_pill"
                className="rounded-full bg-white border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-700 hover:border-coral-400 hover:text-coral-600 transition-colors"
              >
                {s}
              </Link>
            ))}
            <Link
              href="/request-tutor"
              data-cta="subject_more"
              className="rounded-full bg-coral-400 text-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-coral-500 transition-colors"
            >
              + many more
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 sm:py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-neutral-900">
              How Bridge works
            </h2>
            <p className="mt-3 text-neutral-500 text-lg">
              Simple, fast, and personal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-neutral-200 z-0" />

            {steps.map((step) => (
              <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-coral-200 flex items-center justify-center text-coral-400 shadow-sm">
                  {step.icon}
                </div>
                {/* Step number */}
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-coral-400">
                  {step.number}
                </span>
                <h3 className="mt-2 text-base font-semibold text-neutral-900 leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed max-w-[200px]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/request-tutor"
              data-cta="midpage_find_tutor"
              className="inline-flex items-center justify-center rounded-xl bg-coral-400 text-white font-semibold px-8 py-4 text-base hover:bg-coral-500 transition-colors"
            >
              Find your tutor
            </Link>
            <p className="mt-5 text-sm text-neutral-500 max-w-md mx-auto">
              Not the right fit? We&apos;ll rematch your child with another tutor.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-neutral-900">
              What parents say
            </h2>
            <p className="mt-3 text-neutral-500 text-lg">
              Trusted by 500+ families across Pretoria and Johannesburg.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl bg-white border border-neutral-100 shadow-sm p-8"
              >
                <div className="flex gap-0.5 text-coral-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 0 0 .95.69h4.4c.96 0 1.36 1.23.58 1.8l-3.56 2.58a1 1 0 0 0-.36 1.12l1.36 4.18c.3.92-.75 1.69-1.54 1.12l-3.56-2.58a1 1 0 0 0-1.18 0l-3.56 2.58c-.79.57-1.84-.2-1.54-1.12l1.36-4.18a1 1 0 0 0-.36-1.12L1.09 9.6c-.78-.57-.38-1.8.58-1.8h4.4a1 1 0 0 0 .95-.69L8.38 2.93Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-neutral-700 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-100 text-coral-600 font-semibold text-sm">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-neutral-900">
                      {t.name}
                    </span>
                    <span className="block text-xs text-neutral-400">{t.location}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blog strip */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-coral-500">
                From the blog
              </p>
              <h2 className="mt-2 text-3xl font-bold text-neutral-900">
                Ways to help your child learn
              </h2>
            </div>
            <Link
              href="/blog"
              data-cta="home_view_blog"
              className="text-sm font-semibold text-coral-600 hover:text-coral-700 transition-colors"
            >
              View all posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Tutors */}
      <section className="bg-neutral-900 text-white overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[480px]">
          {/* Image — full bleed left half */}
          <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
            <Image
              src="/Tutor hero Image 1.png"
              alt="A Bridge tutor working with a student"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Text — right half with padding */}
          <div className="w-full lg:w-1/2 flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <div className="max-w-lg">
              <h2 className="text-4xl sm:text-5xl font-black leading-tight text-white">
                Become a tutor
              </h2>
              <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
                Share your knowledge and get matched with students who need exactly what you offer. We handle the finding — you handle the teaching.
              </p>
              <ul className="mt-6 space-y-3 text-neutral-300 font-medium">
                <li className="flex items-center gap-3">
                  <span className="text-coral-400">•</span> Set your own schedule and rates
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-coral-400">•</span> We bring the students to you
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-coral-400">•</span> Teach in-person or online — your choice
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/become-tutor"
                  data-cta="home_become_tutor"
                  className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-coral-400 text-white font-semibold px-8 py-4 text-base hover:bg-coral-500 transition-colors"
                >
                  Apply to become a tutor →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
