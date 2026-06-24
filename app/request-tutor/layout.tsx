import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Tutor in Pretoria & Johannesburg",
  description:
    "Tell us your child's grade, subjects and goals. Bridge hand-picks a tutor to match and you hear back within 24 hours. Takes about 3 minutes.",
  alternates: { canonical: "/request-tutor" },
  openGraph: {
    title: "Request a Tutor — Bridge Tutoring",
    description:
      "Tell us what you need and Bridge hand-picks a tutor to match. Hear back within 24 hours.",
    url: "/request-tutor",
    type: "website",
  },
};

export default function RequestTutorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
