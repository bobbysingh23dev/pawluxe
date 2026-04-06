import Image from "next/image";

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
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] lg:mx-0">
          <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
            <Image
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=960&q=85"
              alt="Golden retriever"
              fill
              className="object-cover object-center transition duration-500 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </div>

        <div>
          <h2 className="text-h2 text-text-primary">About Us</h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary">
            We are a family-run breeder dedicated to raising healthy, well-socialized
            puppies in a loving home environment. Our dogs are part of our family
            before they become part of yours.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Every puppy receives veterinary care, early socialization, and lots of
            attention so they arrive confident, happy, and ready to bond with you.
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
