import Image from "next/image";
import { careTips } from "@/lib/data/care-tips";

const primary = careTips.slice(0, 5);
const advanced = careTips.slice(5);

export function FigmaCareTips() {
  return (
    <section id="care" className="bg-bg-section px-0 py-20 sm:py-24">
      <div className="container-home">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            First weeks at home
          </p>
          <h2 className="mt-3 text-h2 text-text-primary">Puppy Care Tips</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            A calm routine beats intensity. These are practical defaults—always
            confirm medical decisions with your veterinarian.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-border-soft bg-card p-6 shadow-sm sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                What to prioritize
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Think in layers: safety → routine → training. Most “behavior
                problems” in week one are just overtired puppies.
              </p>

              <ol className="mt-8 space-y-6">
                {primary.map((tip) => (
                  <li key={tip.n} className="relative pl-12">
                    <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">
                      {tip.n}
                    </span>
                    <p className="text-base font-semibold text-text-primary">
                      {tip.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {tip.body}
                    </p>
                  </li>
                ))}
              </ol>

              <details className="mt-10 rounded-2xl border border-border-soft bg-bg-section p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-text-primary [&::-webkit-details-marker]:hidden">
                  Optional: personalize for your home (no signup)
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  If you live in an apartment in Lucknow, bias toward shorter
                  outdoor windows in summer, sound desensitization at home, and
                  predictable potty loops after naps. If you have kids, add
                  supervised greetings and toy swaps to prevent overstimulation.
                </p>
              </details>

              <details className="mt-4 rounded-2xl border border-border-soft bg-bg-section p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-text-primary [&::-webkit-details-marker]:hidden">
                  Advanced tips (06–07)
                </summary>
                <ul className="mt-4 space-y-4">
                  {advanced.map((tip) => (
                    <li key={tip.n} className="relative pl-12">
                      <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">
                        {tip.n}
                      </span>
                      <p className="text-base font-semibold text-text-primary">
                        {tip.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {tip.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </details>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl border border-border-soft bg-bg-section">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=900&q=85"
                    alt="Puppy resting calmly indoors"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 420px"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-text-primary">
                    72-hour starter checklist
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                    Inspired by common “new puppy” checklists: keep the first
                    three days boring, safe, and predictable.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                    <li className="flex gap-2">
                      <span className="mt-0.5 text-primary">✓</span>
                      <span>
                        One quiet “base camp” area (crate + water + chew legal
                        outlets)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 text-primary">✓</span>
                      <span>
                        Same food + measured meals (avoid sudden diet changes)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 text-primary">✓</span>
                      <span>
                        Potty after sleep, play, and meals (set phone reminders)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 text-primary">✓</span>
                      <span>
                        Book vet confirmation for records + next steps
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
