import Image from "next/image";
import Link from "next/link";
import { business, inPersonAreas } from "@/lib/business";

// Popular subjects surfaced in the footer — link into the prefilled request
// form so the anchor text ("Maths tutors") spreads relevant internal links.
const FOOTER_SUBJECTS = [
  "Mathematics",
  "Physical Sciences",
  "Life Sciences",
  "English",
  "Accounting",
  "Afrikaans",
];

// Suburbs grouped by metro for the "Tutors by area" columns.
const pretoriaSuburbs = inPersonAreas
  .filter((m) => m.name === "Pretoria")
  .flatMap((m) => m.suburbs);
const joburgSuburbs = inPersonAreas
  .filter((m) => m.name === "Johannesburg")
  .flatMap((m) => m.suburbs);

const linkClass = "hover:text-coral-400 transition-colors";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand + tagline */}
        <div className="max-w-sm">
          <Image
            src="/lockup-reversed.svg"
            alt="Bridge Tutoring Services"
            width={160}
            height={40}
            className="h-9 w-auto"
          />
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
            {business.tagline} Hand-picked tutors for in-person lessons in
            Pretoria and Johannesburg, and online across South Africa.
          </p>
        </div>

        {/* Link columns */}
        <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <p className="text-sm font-semibold text-neutral-200 mb-4">
              Get started
            </p>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="/request-tutor" className={linkClass}>
                  Find a tutor
                </Link>
              </li>
              <li>
                <Link href="/become-tutor" className={linkClass}>
                  Become a tutor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-200 mb-4">
              Popular subjects
            </p>
            <ul className="space-y-3 text-sm text-neutral-400">
              {FOOTER_SUBJECTS.map((s) => (
                <li key={s}>
                  <Link
                    href={`/request-tutor?subject=${encodeURIComponent(s)}`}
                    className={linkClass}
                  >
                    {s} tutors
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-200 mb-4">
              Tutors in Pretoria
            </p>
            <ul className="space-y-3 text-sm text-neutral-400">
              {pretoriaSuburbs.map((s) => (
                <li key={s.slug}>
                  <Link href={`/tutors/${s.slug}`} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-200 mb-4">
              Tutors in Johannesburg
            </p>
            <ul className="space-y-3 text-sm text-neutral-400">
              {joburgSuburbs.map((s) => (
                <li key={s.slug}>
                  <Link href={`/tutors/${s.slug}`} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-200 mb-4">Company</p>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="/about" className={linkClass}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={linkClass}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className={linkClass}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-neutral-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-neutral-500">
          <span>
            © {new Date().getFullYear()} {business.legalName}. All rights
            reserved.
          </span>
          <span>Pretoria &amp; Johannesburg, South Africa.</span>
        </div>
      </div>
    </footer>
  );
}
