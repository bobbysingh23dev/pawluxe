import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Beagle, BlackLabrador, paw } from "@/public/images";

export function FigmaHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1ec] pt-4 sm:pt-5 lg:pb-6">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-4 px-3 md:px-6 lg:grid-cols-[1fr_1.04fr_1fr] lg:gap-2">
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

        <div className="relative flex -translate-y-3 flex-col items-center text-center sm:-translate-y-4">
          <div className="pointer-events-none absolute inset-x-0 top-[120px] z-0 h-[220px] rounded-full bg-[#fed7aa]/50 blur-3xl" />
          <div className="relative h-[400px] w-[560px] max-w-full sm:h-[460px] sm:w-[640px]">
            <div className="absolute left-1/2 top-[54%] z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 overflow-hidden sm:h-[340px] sm:w-[560px]">
              <Image
                src={paw}
                alt="Dog paw shape"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 500px, 560px"
                priority
              />
            </div>
          </div>

          <h1 className="relative z-10 mt-7 max-w-[820px] text-4xl font-black leading-[1.08] tracking-[-0.015em] text-[#f97316] sm:text-5xl sm:leading-[1.06] lg:text-[58px] lg:leading-[1.05]">
            Healthy Puppies in Lucknow with Verified Records
          </h1>
          <p className="relative z-10 mt-4 max-w-[560px] text-center text-sm leading-relaxed text-[#6b7280] sm:text-base">
            Buy puppy in Lucknow with confidence. Explore breeds we work with,
            get fees and litter details on inquiry, and review vet-backed
            paperwork before you reserve.
          </p>
          <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/lucknow/puppies"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(249,115,22,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#ea580c]"
            >
              View Lucknow Availability
              <span aria-hidden>🐾</span>
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center rounded-xl border border-[#f97316] bg-white/80 px-6 py-3 text-sm font-semibold text-[#f97316] transition hover:bg-[#fff7ed]"
            >
              Call for Today&apos;s Open Litters
            </a>
          </div>
          <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#7c2d12] sm:text-xs">
            <span className="rounded-full bg-[#fff7ed] px-3 py-1">
              Vet-backed records shared on inquiry
            </span>
            <span className="rounded-full bg-[#fff7ed] px-3 py-1">
              Lucknow local handoff support
            </span>
            <span className="rounded-full bg-[#fff7ed] px-3 py-1">
              Direct WhatsApp response
            </span>
          </div>
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
