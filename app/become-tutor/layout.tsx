import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Tutor in Pretoria & Johannesburg",
  description:
    "Join Bridge as a tutor in Pretoria or Johannesburg. Apply in a few minutes, get matched with students that fit your subjects and schedule.",
  alternates: { canonical: "/become-tutor" },
  openGraph: {
    title: "Become a Tutor — Bridge Tutoring",
    description:
      "Join Bridge as a tutor. Get matched with students that fit your subjects and schedule.",
    url: "/become-tutor",
    type: "website",
  },
};

export default function BecomeTutorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
