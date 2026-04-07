import Image from "next/image";
import Link from "next/link";
import { Beagle, BlackLabrador, paw } from "@/public/images";

export function FigmaHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1ec] pt-2 sm:pt-3 lg:pb-0">
      <div className="mx-auto grid max-w-[1440px]  grid-cols-1 items-center gap-4 px-3 md:px-6 lg:grid-cols-[1fr_1.04fr_1fr] lg:gap-2">
        <div className="relative hidden h-[600px] lg:block ">
          <div className="absolute -left-32 -bottom-8 h-[530px] w-[530px]">
            <Image
              src={Beagle}
              alt="Beagle dog"
              fill
              className="object-contain object-bottom"
              sizes="530px"
              priority
            />
          </div>
        </div>

        <div className="flex -translate-y-4 flex-col items-center text-center sm:-translate-y-5">
          <div className="relative h-[320px] w-[440px] max-w-full sm:h-[340px] sm:w-[480px]">
            <div className="absolute left-1/2 top-[54%] z-10 h-[236px] w-[390px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              <Image
                src={paw}
                alt="Dog paw shape"
                fill
                className="object-cover object-top"
                sizes="390px"
                priority
              />
            </div>
          </div>

          <h1 className="mt-8 max-w-[720px] text-4xl font-black leading-[0.95] tracking-[-0.02em] text-[#f97316] sm:text-5xl">
            Find Your Forever Friend
          </h1>
          <p className="mt-4 max-w-[500px] text-center text-sm leading-relaxed text-[#6b7280] sm:text-base">
            Bring your next best family puppy home with care and love. Explore
            our trusted and upcoming litters, meet the parents, and find your
            new furry companion to complete your family today.
          </p>
          <Link
            href="/dogs"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#ea580c]"
          >
            Explore the Puppies
            <span aria-hidden>🐾</span>
          </Link>
        </div>

        <div className="relative hidden h-[600px] lg:block">
          <div className="absolute -right-32 -bottom-8 h-[550px] w-[550px]">
            <Image
              src={BlackLabrador}
              alt="Black Labrador dog"
              fill
              className="object-contain object-bottom"
              sizes="550px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
