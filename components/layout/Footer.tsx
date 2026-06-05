import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Image
              src="/Bridge Tutoring Logo.svg"
              alt="Bridge Tutoring"
              width={156}
              height={52}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-xs">
              Hand-picked tutors in Pretoria and Johannesburg. We do the
              matching — you focus on results.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-200 mb-4">
              Get started
            </p>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link
                  href="/request-tutor"
                  className="hover:text-coral-400 transition-colors"
                >
                  Find a tutor
                </Link>
              </li>
              <li>
                <Link
                  href="/become-tutor"
                  className="hover:text-coral-400 transition-colors"
                >
                  Become a tutor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-200 mb-4">
              Legal
            </p>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-coral-400 transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Bridge Tutoring. All rights reserved.</span>
          <span>Pretoria &amp; Johannesburg, South Africa.</span>
        </div>
      </div>
    </footer>
  );
}
