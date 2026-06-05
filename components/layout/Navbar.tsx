"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/Bridge Tutoring Logo.svg"
              alt="Bridge Tutoring"
              width={156}
              height={52}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-4">
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

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-coral-400"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-neutral-800 transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-neutral-800 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-neutral-800 transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="sm:hidden border-t border-neutral-100 bg-white px-4 py-4 flex flex-col gap-2">
          <Link
            href="/become-tutor"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-neutral-700 px-4 py-3 rounded-xl hover:bg-neutral-50 transition-colors"
          >
            Become a tutor
          </Link>
          <Link
            href="/request-tutor"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold bg-coral-400 text-white px-4 py-3 rounded-xl hover:bg-coral-500 transition-colors text-center"
          >
            Find a tutor
          </Link>
        </div>
      )}
    </header>
  );
}
