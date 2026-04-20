import type { BreedSnapshot, DogCategory } from "@/lib/types";

/** Short breed context from widely published breed profiles (AKC, breed clubs, veterinary summaries)—not medical advice. */
const BREED_SNAPSHOTS: Record<string, BreedSnapshot> = {
  "golden-retriever-puppies-pedigree": {
    temperament:
      "Usually friendly and trainable—high-energy as youngsters and happiest with daily exercise and games.",
    healthTips: [
      "Keep lean: extra weight hurts joints over time.",
      "Ask the breeder about hip/elbow history; your vet can explain what screening means for you.",
      "Regular brushing and ear checks reduce coat and skin issues.",
    ],
  },
  "french-bulldog-puppies-pedigree": {
    temperament:
      "Sweet, people-focused companions—often relaxed indoors and not built for intense heat or endurance sports.",
    healthTips: [
      "Brachycephalic (flat-face) dogs overheat faster—walk in cool hours and avoid strenuous exercise in heat.",
      "Snoring/labored breathing warrants a vet visit; never leave in a parked car.",
      "Skin folds need gentle cleaning to prevent irritation.",
    ],
  },
  "lhasa-apso-puppies-companion": {
    temperament:
      "Small but confident—alert barkers who can be independent; reward-based training builds cooperation.",
    healthTips: [
      "Daily brushing if coat is kept long; mats hurt skin.",
      "Eye and tear-stain care as your vet recommends.",
      "Early, positive socialization prevents excessive suspicion of strangers.",
    ],
  },
  "rottweiler-puppies-pedigree": {
    temperament:
      "Calm, loyal guardians when raised with structure—they’re powerful and territorial, not “mean by default,” but serious dogs that need boundaries.",
    healthTips: [
      "Early socialization with people and calm dogs reduces fear-based reactivity.",
      "Consistent training beats harsh corrections; boredom can amplify unwanted behaviors.",
      "Discuss hip/elbow and cardiac screening history with the breeder.",
    ],
  },
  "german-shepherd-puppies-pedigree": {
    temperament:
      "Bright, driven workers—love having a job (training, tracking, sport) and bond tightly with their people.",
    healthTips: [
      "Puppies need joint-friendly exercise (avoid forced jumping or marathon hikes while growing).",
      "Large-breed puppy diet and lean weight support developing hips and elbows.",
      "Talk to your vet about hip/elbow screening timelines for this breed.",
    ],
  },
  "labrador-puppies-companion": {
    temperament:
      "Outgoing and food-motivated—typically great family dogs; adolescents can be mouthy and bouncy until manners click.",
    healthTips: [
      "Labs often love food: measure meals and count treats—obesity is common.",
      "Short, age-appropriate walks beat over-exercising a growing puppy’s joints.",
      "Swimming and fetch are classics once your vet clears activity levels.",
    ],
  },
  "pomeranian-puppies-companion": {
    temperament:
      "Bold little dogs with big personalities—can be vocal; respond well to gentle, consistent training.",
    healthTips: [
      "Tiny bodies need supervised play—avoid rough handling and high jumps.",
      "Frequent brushing reduces matting; dental care matters in small jaws.",
      "Watch for overheating under thick coat in warm weather.",
    ],
  },
  "doberman-puppies-pedigree": {
    temperament:
      "Athletic and devoted—protective streak is normal; thrives with calm leadership and daily mental + physical work.",
    healthTips: [
      "Structure and socialization from day one prevent anxious guarding.",
      "Discuss cardiac and bleeding disorders in lines with the breeder and your vet.",
      "Warmth in winter; muscles need outlets or dogs may spin up indoors.",
    ],
  },
  "poodle-puppies-companion": {
    temperament:
      "Highly intelligent and active—often labeled “hypoallergenic,” but allergies vary; coat grows continuously.",
    healthTips: [
      "Professional grooming/clipping on a schedule prevents painful matting.",
      "Brain games (puzzle toys, obedience) prevent destructive boredom.",
      "Dry ears after baths/swims to reduce infections.",
    ],
  },
  "pug-puppies-companion": {
    temperament:
      "Notorious couch potatoes—playful but low endurance; companion-first dogs that want to be with you.",
    healthTips: [
      "Flat faces mean heat and humidity are risky—walk mornings/evenings in hot Lucknow summers.",
      "Keep weight down; extra pounds worsen breathing.",
      "Eye ulcers and skin-fold infections are common—prompt vet checks for squinting or redness.",
    ],
  },
  "saint-bernard-puppies-pedigree": {
    temperament:
      "Gentle giants—often mellow indoors but need space; drool and shedding come with the package.",
    healthTips: [
      "Rapid growth: avoid overfeeding; large-breed puppy protocols protect joints.",
      "Heat tolerance is poor—shade, water, and short outings when it’s hot.",
      "Your vet can advise on exercise as the puppy grows.",
    ],
  },
  "chow-chow-puppies-pedigree": {
    temperament:
      "Often aloof with strangers but loyal at home—early socialization prevents standoffishness turning into trouble.",
    healthTips: [
      "Thick double coat needs regular grooming; never shave without vet/groomer guidance.",
      "Eye and entropion issues occur in the breed—watch for squinting or discharge.",
      "Patient, reward-based training; heavy-handed methods backfire.",
    ],
  },
  "beagle-puppies-companion": {
    temperament:
      "Cheerful scent hounds—nose-first on walks, so secure leashes/fences matter more than for some breeds.",
    healthTips: [
      "Food motivation + strong nose = keep trash and toxins out of reach.",
      "Long ears trap moisture—your vet can show safe ear-cleaning cadence.",
      "Weight creeps up fast—portion meals and limit table scraps.",
    ],
  },
  "cane-corso-puppies-pedigree": {
    temperament:
      "Serious guardian breed—intense and strong; best for owners ready to train daily and socialize broadly.",
    healthTips: [
      "Early exposure to people, dogs, and novel situations is non-negotiable.",
      "Avoid harsh punishment; confident, consistent rules build trust.",
      "Hip/elbow talks with the breeder; bloat risk is higher in deep-chested adults—ask your vet about feeding practices later.",
    ],
  },
  "bernedoodle-puppies-pedigree": {
    temperament:
      "Temperament varies by parent dogs—often affectionate and social, but coat and energy aren’t uniform across litters.",
    healthTips: [
      "Curly coats usually need frequent brushing; straighter coats shed more.",
      "Schedule exercise to match the individual puppy—not every bernedoodle is low-key.",
      "Ask how parents were screened for hips and common breed issues.",
    ],
  },
  "golden-retriever-adults-companion": {
    temperament:
      "Typically warm and patient—still needs walks and games; maturity often softens teenage silliness.",
    healthTips: [
      "Maintain lean weight to protect aging joints.",
      "Annual vet visits and dental care catch problems early.",
      "Adjust exercise if stiffness appears—your vet can advise.",
    ],
  },
  "german-shepherd-adults-pedigree": {
    temperament:
      "Loyal and task-oriented—does best with ongoing training, outlets for drive, and clear routines.",
    healthTips: [
      "Watch gait and willingness to jump—early arthritis signs merit vet imaging.",
      "Lean body mass helps longevity in large breeds.",
      "Medication/supplements only under veterinary guidance.",
    ],
  },
};

