import Link from "next/link";
import { getFeaturedForShop, getShopListing } from "@/lib/data/dog-categories";
import { FigmaShopCard } from "@/components/home/figma-shop-card";
import { PawWavyLine } from "@/components/home/paw-wavy-line";

export function FigmaShopGrid() {
  const items = getFeaturedForShop(8);
  const total = getShopListing().length;

  return (
    <section id="shop" className="bg-bg-section px-0 py-16 sm:py-20">
      <div className="container-home">
        <h2 className="text-center text-h2 text-text-primary">
          Available Puppies in Lucknow
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-text-secondary">
          Browse currently open litters by breed. Open any card for details, or
          contact us instantly using the action icons.
        </p>

        <PawWavyLine />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((c) => (
            <FigmaShopCard key={c.slug} category={c} />
          ))}
        </div>
        {total > items.length ? (
          <div className="mt-10 text-center">
            <Link
              href="/dogs"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              View more puppies
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
