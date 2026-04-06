import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  dogCategories,
  getCategoryBySlug,
  lineKindLabel,
} from "@/lib/data/dog-categories";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return dogCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: "Program" };
  return {
    title: `${cat.breed} — ${cat.lifeStage}`,
    description: cat.shortDescription,
    openGraph: {
      title: `${cat.breed} — ${site.name}`,
      description: cat.shortDescription,
      images: [{ url: cat.imageSrc, alt: cat.imageAlt }],
    },
  };
}

export default async function DogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  return (
    <article className="bg-cream">
      <div className="relative h-[min(52vh,420px)] w-full">
        <Image
          src={cat.imageSrc}
          alt={cat.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-terracotta">
              {cat.lifeStage} · {lineKindLabel(cat.lineKind)}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-charcoal sm:text-5xl">
              {cat.breed}
            </h1>
            <p className="mt-3 text-lg text-muted">{cat.shortDescription}</p>
            <div className="mt-6 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-extrabold text-terracotta">
                Paws {cat.priceFrom}
              </span>
              {cat.listPriceLabel ? (
                <span className="text-muted line-through">
                  {cat.listPriceLabel} reference
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        {cat.detailParagraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-muted">
            {p}
          </p>
        ))}

        <div className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
          <h2 className="text-lg font-extrabold text-charcoal">
            What you receive
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            {cat.whatYouReceive.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(`Inquiry: ${cat.breed}`)}`}
            className="btn-terracotta inline-flex flex-1 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold"
          >
            Email concierge
          </a>
          <Link
            href="/dogs"
            className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-terracotta px-6 py-3 text-center text-sm font-bold text-terracotta transition hover:bg-terracotta hover:text-white"
          >
            All programs
          </Link>
        </div>
      </div>
    </article>
  );
}
