import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  dogCategories,
  getCategoryBySlug,
  lineKindLabel,
} from "@/lib/data/dog-categories";
import {
  BreedInsightsCard,
  InquiryContactGrid,
} from "@/components/dogs/breed-detail-blocks";
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
    description: `${cat.breed} puppies in Lucknow — inquire for current availability, fees, and paperwork. Site photos are illustrative.`,
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

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/90 p-5 text-sm leading-relaxed text-muted">
          <p className="font-semibold text-charcoal">Availability & fees</p>
          <p className="mt-2">
            Not updated live on this site. WhatsApp, call, or email for current
            litter status, pickup around Lucknow, pricing, and paperwork.
          </p>
          <p className="mt-3">
            Need real inventory images/videos of this breed?{" "}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-terracotta hover:underline"
            >
              Message us on WhatsApp
            </a>{" "}
            and we will share current puppy media.
          </p>
        </div>

        <div className="mt-10">
          <BreedInsightsCard breed={cat.breed} snapshot={cat.breedSnapshot} />
        </div>

        <ul className="mt-10 list-inside list-disc space-y-2 text-sm text-muted">
          <li>Service area includes major Lucknow neighborhoods.</li>
          <li>Vaccination and deworming records available for verification.</li>
          <li>Guided handoff and first-week transition support.</li>
        </ul>

        <div className="mt-10">
          <InquiryContactGrid
            breed={cat.breed}
            slug={cat.slug}
            source="lucknow_breed_detail"
          />
        </div>

        <div className="mt-8">
          <Link
            href={`/dogs/${cat.slug}`}
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-terracotta px-6 py-3 text-sm font-bold text-terracotta transition hover:bg-terracotta hover:text-white sm:w-auto"
          >
            Full breed details
          </Link>
        </div>
      </div>
    </article>
  );
}
