import Link from "next/link";
import { site } from "@/lib/site";

const quick = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/dogs", label: "Shop" },
  { href: "/blog", label: "Blog" },
] as const;

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-0 bg-text-primary text-white"
    >
      <div className="container-home py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">{site.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Ethical breeding, healthy puppies, and lifelong support for your
              new companion.
            </p>
          </div>
          <div>
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
                  href="/#faq"
                  className="text-white/80 transition hover:text-primary"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
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
                <a href="tel:+18447295893" className="transition hover:text-primary">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
          <div id="faq">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              FAQs
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>Do you list individual puppies online?</li>
              <li>How does pricing work?</li>
              <li>Can my vet verify paperwork?</li>
            </ul>
            <Link
              href={`mailto:${site.email}?subject=FAQ`}
              className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Ask us anything →
            </Link>
          </div>
        </div>
        <p className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {site.name}. Photos via{" "}
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