function snapshotForSlug(slug: string): BreedSnapshot {
  const s = BREED_SNAPSHOTS[slug];
  if (!s) {
    throw new Error(`dog-categories: missing BREED_SNAPSHOTS entry for "${slug}"`);
  }
  return s;
}

const LINE_LABEL: Record<DogCategory["lineKind"], string> = {
  pedigree: "Pedigree line",
  companion: "Companion home line",
};

export function lineKindLabel(kind: DogCategory["lineKind"]): string {
  return LINE_LABEL[kind];
}

/** Shared truth-in-labeling copy — avoids implying live inventory or exact puppy photos on the site. */
const STOCK_IMAGE_NOTE =
  "Images on breed cards are stock photos for layout—they may not show the exact puppy you will meet.";
const DETAIL_BODY = [
  STOCK_IMAGE_NOTE,
  "What is available (male/female), age, fee, vaccination/deworming status, and pickup or delivery around Lucknow is confirmed only when you WhatsApp, call, or email.",
  "Nothing here is a real-time inventory guarantee; availability changes often.",
];

const WHAT_WE_DISCUSS = [
  "What is available now or soon for this breed",
  "Recent photos or a short clip after you reach out",
  "Health paperwork and next steps, as applicable",
  "Pickup or delivery options discussed for your area",
];

const ACTIVE_SHORT =
  "Contact us for current litter details for this breed in Lucknow—confirmed on inquiry, not on this page.";

const INACTIVE_SHORT =
  "Not highlighted for quick online inquiry right now—message us to ask what may be available.";

const INACTIVE_DETAIL = [
  STOCK_IMAGE_NOTE,
  "Ask the team what is available or planned next.",
];

function activeRow(
  row: Pick<
    DogCategory,
    "slug" | "breed" | "lifeStage" | "lineKind" | "imageSrc" | "imageAlt"
  >,
): DogCategory {
  return {
    ...row,
    breedSnapshot: snapshotForSlug(row.slug),
    acceptingInquiries: true,
    shortDescription: ACTIVE_SHORT,
    detailParagraphs: [...DETAIL_BODY],
    whatYouReceive: [...WHAT_WE_DISCUSS],
    priceFrom: "",
  };
}

function inactiveRow(
  row: Pick<
    DogCategory,
    "slug" | "breed" | "lifeStage" | "lineKind" | "imageSrc" | "imageAlt"
  >,
): DogCategory {
  return {
    ...row,
    breedSnapshot: snapshotForSlug(row.slug),
    acceptingInquiries: false,
    shortDescription: INACTIVE_SHORT,
    detailParagraphs: [...INACTIVE_DETAIL],
    whatYouReceive: ["Straight answer after you inquire"],
    priceFrom: "",
  };
}

