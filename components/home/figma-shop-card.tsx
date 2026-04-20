import Image from "next/image";
import Link from "next/link";
import type { DogCategory } from "@/lib/types";
import { site } from "@/lib/site";

type Props = { category: DogCategory };

function badgeFor(category: DogCategory): string {
  return category.lineKind === "pedigree" ? "Pedigree" : "Companion";
}

export function FigmaShopCard({ category }: Props) {
  const whatsappNumber = site.phoneHref.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hi, I want details for ${category.breed} (${category.lifeStage}).`,
  );
  const contacts = [
    {
      href: `sms:${site.phoneHref}?body=${message}`,
      label: "SMS",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="M6 9.5L12 13.5L18 9.5" />
        </svg>
      ),
    },
    {
      href: `https://wa.me/${whatsappNumber}?text=${message}`,
      label: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.47 0 .11 5.36.11 11.95c0 2.1.55 4.14 1.58 5.93L0 24l6.29-1.65a11.8 11.8 0 0 0 5.75 1.47h.01c6.58 0 11.94-5.36 11.94-11.95c0-3.19-1.24-6.19-3.47-8.39ZM12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.73.98l1-3.63-.24-.37a9.84 9.84 0 0 1-1.53-5.26c0-5.48 4.45-9.93 9.93-9.93c2.66 0 5.16 1.03 7.03 2.9a9.86 9.86 0 0 1 2.9 7.03c0 5.48-4.46 9.93-9.94 9.93Zm5.45-7.44c-.3-.15-1.77-.87-2.05-.97c-.27-.1-.47-.15-.67.15c-.2.3-.77.97-.95 1.17c-.17.2-.35.22-.65.07c-.3-.15-1.26-.46-2.4-1.48c-.88-.78-1.48-1.75-1.65-2.05c-.17-.3-.02-.46.13-.6c.13-.13.3-.35.45-.52c.15-.17.2-.3.3-.5c.1-.2.05-.37-.03-.52c-.07-.15-.67-1.62-.92-2.22c-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37c-.27.3-1.05 1.02-1.05 2.5c0 1.47 1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54c.72.31 1.28.49 1.71.63c.72.23 1.37.2 1.89.12c.58-.09 1.77-.72 2.02-1.42c.25-.7.25-1.3.17-1.42c-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      ),
    },
    {
      href: `tel:${site.phoneHref}`,
      label: "Call",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
          <path d="M21 16.4v2.8a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1 3.2A2 2 0 0 1 3 1h2.8a2 2 0 0 1 2 1.7c.1.9.4 1.8.8 2.6a2 2 0 0 1-.5 2.1L7 8.5a16 16 0 0 0 6.5 6.5l1.1-1.1a2 2 0 0 1 2.1-.5c.8.4 1.7.7 2.6.8a2 2 0 0 1 1.7 2Z" />
        </svg>
      ),
    },
    {
      href: `mailto:${site.email}?subject=${encodeURIComponent(`Inquiry: ${category.breed}`)}`,
      label: "Email",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="M4 7l8 6l8-6" />
        </svg>
      ),
    },
  ] as const;

  return (
    <article className="card-ds group relative flex flex-col p-5">
      <span className="absolute left-5 top-5 z-10 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
        {badgeFor(category)}
      </span>
      <Link href={`/dogs/${category.slug}`} className="flex flex-col">
        <div className="relative mt-2 aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src={category.imageSrc}
            alt={category.imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          />
        </div>
        <h3 className="mt-5 text-center text-h3 text-text-primary">
          {category.breed}
        </h3>
      </Link>
      <div className="mt-4 border-t border-border-soft pt-4">
        <div className="flex items-center justify-center gap-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "WhatsApp" ? "_blank" : undefined}
              rel={contact.label === "WhatsApp" ? "noreferrer" : undefined}
              aria-label={`Contact via ${contact.label} for ${category.breed}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-white text-text-primary transition duration-200 hover:-translate-y-1 hover:scale-110 hover:border-primary hover:text-primary"
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
