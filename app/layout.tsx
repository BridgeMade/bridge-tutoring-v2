import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import PostHogProvider from "@/components/analytics/PostHogProvider";
import { business } from "@/lib/business";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "Bridge Tutoring — Find a Tutor in Pretoria & Johannesburg",
    template: "%s — Bridge Tutoring",
  },
  description:
    "Bridge matches your child with a hand-picked tutor in Pretoria and Johannesburg. Request a tutor today and hear back within 24 hours.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bridge Tutoring",
    description: "Hand-picked tutors in Pretoria & Johannesburg.",
    type: "website",
    url: business.url,
    siteName: business.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge Tutoring",
    description: "Hand-picked tutors in Pretoria & Johannesburg.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Analytics />
        <OrganizationJsonLd />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
