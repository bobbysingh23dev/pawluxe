import type { Metadata } from "next";
import { FigmaAbout } from "@/components/home/figma-about";
import { FigmaCareTips } from "@/components/home/figma-care-tips";
import { FigmaDogMatchGame } from "@/components/home/figma-dog-match-game";
import { FigmaHero } from "@/components/home/figma-hero";
import { FigmaPromo } from "@/components/home/figma-promo";
import { FigmaReviews } from "@/components/home/figma-reviews";
import { FigmaShopGrid } from "@/components/home/figma-shop-grid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Puppies in ${site.city} - Verified Breeder Listings`,
  description:
    "Explore breeds and litters in Lucknow — availability and fees confirmed on inquiry; vet-backed paperwork and local support from first contact to handoff.",
  alternates: {
    canonical: site.url,
  },
};

export default function HomePage() {
  return (
    <>
      <FigmaHero />
      <FigmaAbout />
      <FigmaDogMatchGame />
      <FigmaReviews />
      <FigmaCareTips />
      <FigmaShopGrid />
      <FigmaPromo />
    </>
  );
}
