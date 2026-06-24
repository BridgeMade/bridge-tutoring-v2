"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHReactProvider } from "posthog-js/react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

let initialized = false;

function ensureInit() {
  if (initialized) return;
  if (typeof window === "undefined") return;
  if (!POSTHOG_KEY) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[posthog] NEXT_PUBLIC_POSTHOG_KEY not set — analytics disabled.",
      );
    }
    return;
  }
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "always",
    // We capture pageviews manually below so client-side route changes count.
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    session_recording: {
      // Heatmaps + recordings for CRO. Mask passwords; child/parent contact
      // details are masked too for POPIA — never record raw PII inputs.
      maskAllInputs: true,
      maskInputOptions: { password: true },
    },
  });
  initialized = true;
}

// Init synchronously on the client so feature-flag hooks work on first render.
if (typeof window !== "undefined") ensureInit();

// Delegated click tracking: any element with a `data-cta` attribute fires a
// `cta_clicked` event with its label + destination. Add `data-cta="..."` to
// a button/link to track it — no per-component wiring needed.
function CtaClickTracker() {
  useEffect(() => {
    if (!initialized) return;
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const el = target?.closest("[data-cta]") as HTMLElement | null;
      if (!el) return;
      posthog.capture("cta_clicked", {
        label: el.dataset.cta || "unknown",
        href: el.getAttribute("href") || undefined,
        page: window.location.pathname,
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

function PostHogPageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!initialized || typeof window === "undefined") return;
    const query = searchParams?.toString();
    const url = window.location.origin + pathname + (query ? `?${query}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <PHReactProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageviewTracker />
      </Suspense>
      <CtaClickTracker />
      {children}
    </PHReactProvider>
  );
}
