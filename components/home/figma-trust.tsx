import Link from "next/link";
import { site } from "@/lib/site";

const trustCards = [
  {
    title: "Health Records You Can Verify",
    points: [
      "Vaccination and deworming history shared before reservation.",
      "Vet record details can be cross-checked with your own vet.",
      "Basic care guidance shared for first-week transition.",
    ],
  },
  {
    title: "Transparent Before Payment",
    points: [
      "Discuss breed fit, budget, and availability first.",
      "Get clear fee breakdown on inquiry.",
      "Confirm details on WhatsApp before finalizing pickup.",
    ],
  },
  {
    title: "Local Lucknow Handoff Support",
    points: [
      "Pickup coordination across major Lucknow zones.",
      "Quick answers for first-time owners and families.",
      "Direct contact via call or WhatsApp.",
    ],
  },
] as const;

export function FigmaTrust() {
  return (
    <section className="bg-white px-0 py-14 sm:py-16">
      <div className="container-home">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full bg-[#fff7ed] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#9a3412]">
            Trust and verification first
          </p>
          <h2 className="mt-4 text-h2 text-text-primary">
            Buy With Clarity, Not Guesswork
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            We keep the process transparent so you can verify key details before
            you reserve.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-border-soft bg-bg-section/60 p-5"
            >
              <h3 className="text-base font-bold text-text-primary">{card.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-secondary">
                {card.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#fed7aa] bg-[#fffaf0] p-5 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <p className="text-sm font-semibold text-[#7c2d12]">
            Still unsure? Start with FAQs or ask your exact question directly.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 sm:mt-0">
            <Link
              href="/faq"
              className="inline-flex rounded-full border border-[#fdba74] bg-white px-4 py-2 text-xs font-bold text-[#9a3412] transition hover:bg-[#fff7ed]"
            >
              Read FAQs
            </Link>
            <a
              href={`${site.whatsappHref}?text=Hi%2C%20I%20want%20to%20verify%20health%20records%20before%20reservation.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white transition hover:opacity-90"
            >
              Verify on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
