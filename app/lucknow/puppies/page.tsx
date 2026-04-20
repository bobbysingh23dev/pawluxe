import type { Metadata } from "next";
import Link from "next/link";
import { FigmaShopCard } from "@/components/home/figma-shop-card";
import { getShopListing } from "@/lib/data/dog-categories";
import { site } from "@/lib/site";

const puppies = getShopListing().filter((c) => c.lifeStage === "puppy");

export const metadata: Metadata = {
  title: `Puppies in Lucknow — Ronit Pet Kennel`,
  description:
    "Browse breeds available by inquiry in Lucknow. Photos are illustrative; litter details, fees, and paperwork are confirmed on WhatsApp, call, or email.",
  alternates: {
    canonical: `${site.url}/lucknow/puppies`,
  },
};

export default function LucknowPuppiesPage() {
  return (
    <div className="bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-terracotta">
          Lucknow local listings
        </p>
        <h1 className="mt-2 text-center text-4xl font-extrabold text-charcoal">
          Buy Puppies in Lucknow
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-muted">
          Explore breeds we work with across Cantonment, Arjunganj, Gomti Nagar,
          Indira Nagar, Aliganj, and Hazratganj. Photos are illustrative;
          litter details, fees, and timing are confirmed when you inquire.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {puppies.map((c) => (
            <FigmaShopCard key={c.slug} category={c} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Local breed pages
          </p>
          <p className="mt-2 text-sm text-muted">
            {puppies.map((c, index) => (
              <span key={c.slug}>
                <Link
                  href={`/lucknow/puppies/${c.slug}`}
                  className="font-semibold text-terracotta hover:underline"
                >
                  {c.breed} in Lucknow
                </Link>
                {index < puppies.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border-soft bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-muted">
            Need help choosing the right breed for your home and routine?
          </p>
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-3 inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            Call for Lucknow guidance
          </a>
          <p className="mt-4 text-xs text-muted">
            Looking for full program details?{" "}
            <Link href="/dogs" className="font-semibold text-terracotta hover:underline">
              View all listings
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
