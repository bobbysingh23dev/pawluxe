import type { BreedSnapshot } from "@/lib/types";
import { site } from "@/lib/site";

export function BreedInsightsCard({
  breed,
  snapshot,
}: {
  breed: string;
  snapshot: BreedSnapshot;
}) {
  return (
    <section className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
      <h2 className="text-lg font-extrabold text-charcoal">
        About the {breed}
      </h2>
      <p className="mt-3 leading-relaxed text-muted">{snapshot.temperament}</p>
      <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-charcoal">
        Puppy health & care hints
      </h3>
      <ul className="mt-3 list-inside list-disc space-y-2 text-muted">
        {snapshot.healthTips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        These are general breed notes from public breed guides—not medical advice.
        Ask your vet about vaccines, parasite control, diet, and exercise for{" "}
        <span className="font-semibold text-charcoal">{breed}</span> in your home.
      </p>
    </section>
  );
}

export function InquiryContactGrid({ breed }: { breed: string }) {
  const smsBody = encodeURIComponent(
    `Hi — I'd like to inquire about ${breed}. (Reached via ${site.url})`,
  );
  const waText = encodeURIComponent(
    `Hi — I'd like to inquire about ${breed}. I found you on ${site.url}`,
  );

  const items = [
    {
      label: "Email",
      hint: site.email,
      href: `mailto:${site.email}?subject=${encodeURIComponent(`Inquiry: ${breed}`)}`,
      variant: "primary" as const,
    },
    {
      label: "WhatsApp",
      hint: site.phone,
      href: `${site.whatsappHref}?text=${waText}`,
      variant: "secondary" as const,
    },
    {
      label: "Call",
      hint: site.phone,
      href: `tel:${site.phoneHref}`,
      variant: "secondary" as const,
    },
    {
      label: "SMS",
      hint: site.phone,
      href: `sms:${site.phoneHref}?body=${smsBody}`,
      variant: "secondary" as const,
    },
  ];

  return (
    <section className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
      <h2 className="text-lg font-extrabold text-charcoal">Reach us</h2>
      <p className="mt-2 text-sm text-muted">
        Same team on every channel—pick what you use most. Include the breed name so
        we can reply faster.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={
              item.variant === "primary"
                ? "btn-terracotta flex flex-col items-center justify-center rounded-2xl px-4 py-4 text-center text-sm font-bold"
                : "flex flex-col items-center justify-center rounded-2xl border-2 border-terracotta px-4 py-4 text-center text-sm font-bold text-terracotta transition hover:bg-terracotta hover:text-white"
            }
          >
            <span>{item.label}</span>
            <span className="mt-1 text-xs font-normal opacity-90">{item.hint}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
