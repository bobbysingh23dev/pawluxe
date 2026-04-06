import { FigmaAbout } from "@/components/home/figma-about";
import { FigmaAdoptionList } from "@/components/home/figma-adoption-list";
import { FigmaCareTips } from "@/components/home/figma-care-tips";
import { FigmaHero } from "@/components/home/figma-hero";
import { FigmaPawDivider } from "@/components/home/figma-paw-divider";
import { FigmaPromo } from "@/components/home/figma-promo";
import { FigmaShopGrid } from "@/components/home/figma-shop-grid";

export default function HomePage() {
  return (
    <>
      <FigmaHero />
      <FigmaAbout />
      <FigmaCareTips />
      <FigmaPawDivider />
      <FigmaShopGrid />
      <FigmaAdoptionList />
      <FigmaPromo />
    </>
  );
}
