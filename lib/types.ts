export type BreedSnapshot = {
  /** One plain-language line: typical temperament / lifestyle fit (not a guarantee for every dog). */
  temperament: string;
  /** Very general care pointers—buyers should confirm specifics with the breeder and their vet. */
  healthTips: string[];
};

export type DogCategory = {
  slug: string;
  breed: string;
  lifeStage: "puppy" | "adult";
  lineKind: "pedigree" | "companion";
  breedSnapshot: BreedSnapshot;
  shortDescription: string;
  detailParagraphs: string[];
  whatYouReceive: string[];
  imageSrc: string;
  imageAlt: string;
  acceptingInquiries: boolean;
  priceFrom: string;
  /** Optional “was” price for promotional display (category-level, not a specific animal). */
  listPriceLabel?: string;
  /** Illustrative capacity for the program card (not live inventory). */
  spotsLabel?: { filled: number; open: number };
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readMinutes: number;
  keywords: string[];
  imageSrc: string;
  imageAlt: string;
  body: string[];
};

export type BreedShowcaseItem = {
  breed: string;
  href: string;
  puppyImageSrc: string;
  puppyImageAlt: string;
  adultImageSrc: string;
  adultImageAlt: string;
  blobRadius: string;
};
