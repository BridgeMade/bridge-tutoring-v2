import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Free Assessment — Bridge Tutoring",
  description:
    "Already spoken with us? Confirm your child's details and pick a day and time for their free, no-obligation tutoring assessment.",
  alternates: { canonical: "/book-assessment" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Book Your Free Assessment — Bridge Tutoring",
    description:
      "Confirm your child's details and pick a day and time for their free assessment.",
    url: "/book-assessment",
    type: "website",
  },
};

export default function BookAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
