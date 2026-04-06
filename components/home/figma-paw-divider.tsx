function PawGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="20" cy="22" r="8" opacity="0.4" />
      <circle cx="11" cy="12" r="4" opacity="0.4" />
      <circle cx="20" cy="9" r="4" opacity="0.4" />
      <circle cx="29" cy="12" r="4" opacity="0.4" />
      <circle cx="8" cy="24" r="3.5" opacity="0.4" />
      <circle cx="32" cy="24" r="3.5" opacity="0.4" />
    </svg>
  );
}

export function FigmaPawDivider() {
  const paws = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div
      className="border-y border-border-soft/60 bg-bg-section py-6 sm:py-8"
      aria-hidden
    >
      <div className="container-home flex flex-wrap justify-center gap-x-10 gap-y-4 text-primary opacity-[0.2] sm:gap-x-14">
        {paws.map((i) => (
          <PawGlyph key={i} className="h-9 w-9 shrink-0 sm:h-11 sm:w-11" />
        ))}
      </div>
    </div>
  );
}
