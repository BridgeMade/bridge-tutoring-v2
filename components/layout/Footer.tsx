import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-100 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <span className="text-lg font-bold text-teal-700">Bridge</span>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
              Hand-picked tutors in Pretoria and Johannesburg. We do the
              matching — you focus on results.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-700 mb-3">
              Get started
            </p>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li>
                <Link
                  href="/request-tutor"
                  className="hover:text-teal-700 transition-colors"
                >
                  Find a tutor
                </Link>
              </li>
              <li>
                <Link
                  href="/become-tutor"
                  className="hover:text-teal-700 transition-colors"
                >
                  Become a tutor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-700 mb-3">
              Legal
            </p>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-teal-700 transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-400">
          © {new Date().getFullYear()} Bridge Tutoring. All rights reserved.
          Pretoria &amp; Johannesburg, South Africa.
        </div>
      </div>
    </footer>
  );
}