export const dogCategories: DogCategory[] = [
  inactiveRow({
    slug: "golden-retriever-puppies-pedigree",
    breed: "Golden Retriever",
    lifeStage: "puppy",
    lineKind: "pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Golden retriever puppy (stock photo)",
  }),
  inactiveRow({
    slug: "french-bulldog-puppies-pedigree",
    breed: "French Bulldog",
    lifeStage: "puppy",
    lineKind: "pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=85",
    imageAlt: "French bulldog puppy (stock photo)",
  }),
  activeRow({
    slug: "lhasa-apso-puppies-companion",
    breed: "Lhasa Apso",
    lifeStage: "puppy",
    lineKind: "companion",
    imageSrc:
      "https://images.unsplash.com/photo-1765270428309-96ceb6c2bac4?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Fluffy tan puppy outdoors (stock photo — Lhasa Apso listing)",
  }),
  activeRow({
    slug: "rottweiler-puppies-pedigree",
    breed: "Rottweiler",
    lifeStage: "puppy",
    lineKind: "pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1598819849325-f0152d605b08?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Black and tan Rottweiler puppy (stock photo)",
  }),
  activeRow({
    slug: "german-shepherd-puppies-pedigree",
    breed: "German Shepherd",
    lifeStage: "puppy",
    lineKind: "pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1621951714491-3cde56a9cadf?auto=format&fit=crop&w=800&q=85",
    imageAlt: "German Shepherd puppy outdoors (stock photo)",
  }),
  activeRow({
    slug: "labrador-puppies-companion",
    breed: "Labrador Retriever",
    lifeStage: "puppy",
    lineKind: "companion",
    imageSrc:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Yellow Labrador Retriever puppy sitting (stock photo)",
  }),
  activeRow({
    slug: "pomeranian-puppies-companion",
    breed: "Pomeranian",
    lifeStage: "puppy",
    lineKind: "companion",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1719177518229-79d47d45d49a?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Small fluffy dog on blue background (stock photo — Pomeranian listing)",
  }),
  activeRow({
    slug: "doberman-puppies-pedigree",
    breed: "Doberman",
    lifeStage: "puppy",
    lineKind: "pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1599586477491-f86db60c0c1c?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Black and tan Doberman Pinscher (stock photo)",
  }),
  activeRow({
    slug: "poodle-puppies-companion",
    breed: "Poodle",
    lifeStage: "puppy",
    lineKind: "companion",
    imageSrc:
      "https://images.unsplash.com/photo-1608577474161-35429dc7c80d?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Brown Poodle on white bed (stock photo)",
  }),
  activeRow({
    slug: "pug-puppies-companion",
    breed: "Pug",
    lifeStage: "puppy",
    lineKind: "companion",
    imageSrc:
      "https://images.unsplash.com/photo-1535909339361-ef56e179d637?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Shallow focus portrait of fawn Pug (stock photo)",
  }),
  activeRow({
    slug: "saint-bernard-puppies-pedigree",
    breed: "Saint Bernard",
    lifeStage: "puppy",
    lineKind: "pedigree",
    imageSrc:
      "https://media.istockphoto.com/id/1137535145/photo/st-bernards-puppy-on-the-grass-in-the-summer-park.jpg?s=170667a&w=0&k=20&c=dyzf91lkN2r57OcMfORpNC6PDE0rcndBTHZy3Uw98Nw=",
    imageAlt: "Saint Bernard puppy on grass (stock image — confirm license for production)",
  }),
  activeRow({
    slug: "chow-chow-puppies-pedigree",
    breed: "Chow Chow",
    lifeStage: "puppy",
    lineKind: "pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Chow Chow in snow (stock photo)",
  }),
  activeRow({
    slug: "beagle-puppies-companion",
    breed: "Beagle",
    lifeStage: "puppy",
    lineKind: "companion",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1663127048434-84db6f90f08d?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Beagle portrait on wooden floor (stock photo — Unsplash+)",
  }),
  activeRow({
    slug: "cane-corso-puppies-pedigree",
    breed: "Cane Corso",
    lifeStage: "puppy",
    lineKind: "pedigree",
    imageSrc:
      "https://media.istockphoto.com/id/1510704491/photo/puppies-cane-corso.jpg?s=170667a&w=0&k=20&c=Pn4laP1gTsvty1Lnc_Mvhx92dAhiz1MZhiQCVcdY_dk=",
    imageAlt: "Cane Corso puppies (stock image — confirm license for production)",
  }),
  inactiveRow({
    slug: "bernedoodle-puppies-pedigree",
    breed: "Bernedoodle",
    lifeStage: "puppy",
    lineKind: "pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Fluffy doodle-type puppy (stock photo)",
  }),
  inactiveRow({
    slug: "golden-retriever-adults-companion",
    breed: "Golden Retriever",
    lifeStage: "adult",
    lineKind: "companion",
    imageSrc:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Adult golden retriever (stock photo)",
  }),
  inactiveRow({
    slug: "german-shepherd-adults-pedigree",
    breed: "German Shepherd",
    lifeStage: "adult",
    lineKind: "pedigree",
    imageSrc:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e87?auto=format&fit=crop&w=800&q=85",
    imageAlt: "German shepherd adult (stock photo)",
  }),
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
