import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "@/content/blog";

// Card used on the blog index and the homepage blog strip.
export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      data-cta="blog_card"
      className="group flex flex-col rounded-2xl border border-neutral-100 bg-white overflow-hidden hover:border-coral-200 hover:shadow-sm transition-all"
    >
      <div className="relative aspect-[16/9] bg-coral-50">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.imageAlt ?? post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-coral-300 font-black text-5xl">
            B
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
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
        <h3 className="mt-3 text-lg font-bold text-neutral-900 leading-snug group-hover:text-coral-600 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-neutral-600 leading-relaxed">
          {post.excerpt}
        </p>
        <p className="mt-4 text-xs text-neutral-400">{formatDate(post.date)}</p>
      </div>
    </Link>
  );
}
