import { getShopListing } from "@/lib/data/dog-categories";
import { FigmaShopCard } from "@/components/home/figma-shop-card";

export function FigmaShopGrid() {
  const items = getShopListing();

  return (
    <section id="shop" className="bg-bg-section px-0 py-16 sm:py-20">
      <div className="container-home">
        <h2 className="text-center text-h2 text-text-primary">Shop Puppies</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-text-secondary">
          Browse available breeds. Each listing includes pricing and availability
          at a glance.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((c) => (
            <FigmaShopCard key={c.slug} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
