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

function PawLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="16" cy="18" r="7" fill="currentColor" />
      <circle cx="9" cy="10" r="3.5" fill="currentColor" />
      <circle cx="16" cy="7" r="3.5" fill="currentColor" />
      <circle cx="23" cy="10" r="3.5" fill="currentColor" />
      <circle cx="7" cy="18" r="3" fill="currentColor" />
      <circle cx="25" cy="18" r="3" fill="currentColor" />
    </svg>
  );
}

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
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                <PawLogo className="h-6 w-6" />
              </span>
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

            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/dogs"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                aria-label="Search"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>
              <span
                className="hidden h-10 w-10 shrink-0 rounded-full border-2 border-white/40 bg-white/10 sm:block"
                aria-hidden
              />
            </div>
          </div>

          <nav
            className="border-t border-white/15 px-4 py-3 lg:hidden"
            aria-label="Primary mobile"
          >
            <ul className="flex flex-wrap justify-center gap-2">
              {nav.map((item) => {
                const active = item.match(pathname);
                return (
                  <li key={item.href + item.label + "m"}>
                    <Link
                      href={item.href}
                      className={`rounded-lg px-3 py-2 text-xs font-semibold text-white ${
                        active ? "bg-white/25" : "bg-white/10"
                      }`}
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
    </header>
  );
}
