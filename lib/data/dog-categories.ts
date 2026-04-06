import type { DogCategory } from "@/lib/types";

const LINE_LABEL: Record<DogCategory["lineKind"], string> = {
  pedigree: "Pedigree line",
  companion: "Companion home line",
};

export function lineKindLabel(kind: DogCategory["lineKind"]): string {
  return LINE_LABEL[kind];
}

export const dogCategories: DogCategory[] = [
  {
    slug: "golden-retriever-puppies-pedigree",
    breed: "Golden Retriever",
    lifeStage: "puppy",
    lineKind: "pedigree",
    shortDescription:
      "Stable temperament and clear lineage. Young dogs matched privately after qualification.",
    detailParagraphs: [
      "We never publish individual names or open albums on the web. After a short call, we share vetted media and paperwork only with families we are actively placing with.",
      "Structured socialization, veterinary partnership, and vaccination records you can verify with your own clinic.",
    ],
    whatYouReceive: [
      "Private media pack (by invitation)",
      "Health summary for your veterinarian",
      "Concierge handoff plan",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Golden retriever puppy",
    acceptingInquiries: true,
    priceFrom: "₹55,000",
    listPriceLabel: "₹72,000",
    spotsLabel: { filled: 16, open: 4 },
  },
  {
    slug: "french-bulldog-puppies-pedigree",
    breed: "French Bulldog",
    lifeStage: "puppy",
    lineKind: "pedigree",
    shortDescription:
      "Airway-aware vet review. Availability is tight—we qualify buyers before any album is shared.",
    detailParagraphs: [
      "Honest conversations about climate, exercise limits, and veterinary access.",
      "Private overview of options only after concierge screening.",
    ],
    whatYouReceive: [
      "Airway and conformation notes",
      "Private photo/video when shortlisted",
      "Brachycephalic comfort guidance",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=85",
    imageAlt: "French bulldog puppy",
    acceptingInquiries: true,
    priceFrom: "₹1,20,000",
    listPriceLabel: "₹1,75,000",
    spotsLabel: { filled: 12, open: 6 },
  },
  {
    slug: "labrador-puppies-companion",
    breed: "Labrador Retriever",
    lifeStage: "puppy",
    lineKind: "companion",
    shortDescription:
      "Friendly active lines for busy homes. Category detail first—names only when fit is mutual.",
    detailParagraphs: [
      "Household noise, polite greetings, and crate rest from day one.",
      "Secure summary pack with temperament tags when you are approved.",
    ],
    whatYouReceive: [
      "Temperament mapping notes",
      "Feeding and exercise starter plan",
      "Invitation-only media when approved",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Labrador puppy",
    acceptingInquiries: true,
    priceFrom: "₹38,000",
    listPriceLabel: "₹52,000",
    spotsLabel: { filled: 20, open: 3 },
  },
  {
    slug: "pug-puppies-companion",
    breed: "Pug",
    lifeStage: "puppy",
    lineKind: "companion",
    shortDescription:
      "Compact, affectionate companions suited for apartment and family homes.",
    detailParagraphs: [
      "We prioritize breathing comfort, clean vaccination records, and temperament fit before placement.",
      "Profiles and media are shared privately once your inquiry is qualified.",
    ],
    whatYouReceive: [
      "Health and deworming summary",
      "Feeding and care starter sheet",
      "Private puppy media after approval",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Pug puppy",
    acceptingInquiries: true,
    priceFrom: "₹32,000",
    listPriceLabel: "₹45,000",
    spotsLabel: { filled: 10, open: 4 },
  },
  {
    slug: "bernedoodle-puppies-pedigree",
    breed: "Bernedoodle",
    lifeStage: "puppy",
    lineKind: "pedigree",
    shortDescription:
      "Low-shedding blends with size clarity and parent documentation.",
    detailParagraphs: [
      "Category-based research—no public puppy auction feel.",
      "Pricing confirmed in writing after consultation.",
    ],
    whatYouReceive: [
      "Parent size and coat expectation sheet",
      "Grooming introduction",
      "Private litter overview when you qualify",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Fluffy doodle-type puppy",
    acceptingInquiries: true,
    priceFrom: "₹95,000",
    listPriceLabel: "₹1,35,000",
    spotsLabel: { filled: 9, open: 5 },
  },
  {
    slug: "golden-retriever-adults-companion",
    breed: "Golden Retriever",
    lifeStage: "adult",
    lineKind: "companion",
    shortDescription:
      "Calmer energy, known behavior. Profiles released selectively—never as an open directory.",
    detailParagraphs: [
      "Fit first: kids, other pets, travel. We share the dog’s story only when the match is serious.",
    ],
    whatYouReceive: [
      "Behavioral notes from handlers",
      "Veterinary transfer records",
      "Introduction plan for your home",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Adult golden retriever",
    acceptingInquiries: true,
    priceFrom: "₹45,000",
    listPriceLabel: "₹60,000",
    spotsLabel: { filled: 6, open: 2 },
  },
  {
    slug: "german-shepherd-adults-pedigree",
    breed: "German Shepherd",
    lifeStage: "adult",
    lineKind: "pedigree",
    shortDescription:
      "Stable adults for experienced handlers. Identity disclosed only under serious placement.",
    detailParagraphs: [
      "We work with trainers and experienced guardians who understand drive management.",
    ],
    whatYouReceive: [
      "Evaluation summary",
      "Handler transition sessions as applicable",
      "Private dossier after mutual interest",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e87?auto=format&fit=crop&w=800&q=85",
    imageAlt: "German shepherd adult",
    acceptingInquiries: true,
    priceFrom: "₹65,000",
    listPriceLabel: "₹88,000",
    spotsLabel: { filled: 4, open: 3 },
  },
];

export function getCategoryBySlug(slug: string): DogCategory | undefined {
  return dogCategories.find((c) => c.slug === slug);
}

export function getFeaturedForShop(limit = 4): DogCategory[] {
  return dogCategories.filter((c) => c.acceptingInquiries).slice(0, limit);
}

export function getShopListing(): DogCategory[] {
  return dogCategories.filter((c) => c.acceptingInquiries);
}

export function categoriesByLifeStage(stage: DogCategory["lifeStage"]) {
  return dogCategories.filter((c) => c.lifeStage === stage);
}
