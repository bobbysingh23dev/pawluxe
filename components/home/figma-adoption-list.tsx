import Image from "next/image";
import Link from "next/link";
import { adoptionSpotlight } from "@/lib/data/adoption-spotlight";

export function FigmaAdoptionList() {
  return (
    <section id="adoption" className="bg-bg-outer px-0 py-16 sm:py-20">
      <div className="container-home">
        <h2 className="text-center text-h2 text-text-primary">
          Adoption Pets
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-text-secondary">
          Meet dogs looking for their forever home. Tap through for full details.
        </p>

        <ul className="mt-12 space-y-6">
          {adoptionSpotlight.map((row) => (
            <li key={row.slug + row.label}>
              <div className="card-ds flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6">
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl sm:h-36 sm:w-44">
                  <Image
                    src={row.imageSrc}
                    alt={row.imageAlt}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                    sizes="(max-width:640px) 100vw, 176px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-h3 text-text-primary">{row.label}</p>
                  <p className="mt-1 text-base font-semibold text-primary">
                    {row.breed}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-small text-text-secondary">
                    <li>{row.age}</li>
                    <li>{row.gender}</li>
                    <li>{row.size}</li>
                  </ul>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:items-end">
                  <Link
                    href={`/dogs/${row.slug}`}
                    className="btn-primary w-full justify-center sm:w-auto sm:min-w-[140px]"
                  >
                    Adopt
                  </Link>
                  <Link
                    href={`/dogs/${row.slug}`}
                    className="inline-flex h-11 w-full items-center justify-center rounded-[10px] border-2 border-primary text-sm font-semibold text-primary transition hover:bg-primary hover:text-white sm:w-11"
                    aria-label={`Details for ${row.breed}`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
