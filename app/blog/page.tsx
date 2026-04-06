import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostsSorted } from "@/lib/data/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description: `Articles and guides from ${site.name}.`,
};

export default function BlogPage() {
  const posts = getPostsSorted();

  return (
    <div className="bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-4xl font-extrabold text-charcoal">
          Journal
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Practical notes for families navigating placement with care.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width:640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <time
                    dateTime={post.publishedAt}
                    className="text-xs font-semibold uppercase tracking-wide text-terracotta"
                  >
                    {post.publishedAt}
                  </time>
                  <h2 className="mt-2 text-xl font-extrabold text-charcoal group-hover:text-terracotta">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">
                    {post.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
