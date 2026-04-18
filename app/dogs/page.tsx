import type { Metadata } from "next";
import Link from "next/link";
import { getShopListing } from "@/lib/data/dog-categories";
import { site } from "@/lib/site";
import { FigmaShopCard } from "@/components/home/figma-shop-card";

export const metadata: Metadata = {
  title: `Buy Puppies in ${site.city}`,
  description: `Browse ${site.name} puppy listings in ${site.city} with breed-wise pricing, availability, and verified records.`,
  alternates: {
    canonical: `${site.url}/dogs`,
  },
};

export default function DogsPage() {
  const items = getShopListing();

  return (
    <div className="bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-terracotta">
          PawLuxe
        </p>
        <h1 className="mt-2 text-center text-4xl font-extrabold text-charcoal">
          Puppies in Lucknow
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Compare available breeds, expected pricing, and open spots across
          Lucknow-friendly companion and pedigree lines.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <FigmaShopCard key={c.slug} category={c} />
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted">
          <Link href="/" className="font-semibold text-terracotta hover:underline">
            ← Back home
          </Link>
        </p>
      </div>
    </div>
  );
}
