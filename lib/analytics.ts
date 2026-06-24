// Tiny client-side helper to capture PostHog events from CTAs and forms.
// Safe to call before init (events queue) and never throws — analytics
// must never block the user experience.
import posthog from "posthog-js";

export function capture(
  event: string,
  properties?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
  try {
    posthog.capture(event, properties);
  } catch {
    // Swallow — never break UX on an analytics failure.
  }
}
