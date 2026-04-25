"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  {
    href: "/lucknow/puppies",
    label: "Lucknow Puppies",
    match: (p: string) => p.startsWith("/lucknow"),
  },
  { href: "/#about", label: "About Us", match: () => false },
  { href: "/dogs", label: "Shop", match: (p: string) => p.startsWith("/dogs") },
  { href: "/blog", label: "Blog", match: (p: string) => p.startsWith("/blog") },
  { href: "/faq", label: "FAQ", match: (p: string) => p.startsWith("/faq") },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg-outer/90 pt-0 backdrop-blur-sm">
      <div className="container-home pb-0 pt-3 sm:pt-5">
        <div className="flex flex-col overflow-hidden rounded-2xl bg-primary shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2 text-white"
            >
              <span className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight sm:text-xl">
                  PET shop
                </span>
              </span>
            </Link>

            <nav
              className="hidden min-w-0 flex-1 justify-center xl:flex"
              aria-label="Primary"
            >
              <ul className="flex flex-wrap items-center justify-center gap-1.5">
                {nav.map((item) => {
                  const active = item.match(pathname);
                  return (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        className="nav-header-link"
                        data-active={active ? "true" : "false"}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <a
              href={`tel:${site.phoneHref}`}
              className="hidden rounded-full bg-white px-4 py-2 text-xs font-bold text-primary transition hover:bg-orange-50 lg:inline-flex"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
