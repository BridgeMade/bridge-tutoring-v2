import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bridge Tutoring — Find a Tutor in Pretoria & Johannesburg",
  description:
    "Bridge matches your child with a hand-picked tutor in Pretoria and Johannesburg. Request a tutor today and hear back within 24 hours.",
  openGraph: {
    title: "Bridge Tutoring",
    description: "Hand-picked tutors in Pretoria & Johannesburg.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
