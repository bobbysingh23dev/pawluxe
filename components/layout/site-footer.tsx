import Link from "next/link";
import { site } from "@/lib/site";

const quick = [
  { href: "/", label: "Home" },
  { href: "/lucknow/puppies", label: "Puppies" },
  { href: "/#about", label: "About Us" },
  { href: "/dogs", label: "Shop" },
  { href: "/blog", label: "Blog" },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-0 bg-text-primary text-white">
      <div className="container-home py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-bold">{site.name}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/60">
              Owner: {site.ownerName}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Healthy puppies with verified records, quotes on inquiry, and
              handoff support.
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
              Serving inquiries across all states.
            </p>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition hover:bg-orange-500"
            >
              Call now for availability
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Quick links
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {quick.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/80 transition hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-white/80 transition hover:text-primary"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="transition hover:text-primary"
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-white/60">Serving across India</li>
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {site.brandName}. Photos via{" "}
          <a
            href="https://unsplash.com"
            className="underline hover:text-white"
            rel="noreferrer"
          >
            Unsplash
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
