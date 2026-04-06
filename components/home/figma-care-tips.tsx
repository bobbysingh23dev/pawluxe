import Image from "next/image";
import { careTips } from "@/lib/data/care-tips";

const five = careTips.slice(0, 5);
const left = five.slice(0, 2);
const right = five.slice(2);

export function FigmaCareTips() {
  return (
    <section id="care" className="bg-bg-section px-0 py-16 sm:py-20">
      <div className="container-home">
        <h2 className="text-center text-h2 text-text-primary">
          Puppy Care Tips
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-text-secondary">
          Essentials for your puppy’s first months—always confirm medical decisions
          with your veterinarian.
        </p>

        <div className="mx-auto mt-14 grid max-w-5xl gap-12 lg:grid-cols-[1fr_minmax(220px,280px)_1fr] lg:items-center lg:gap-10">
          <ul className="space-y-8">
            {left.map((tip) => (
              <li key={tip.n} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-sm">
                  {tip.n}
                </span>
                <div>
                  <p className="text-h3 text-text-primary">{tip.title}</p>
                  <p className="mt-2 text-small text-text-secondary leading-relaxed">
                    {tip.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative mx-auto aspect-square w-full max-w-[260px]">
            <div className="absolute inset-0 rounded-full bg-primary p-3 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=600&q=85"
                  alt="Bernese Mountain Dog"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="260px"
                />
              </div>
            </div>
          </div>

          <ul className="space-y-8">
            {right.map((tip) => (
              <li key={tip.n} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-sm">
                  {tip.n}
                </span>
                <div>
                  <p className="text-h3 text-text-primary">{tip.title}</p>
                  <p className="mt-2 text-small text-text-secondary leading-relaxed">
                    {tip.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
