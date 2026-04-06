/** Spotlight rows for the adoption-style list (programs, not public pet names). */
export type AdoptionSpotlightRow = {
  label: string;
  breed: string;
  age: string;
  gender: string;
  size: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
};

export const adoptionSpotlight: AdoptionSpotlightRow[] = [
  {
    label: "Companion slot",
    breed: "Golden Retriever",
    age: "8 weeks program",
    gender: "Varies by litter",
    size: "Large",
    slug: "golden-retriever-puppies-pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=85",
    imageAlt: "Golden retriever puppy",
  },
  {
    label: "Pedigree slot",
    breed: "French Bulldog",
    age: "Puppy program",
    gender: "Varies by litter",
    size: "Small",
    slug: "french-bulldog-puppies-pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=85",
    imageAlt: "French bulldog puppy",
  },
  {
    label: "Active home slot",
    breed: "Labrador Retriever",
    age: "Puppy program",
    gender: "Varies by litter",
    size: "Large",
    slug: "labrador-puppies-companion",
    imageSrc:
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=85",
    imageAlt: "Labrador puppy",
  },
  {
    label: "Adult placement",
    breed: "Golden Retriever",
    age: "Adult program",
    gender: "Varies by match",
    size: "Large",
    slug: "golden-retriever-adults-companion",
    imageSrc:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=85",
    imageAlt: "Adult golden retriever",
  },
];
