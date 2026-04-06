import Image from "next/image";
import Link from "next/link";
import { heroPawCollage } from "@/lib/data/breed-showcase";

function PawIconBtn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <circle cx="12" cy="14" r="4.5" />
      <circle cx="7" cy="8" r="2.2" />
      <circle cx="12" cy="6" r="2.2" />
      <circle cx="17" cy="8" r="2.2" />
      <circle cx="6" cy="14" r="1.8" />
      <circle cx="18" cy="14" r="1.8" />
    </svg>
  );
}

/** Center “pad” — poodle-style stock photo */
const HERO_PAD =
  "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=500&q=85";

/** Beagle (Unsplash) — previous photo-1505628346881 now 404s on imgix */
function heroBeagleUrl(w: number) {
  return `https://images.unsplash.com/photo-1512546321483-c0468b7b8a95?auto=format&fit=crop&w=${w}&q=85`;
}

export function FigmaHero() {
  const [toeA, toeB, , toeD, toeE] = heroPawCollage;

  return (
    <section className="relative overflow-hidden bg-bg-section pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="pointer-events-none absolute inset-0 bg-paw-pattern opacity-60" />
      <div className="container-home relative grid gap-12 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-center lg:gap-8">
        {/* Left — Beagle */}
        <div className="relative mx-auto hidden h-[min(70vh,520px)] w-full max-w-[300px] lg:block">
          <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
            <Image
              src={heroBeagleUrl(800)}
              alt="Beagle puppy"
              fill
              className="object-cover object-center"
              sizes="300px"
              priority
            />
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mx-auto mb-10 h-[min(58vw,340px)] w-[min(94vw,360px)] sm:h-[320px] sm:w-[340px]">
            {/* Pad — rounded square */}
            <div className="absolute left-1/2 top-[54%] h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] border-4 border-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] ring-2 ring-primary/20">
              <Image
                src={HERO_PAD}
                alt="Poodle portrait"
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>
            {/* Toes */}
            <div className="absolute left-[6%] top-[14%] h-[22%] w-[22%] overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src={toeA.src}
                alt={toeA.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="absolute left-[24%] top-[4%] h-[20%] w-[20%] overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src={toeB.src}
                alt={toeB.alt}
                fill
                className="object-cover"
                sizes="72px"
              />
            </div>
            <div className="absolute left-1/2 top-0 h-[20%] w-[20%] -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-md" />
            <div className="absolute right-[24%] top-[4%] h-[20%] w-[20%] overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src={toeD.src}
                alt={toeD.alt}
                fill
                className="object-cover"
                sizes="72px"
              />
            </div>
            <div className="absolute right-[6%] top-[14%] h-[22%] w-[22%] overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src={toeE.src}
                alt={toeE.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </div>

          <h1 className="text-h1 text-primary">Find Your Forever Friend</h1>
          <p className="mx-auto mt-6 max-w-lg text-base font-normal text-text-secondary">
            Discover healthy, happy puppies raised with love. We connect caring
            families with ethically bred companions and support you through every
            step of adoption.
          </p>
          <Link
            href="/dogs"
            className="btn-primary mt-10"
          >
            Explore the Puppies
            <PawIconBtn className="h-5 w-5 text-white" />
          </Link>
        </div>

        {/* Right — Lab */}
        <div className="relative mx-auto hidden h-[min(70vh,520px)] w-full max-w-[300px] lg:block">
          <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
            <Image
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=85"
              alt="Black Labrador"
              fill
              className="object-cover object-center"
              sizes="300px"
              priority
            />
          </div>
        </div>

        {/* Mobile side images */}
        <div className="flex justify-center gap-4 lg:hidden">
          <div className="relative h-44 w-32 overflow-hidden rounded-[24px] shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
            <Image
              src={heroBeagleUrl(400)}
              alt="Beagle"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <div className="relative h-44 w-32 overflow-hidden rounded-[24px] shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
            <Image
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=400&q=85"
              alt="Labrador"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
