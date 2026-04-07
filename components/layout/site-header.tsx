"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  { href: "/#about", label: "About Us", match: () => false },
  { href: "/dogs", label: "Shop", match: (p: string) => p.startsWith("/dogs") },
  { href: "/blog", label: "Blog", match: (p: string) => p.startsWith("/blog") },
  { href: "/#contact", label: "Contact Us", match: () => false },
  { href: "/#faq", label: "FAQs", match: () => false },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg-outer pt-0">
      <div className="container-home pb-0 pt-4 sm:pt-6">
        <div className="flex flex-col overflow-hidden rounded-b-[20px] bg-primary shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-5">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2 text-white"
            >
              <span className="text-lg font-bold tracking-tight sm:text-xl">
                PawLuxe
              </span>
            </Link>

            <nav
              className="hidden min-w-0 flex-1 justify-center lg:flex"
              aria-label="Primary"
            >
              <ul className="flex flex-wrap items-center justify-center gap-1">
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
          </div>
        </div>
      </div>
    </header>
  );
}
