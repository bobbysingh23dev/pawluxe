import Image from "next/image";
import { GoldenRetrieverWithButterfly } from "@/public/images";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "20k+", label: "Puppies Sold" },
  { value: "98%", label: "Satisfaction" },
  { value: "5★", label: "Rating" },
] as const;

export function FigmaAbout() {
  return (
    <section
      id="about"
      className="border-y border-border-soft bg-bg-section px-0 py-16 sm:py-20"
    >
      <div className="container-home grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative mx-auto aspect-4/5 w-full max-w-[480px] lg:mx-0">
          <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
            <Image
              src={GoldenRetrieverWithButterfly}
              alt="Golden retriever with butterfly"
              fill
              className="object-cover object-center transition duration-500 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border-soft/70 bg-white/60 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] sm:p-8">
          <h2 className="text-h2 text-text-primary">About Our Lucknow Kennel</h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary">
            We are a Lucknow-based, family-run kennel focused on healthy,
            well-socialized puppies for local homes. Every placement is guided
            by fit, paperwork transparency, and responsible handoff.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Before reservation, we walk you through breed fit, provide
            veterinary records, and support your first-week transition plan.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <dd className="text-[28px] font-bold leading-none text-primary sm:text-[32px]">
                  {s.value}
                </dd>
                <dt className="mt-2 text-small font-medium text-text-secondary">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
