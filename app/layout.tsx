import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import PostHogProvider from "@/components/analytics/PostHogProvider";
import { business } from "@/lib/business";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Brand typeface (Plus Jakarta Sans). Exposed as a CSS variable so the brand
// logo SVGs (which reference font-family "PJS") render in the correct font.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/app-icon-primary.svg", type: "image/svg+xml" },
    ],
    apple: "/app-icon-primary.png",
  },
  openGraph: {
    title: "Bridge Tutoring",
    description: "Hand-picked tutors in Pretoria & Johannesburg.",
    type: "website",
    url: business.url,
    siteName: business.name,
    images: [{ url: "/stacked-on-coral.png", alt: "Bridge Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge Tutoring",
    description: "Hand-picked tutors in Pretoria & Johannesburg.",
    images: ["/stacked-on-coral.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Analytics />
        <OrganizationJsonLd />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
