import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Image
              src="/Bridge Tutoring Logo.svg"
              alt="Bridge Tutoring"
              width={156}
              height={52}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/become-tutor"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors px-3 py-2 rounded-lg hover:bg-neutral-100"
            >
              Become a tutor
            </Link>
            <Link
              href="/request-tutor"
              className="text-sm font-semibold bg-coral-400 text-white px-4 py-2 rounded-xl hover:bg-coral-500 transition-colors"
            >
              Find a tutor
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
