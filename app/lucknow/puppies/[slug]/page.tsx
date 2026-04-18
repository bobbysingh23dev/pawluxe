import type { Metadata } from "next";
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
  return dogCategories
    .filter((c) => c.lifeStage === "puppy")
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat || cat.lifeStage !== "puppy") return { title: "Lucknow puppies" };

  return {
    title: `${cat.breed} Puppies in Lucknow`,
    description: `Check ${cat.breed} puppy availability in Lucknow with pricing guidance and verified paperwork support.`,
    alternates: {
      canonical: `${site.url}/lucknow/puppies/${cat.slug}`,
    },
  };
}

export default async function LucknowBreedPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat || cat.lifeStage !== "puppy") notFound();

  return (
    <article className="bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border-soft bg-white p-8 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wide text-terracotta">
          {lineKindLabel(cat.lineKind)} · Lucknow
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-charcoal sm:text-4xl">
          {cat.breed} Puppies in Lucknow
        </h1>
        <p className="mt-4 leading-relaxed text-muted">{cat.shortDescription}</p>

        <div className="mt-6 rounded-xl bg-cream p-5">
          <p className="text-sm font-semibold text-charcoal">
            Starting from {cat.priceFrom}
          </p>
          <p className="mt-2 text-sm text-muted">
            Open spots: {cat.spotsLabel?.open ?? 0}. Call to confirm current
            litter status, pickup timeline, and paperwork checklist.
          </p>
        </div>

        <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-muted">
          <li>Service area includes major Lucknow neighborhoods.</li>
          <li>Vaccination and deworming records available for verification.</li>
          <li>Guided handoff and first-week transition support.</li>
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${site.phoneHref}`}
            className="btn-terracotta inline-flex flex-1 items-center justify-center rounded-full px-6 py-3 text-sm font-bold"
          >
            Call for {cat.breed} availability
          </a>
          <Link
            href={`/dogs/${cat.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-terracotta px-6 py-3 text-sm font-bold text-terracotta transition hover:bg-terracotta hover:text-white"
          >
            View full program details
          </Link>
        </div>
      </div>
    </article>
  );
}
