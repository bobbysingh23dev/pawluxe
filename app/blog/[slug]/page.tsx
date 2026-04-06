import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/data/posts";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.imageSrc, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-cream pb-16">
      <div className="relative aspect-[21/9] w-full max-h-[420px]">
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream to-transparent" />
      </div>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-block text-sm font-semibold text-terracotta hover:underline"
        >
          ← Journal
        </Link>
        <header className="mt-6">
          <time
            dateTime={post.publishedAt}
            className="text-sm font-semibold text-muted"
          >
            {post.publishedAt} · {post.readMinutes} min read
          </time>
          <h1 className="mt-3 text-4xl font-extrabold text-charcoal">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{post.description}</p>
        </header>
        <div className="mt-10 space-y-6">
          {post.body.map((para, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {para}
            </p>
          ))}
        </div>
        <p className="mt-12 border-t border-border-soft pt-8 text-sm text-muted">
          Questions?{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-terracotta hover:underline"
          >
            {site.email}
          </a>
        </p>
      </div>
    </article>
  );
}
