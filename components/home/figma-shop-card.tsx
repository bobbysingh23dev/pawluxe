import Image from "next/image";
import Link from "next/link";
import type { DogCategory } from "@/lib/types";

type Props = { category: DogCategory };

function badgeFor(category: DogCategory): string {
  return category.lineKind === "pedigree" ? "Pedigree" : "Companion";
}

export function FigmaShopCard({ category }: Props) {
  const filled = category.spotsLabel?.filled ?? 0;
  const open = category.spotsLabel?.open ?? 0;

  return (
    <article className="card-ds group relative flex flex-col p-5">
      <span className="absolute left-5 top-5 z-10 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
        {badgeFor(category)}
      </span>
      <Link href={`/dogs/${category.slug}`} className="flex flex-col">
        <div className="relative mt-2 aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src={category.imageSrc}
            alt={category.imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          />
        </div>
        <h3 className="mt-5 text-center text-h3 text-text-primary">
          {category.breed}
        </h3>
        <p className="mt-3 text-center text-[28px] font-bold text-primary">
          Paws {category.priceFrom}
        </p>
        {category.listPriceLabel ? (
          <p className="text-center text-small text-text-secondary line-through">
            {category.listPriceLabel}
          </p>
        ) : null}
      </Link>
      {category.spotsLabel ? (
        <div className="mt-4 flex justify-center gap-6 border-t border-border-soft pt-4 text-small text-text-secondary">
          <span>
            <span className="font-semibold text-text-primary">{filled}</span>{" "}
            Sold
          </span>
          <span>
            <span className="font-semibold text-primary">{open}</span>{" "}
            Remaining
          </span>
        </div>
      ) : null}
    </article>
  );
}
