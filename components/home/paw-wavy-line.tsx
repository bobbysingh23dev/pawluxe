import type { CSSProperties } from "react";

const pawLineStyle: CSSProperties = {
  backgroundColor: "#f47c2b",
  WebkitMaskImage: "url(/images/lucknow-paw-wave.png)",
  maskImage: "url(/images/lucknow-paw-wave.png)",
  WebkitMaskRepeat: "repeat-x",
  maskRepeat: "repeat-x",
  WebkitMaskSize: "120px auto",
  maskSize: "120px auto",
  WebkitMaskPosition: "center 62%",
  maskPosition: "center 62%",
  maskMode: "luminance",
  ...({ WebkitMaskMode: "luminance" } as Record<string, string>),
};

export function PawWavyLine({ className }: { className?: string }) {
  return (
    <div
      className={`mt-5 h-12 w-full sm:h-16 ${className ?? ""}`}
      aria-hidden
      style={pawLineStyle}
    />
  );
}
