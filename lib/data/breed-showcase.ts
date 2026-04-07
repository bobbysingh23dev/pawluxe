import type { BreedShowcaseItem } from "@/lib/types";

/** Five circular crops for the hero “paw” collage (decorative). */
export const heroPawCollage = [
  {
    src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=85",
    alt: "Small dog portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=85",
    alt: "Puppy portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=85",
    alt: "Dog portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=400&q=85",
    alt: "Golden retriever portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=85",
    alt: "French bulldog portrait",
  },
] as const;

export const breedShowcase: BreedShowcaseItem[] = [
  {
    breed: "Golden Retriever",
    href: "/dogs/golden-retriever-puppies-pedigree",
    puppyImageSrc:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=85",
    puppyImageAlt: "Golden retriever puppy",
    adultImageSrc:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
    adultImageAlt: "Adult golden retriever",
    blobRadius: "58% 42% 63% 37% / 45% 55% 48% 52%",
  },
  {
    breed: "French Bulldog",
    href: "/dogs/french-bulldog-puppies-pedigree",
    puppyImageSrc:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85",
    puppyImageAlt: "French bulldog puppy",
    adultImageSrc:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=85",
    adultImageAlt: "Adult French bulldog",
    blobRadius: "42% 58% 55% 45% / 52% 48% 44% 56%",
  },
  {
    breed: "Labrador Retriever",
    href: "/dogs/labrador-puppies-companion",
    puppyImageSrc:
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=85",
    puppyImageAlt: "Labrador puppy",
    adultImageSrc:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85",
    adultImageAlt: "Adult Labrador",
    blobRadius: "55% 45% 40% 60% / 50% 50% 55% 45%",
  },
];
