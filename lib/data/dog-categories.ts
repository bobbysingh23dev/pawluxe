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
      "Guided handoff plan",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Golden retriever puppy",
    acceptingInquiries: false,
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
      "Private overview of options only after initial screening.",
    ],
    whatYouReceive: [
      "Airway and conformation notes",
      "Private photo/video when shortlisted",
      "Brachycephalic comfort guidance",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=85",
    imageAlt: "French bulldog puppy",
    acceptingInquiries: false,
    priceFrom: "₹1,20,000",
    listPriceLabel: "₹1,75,000",
    spotsLabel: { filled: 12, open: 6 },
  },
  {
    slug: "lhasa-apso-puppies-companion",
    breed: "Lhasa Apso",
    lifeStage: "puppy",
    lineKind: "companion",
    shortDescription:
      "Compact companion pups with playful temperament and apartment-friendly size.",
    detailParagraphs: [
      "Male and female puppies are available based on current breeder updates.",
      "Photos, videos, and paperwork details are shared directly on inquiry.",
    ],
    whatYouReceive: [
      "Health and vaccination summary",
      "Breed care and grooming starter notes",
      "Guided handoff and support details",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1765270428309-96ceb6c2bac4?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Fluffy tan puppy outdoors (Lhasa Apso listing)",
    acceptingInquiries: true,
    priceFrom: "",
  },
  {
    slug: "rottweiler-puppies-pedigree",
    breed: "Rottweiler",
    lifeStage: "puppy",
    lineKind: "pedigree",
    shortDescription:
      "Confident guardian-line puppies suited for families seeking strong loyalty.",
    detailParagraphs: [
      "Temperament fit and home setup are reviewed before final matching.",
      "Male and female availability changes weekly.",
    ],
    whatYouReceive: [
      "Basic health and deworming records",
      "Early handling notes",
      "Breed-fit guidance for your home",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1598819849325-f0152d605b08?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Black and tan Rottweiler puppy",
    acceptingInquiries: true,
    priceFrom: "",
  },
  {
    slug: "german-shepherd-puppies-pedigree",
    breed: "German Shepherd",
    lifeStage: "puppy",
    lineKind: "pedigree",
    shortDescription:
      "Alert, intelligent puppies from stable lines for active homes.",
    detailParagraphs: [
      "Available pups are shared privately with proper temperament guidance.",
      "Male and female puppies are available.",
    ],
    whatYouReceive: [
      "Vaccination and health summary",
      "Temperament orientation notes",
      "Post-handoff support plan",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1621951714491-3cde56a9cadf?auto=format&fit=crop&w=800&q=85",
    imageAlt: "German Shepherd puppy outdoors",
    acceptingInquiries: true,
    priceFrom: "",
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
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Yellow Labrador Retriever puppy sitting",
    acceptingInquiries: true,
    priceFrom: "₹38,000",
    listPriceLabel: "₹52,000",
    spotsLabel: { filled: 20, open: 3 },
  },
  {
    slug: "pomeranian-puppies-companion",
    breed: "Pomeranian",
    lifeStage: "puppy",
    lineKind: "companion",
    shortDescription:
      "Small fluffy companion puppies, ideal for indoor family homes.",
    detailParagraphs: [
      "Current litters include male and female puppies.",
      "Routine care and adaptation guidance is shared before handoff.",
    ],
    whatYouReceive: [
      "Vaccination and deworming notes",
      "Feeding and coat-care basics",
      "Private media pack on request",
    ],
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1719177518229-79d47d45d49a?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Small white fluffy dog on blue background (Pomeranian listing)",
    acceptingInquiries: true,
    priceFrom: "",
  },
  {
    slug: "doberman-puppies-pedigree",
    breed: "Doberman",
    lifeStage: "puppy",
    lineKind: "pedigree",
    shortDescription:
      "Athletic, intelligent puppies for experienced and active families.",
    detailParagraphs: [
      "Home suitability and early training readiness are reviewed first.",
      "Male and female puppies are available.",
    ],
    whatYouReceive: [
      "Health and basic records",
      "Early behavior notes",
      "Transition guidance",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1599586477491-f86db60c0c1c?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Black and tan Doberman Pinscher",
    acceptingInquiries: true,
    priceFrom: "",
  },
  {
    slug: "poodle-puppies-companion",
    breed: "Poodle",
    lifeStage: "puppy",
    lineKind: "companion",
    shortDescription:
      "Smart, trainable puppies with family-friendly companion temperament.",
    detailParagraphs: [
      "Detailed puppy profiles are shared directly after inquiry.",
      "Male and female puppies are available by current litter cycle.",
    ],
    whatYouReceive: [
      "Health/vaccination summary",
      "Coat-care starter guidance",
      "Feeding plan basics",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1608577474161-35429dc7c80d?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Brown Poodle on white bed",
    acceptingInquiries: true,
    priceFrom: "",
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
      "https://images.unsplash.com/photo-1535909339361-ef56e179d637?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Shallow focus portrait of fawn Pug",
    acceptingInquiries: true,
    priceFrom: "₹32,000",
    listPriceLabel: "₹45,000",
    spotsLabel: { filled: 10, open: 4 },
  },
  {
    slug: "saint-bernard-puppies-pedigree",
    breed: "Saint Bernard",
    lifeStage: "puppy",
    lineKind: "pedigree",
    shortDescription:
      "Large, gentle puppies with calm family temperament when matched correctly.",
    detailParagraphs: [
      "Space and climate suitability is discussed before booking.",
      "Male and female puppies are available.",
    ],
    whatYouReceive: [
      "Basic health records",
      "Large-breed care notes",
      "Guided handoff details",
    ],
    imageSrc:
      "https://media.istockphoto.com/id/1137535145/photo/st-bernards-puppy-on-the-grass-in-the-summer-park.jpg?s=170667a&w=0&k=20&c=dyzf91lkN2r57OcMfORpNC6PDE0rcndBTHZy3Uw98Nw=",
    imageAlt: "Saint Bernard puppy on grass in summer park",
    acceptingInquiries: true,
    priceFrom: "",
  },
  {
    slug: "chow-chow-puppies-pedigree",
    breed: "Chow Chow",
    lifeStage: "puppy",
    lineKind: "pedigree",
    shortDescription:
      "Distinctive fluffy puppies with independent temperament and premium care needs.",
    detailParagraphs: [
      "Best suited for families ready for grooming and early socialization.",
      "Male and female puppies are available.",
    ],
    whatYouReceive: [
      "Health and vaccination details",
      "Coat-maintenance notes",
      "Private profile media on inquiry",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Chow Chow standing on snow",
    acceptingInquiries: true,
    priceFrom: "",
  },
  {
    slug: "beagle-puppies-companion",
    breed: "Beagle",
    lifeStage: "puppy",
    lineKind: "companion",
    shortDescription:
      "Friendly, curious puppies that adapt well to active family life.",
    detailParagraphs: [
      "Puppy availability can vary each week by litter planning.",
      "Male and female puppies are available.",
    ],
    whatYouReceive: [
      "Health and vaccination summary",
      "Feeding and activity starter plan",
      "Support for first-week transition",
    ],
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1663127048434-84db6f90f08d?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Beagle portrait on wooden floor",
    acceptingInquiries: true,
    priceFrom: "",
  },
  {
    slug: "cane-corso-puppies-pedigree",
    breed: "Cane Corso",
    lifeStage: "puppy",
    lineKind: "pedigree",
    shortDescription:
      "Powerful guardian-line puppies for experienced handlers and structured homes.",
    detailParagraphs: [
      "Home readiness and handling experience are reviewed first.",
      "Male and female puppies are available.",
    ],
    whatYouReceive: [
      "Health records and guidance",
      "Early handling notes",
      "Breed-specific transition support",
    ],
    imageSrc:
      "https://media.istockphoto.com/id/1510704491/photo/puppies-cane-corso.jpg?s=170667a&w=0&k=20&c=Pn4laP1gTsvty1Lnc_Mvhx92dAhiz1MZhiQCVcdY_dk=",
    imageAlt: "Cane Corso puppies",
    acceptingInquiries: true,
    priceFrom: "",
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
    acceptingInquiries: false,
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
    acceptingInquiries: false,
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
    acceptingInquiries: false,
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
