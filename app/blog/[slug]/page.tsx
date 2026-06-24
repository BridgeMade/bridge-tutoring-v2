import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";
import { allPosts, getPostBySlug, formatDate } from "@/content/blog";
import { absoluteUrl, business } from "@/lib/business";

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    ...(post.image ? { image: absoluteUrl(post.image) } : {}),
    author: { "@type": "Organization", name: post.author, url: business.url },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: { "@type": "ImageObject", url: absoluteUrl(business.logo) },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-coral-500">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-coral-500">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-8">
            <div className="flex flex-wrap gap-2">
              {post.categories.map((c) => (
                <span
                  key={c}
                  className="text-xs font-semibold text-coral-600 bg-coral-50 rounded-full px-3 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-black leading-[1.1] tracking-tight text-neutral-900">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-neutral-500">
              By {post.author} · {formatDate(post.date)}
            </p>
          </header>

          {/* Hero image */}
          {post.image && (
            <div className="relative mt-8 aspect-[16/9] rounded-2xl overflow-hidden bg-coral-50">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Body */}
          <div className="mt-10">
            <PostBody blocks={post.body} />
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-coral-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-neutral-900">
              Need help with your child&apos;s learning?
            </h2>
            <p className="mt-2 text-neutral-600 max-w-md mx-auto">
              Tell us what your child needs. We&apos;ll hand-pick a tutor and be
              in touch within 24 hours — the first assessment is free.
            </p>
            <Link
              href="/request-tutor"
              data-cta="blog_post_find_tutor"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-coral-400 text-white font-semibold px-8 py-4 text-base hover:bg-coral-500 transition-colors"
            >
              Find your tutor
            </Link>
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="bg-neutral-50 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-neutral-900">
                More from the blog
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
