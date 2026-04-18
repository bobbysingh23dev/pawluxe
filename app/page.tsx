import type { Metadata } from "next";
import { FigmaAbout } from "@/components/home/figma-about";
import { FigmaCareTips } from "@/components/home/figma-care-tips";
import { FigmaHero } from "@/components/home/figma-hero";
import { FigmaPromo } from "@/components/home/figma-promo";
import { FigmaShopGrid } from "@/components/home/figma-shop-grid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Puppies in ${site.city} - Verified Breeder Listings`,
  description:
    "Explore available puppies in Lucknow with breed-wise pricing, health records, and local support from first inquiry to handoff.",
  alternates: {
    canonical: site.url,
  },
};

export default function HomePage() {
  return (
    <>
      <FigmaHero />
      <FigmaAbout />
      <FigmaCareTips />
      <FigmaShopGrid />
      <FigmaPromo />
    </>
  );
}
