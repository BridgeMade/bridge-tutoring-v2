import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { allPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog — Tutoring Tips & Exam Advice for Parents",
  description:
    "Practical advice for South African parents: choosing a tutor, reading report cards, exam preparation, and helping your child learn. From the Bridge team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Bridge Tutoring Blog",
    description:
      "Practical tutoring, exam, and learning advice for South African parents.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-flex items-center rounded-full bg-coral-50 text-coral-600 text-sm font-semibold px-4 py-1.5">
            Bridge Blog
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight text-neutral-900">
            Ways to help your child learn.
          </h1>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Practical, calm advice for parents — choosing a tutor, making sense
            of report cards, preparing for exams, and supporting your child
            through the work.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
