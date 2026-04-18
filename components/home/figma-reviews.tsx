import Image from "next/image";
import { site } from "@/lib/site";

const stories = [
  {
    quote:
      "They provided us exactly the breed and quality we requested. Our Fawn Pug settled in beautifully at home.",
    by: "Rohit Verma",
    pet: "Fawn Pug · Lucknow",
    image:
      "https://images.unsplash.com/photo-1535909339361-ef56e179d637?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tone: "cream",
  },
  {
    quote:
      "Dog they sold to us is healthy and good. If your budget is between 70k and 100k, this is a good option.",
    by: "Piyush Mishra",
    pet: "Verified Buyer · Lucknow",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
    tone: "warm",
  },
  {
    quote:
      "Good quality and support. They guide first-time owners very patiently and answer all doubts quickly.",
    by: "Vikas Karri",
    pet: "Verified Buyer · Hazratganj",
    image:
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80",
    tone: "cream",
  },
  {
    quote:
      "Best breed at good rates. Very honest communication and a helpful team throughout the process.",
    by: "Aakash Tiwari",
    pet: "Verified Buyer · Aliganj",
    image:
      "https://images.unsplash.com/photo-1537204696486-967f1b7198c8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tone: "light",
  },
] as const;

export function FigmaReviews() {
  const whatsappNumber = site.phoneHref.replace(/\D/g, "");

  return (
    <section id="reviews" className="bg-[#fffaf3] px-0 py-16 sm:py-20">
      <div className="container-home">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#fde7c2] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#8a4b00]">
            <span aria-hidden>★ ★ ★ ★ ☆</span>
            <span>4.5 Trusted Local Buyer Feedback</span>
          </p>
          <h2 className="mt-5 text-h2 text-text-primary">
            Real Google Reviews
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#7c2d12]">
            Ronit Pet Kennel · Lucknow
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
            Pulled from your shared review screenshots. These are real buyer
            voices from Lucknow and nearby areas.
          </p>
          <a
            href="https://www.google.com/search?q=Ronit+Pet+Kennel+Lucknow"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full border border-[#f59e0b] bg-white px-5 py-2 text-xs font-bold uppercase tracking-wide text-[#7c2d12] transition hover:bg-[#fff7ed]"
          >
            View Ronit Pet Kennel on Google
          </a>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 divide-x divide-[#f9d8a9] overflow-hidden rounded-2xl border border-[#f8d7a6] bg-white">
            <div className="px-4 py-4">
              <p className="text-2xl font-black text-[#9a3412]">Top</p>
              <p className="text-xs font-semibold text-text-secondary">
                Local Feedback
              </p>
            </div>
            <div className="px-4 py-4">
              <p className="text-2xl font-black text-[#166534]">4.4</p>
              <p className="text-xs font-semibold text-text-secondary">
                Average Rating
              </p>
            </div>
            <div className="px-4 py-4">
              <p className="text-2xl font-black text-[#7c2d12]">4.7</p>
              <p className="text-xs font-semibold text-text-secondary">
                Justdial Rating
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-3xl border border-[#f4d2a3] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(249,115,22,0.18)] lg:col-span-2">
            <div className="grid md:grid-cols-[240px_1fr]">
              <div className="relative min-h-[220px]">
                <Image
                  src={stories[0].image}
                  alt={stories[0].pet}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:1024px) 100vw, 240px"
                />
              </div>
              <div className="p-6">
                <p className="text-base font-black tracking-wide text-[#7c2d12]">
                  ★★★★★
                </p>
                <p className="mt-3 text-2xl font-bold leading-tight text-text-primary">
                  &ldquo;{stories[0].quote}&rdquo;
                </p>
                <p className="mt-5 text-sm font-bold text-text-primary">
                  {stories[0].pet}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  Adopted by {stories[0].by}
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-[#f4d2a3] bg-[#ffe8c7] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(249,115,22,0.18)]">
            <p className="text-base font-black tracking-wide text-[#7c2d12]">
              ★★★★★
            </p>
            <p className="mt-3 text-lg font-semibold leading-relaxed text-[#6b3a00]">
              &ldquo;{stories[1].quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src={stories[1].image}
                  alt={stories[1].pet}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[#5b2f00]">
                  {stories[1].pet}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#8b5e34]">
                  {stories[1].by}
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-[#f4d2a3] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(249,115,22,0.18)]">
            <p className="text-sm font-black tracking-wide text-[#7c2d12]">
              ★★★★★
            </p>
            <div className="relative mt-3 h-36 overflow-hidden rounded-2xl">
              <Image
                src={stories[2].image}
                alt={stories[2].pet}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              &ldquo;{stories[2].quote}&rdquo;
            </p>
            <p className="mt-3 text-sm font-bold text-text-primary">
              {stories[2].pet}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
              {stories[2].by}
            </p>
          </article>

          <article className="rounded-3xl border border-[#f4d2a3] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(249,115,22,0.18)]">
            <p className="text-sm font-black tracking-wide text-[#7c2d12]">
              ★★★★★
            </p>
            <p className="mt-3 text-xl font-bold leading-tight text-text-primary">
              &ldquo;{stories[3].quote}&rdquo;
            </p>
            <p className="mt-5 text-sm font-bold text-text-primary">
              {stories[3].pet}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
              {stories[3].by}
            </p>
          </article>

          <article className="rounded-3xl border border-[#f4d2a3] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(249,115,22,0.18)] lg:col-span-1">
            <p className="text-sm font-black tracking-wide text-[#7c2d12]">
              ★★★★★
            </p>
            <div className="relative mt-3 h-36 overflow-hidden rounded-2xl">
              <Image
                src={stories[3].image}
                alt={stories[3].pet}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Thank you for support and clear communication. Really impressed
              with service and pet quality.
            </p>
            <p className="mt-3 text-sm font-bold text-text-primary">
              Nikhil Saini · Gomti Nagar
            </p>
          </article>
        </div>

        <div className="mt-12 rounded-3xl border border-[#f4d2a3] bg-[#fff1dc] px-6 py-10 text-center">
          <h3 className="text-3xl font-black text-text-primary">
            Ready to find your{" "}
            <span className="text-[#166534]">Perfect Match?</span>
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-text-secondary">
            Talk to our team and shortlist puppies by temperament, budget, and
            home setup.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/lucknow/puppies"
              className="rounded-full bg-[#7c2d12] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Browse Puppies
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="rounded-full border border-[#f59e0b] bg-white px-6 py-3 text-sm font-bold text-[#7c2d12] transition hover:bg-[#fff7ed]"
            >
              Call
            </a>
            <a
              href={`sms:${site.phoneHref}?body=Hi%2C%20I%20want%20details%20about%20available%20puppies%20in%20Lucknow.`}
              className="rounded-full border border-[#f59e0b] bg-white px-6 py-3 text-sm font-bold text-[#7c2d12] transition hover:bg-[#fff7ed]"
            >
              SMS
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20want%20details%20about%20available%20puppies%20in%20Lucknow.`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#25D366] bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
