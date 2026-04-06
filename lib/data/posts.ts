import type { BlogPost } from "@/lib/types";

export const posts: BlogPost[] = [
  {
    slug: "how-to-choose-a-reputable-dog-breeder",
    title: "How to Choose a Reputable Dog Breeder (Without the Red Flags)",
    description:
      "A practical checklist for families who want transparency, verified health practices, and a puppy raised with intention—not rushed placements.",
    publishedAt: "2026-03-12",
    readMinutes: 8,
    keywords: [
      "reputable dog breeder",
      "puppy health guarantee",
      "ethical breeding",
      "family dog",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Person gently holding a small puppy with care indoors",
    body: [
      "The best breeders behave like partners, not sales desks. They answer questions slowly, show you how puppies live day to day, and can explain why their program exists beyond a single litter.",
      "Start with documentation you can verify: veterinary relationships, vaccination records, microchip paperwork, and parent health information appropriate to the breed. If something is “private,” ask what that protects—and whether it protects you or the seller.",
      "Observe how puppies are socialized. Calm exposure to household sounds, gentle handling, and predictable routines produce dogs that settle faster in family homes. Flashy photos are nice; steady daily structure is better.",
      "Ask about go-home support. Premium programs include transition guidance, feeding plans, and a clear path if questions arise after placement. That continuity is a signal of long-term care, not a one-time transaction.",
      "At PawLuxe, we prioritize fit over speed. If you want a checklist tailored to your lifestyle, our team will walk you through it—no pressure, no gimmicks.",
    ],
  },
  {
    slug: "first-week-with-your-puppy-checklist",
    title: "Your Puppy’s First Week at Home: A Calm, Confident Checklist",
    description:
      "Set sleep, feeding, and bonding routines that reduce overwhelm—for both you and your new family member.",
    publishedAt: "2026-02-26",
    readMinutes: 6,
    keywords: [
      "puppy first week",
      "puppy schedule",
      "crate training tips",
      "new puppy checklist",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Golden retriever puppy exploring a bright living room",
    body: [
      "Day one is not about perfection—it is about predictability. Keep the environment quiet, limit visitors, and repeat a simple rhythm: potty, play, meal, rest.",
      "Use the crate as a den, not a penalty. Short, pleasant sessions with a high-value chew build a positive association faster than long isolations ever will.",
      "Track appetite, energy, and stool quality for the first seventy-two hours. Small changes are normal during transition; sudden lethargy or repeated GI upset deserves a veterinarian’s eyes.",
      "Introduce leash pressure and name recognition in micro-sessions—two to five minutes—so learning stays fun. End every session before your puppy checks out.",
      "If you sourced your puppy through PawLuxe, use your go-home packet as the anchor. It is written to match the routines your puppy already knows.",
    ],
  },
  {
    slug: "premium-nutrition-and-puppy-development",
    title: "Premium Nutrition and Puppy Development: What Actually Matters",
    description:
      "Cut through marketing noise with a straightforward look at protein quality, meal timing, and the signals of healthy growth.",
    publishedAt: "2026-01-18",
    readMinutes: 7,
    keywords: [
      "puppy nutrition",
      "premium dog food",
      "puppy feeding schedule",
      "healthy puppy growth",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Healthy dog food ingredients arranged neatly on a kitchen counter",
    body: [
      "Nutrition is not a single ingredient story—it is consistency, digestibility, and appropriate calories for your puppy’s projected adult size. Sudden food changes are a common cause of unnecessary vet visits.",
      "Split meals to match energy cycles. Young puppies often do best on three to four measured meals, shifting toward two as maturity approaches—always aligned with your veterinarian’s guidance.",
      "Watch the coat, the eyes, and the stool. Shine, clarity, and firm formation usually mean the diet is agreeing with your dog, even when marketing claims disagree with each other.",
      "Treats should be tiny and intentional. Training rewards work best when they are part of the daily calorie plan, not an endless add-on.",
      "PawLuxe families receive a transition feeding outline at placement so you can keep digestion steady while you build your long-term plan with your vet.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsSorted(): BlogPost[] {
  return [...posts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
}
