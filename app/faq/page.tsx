import type { Metadata } from "next";
import { FigmaFaq } from "@/components/home/figma-faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQs | ${site.legalName}`,
  description:
    "Answers to common questions about puppy availability, records, handoff, and post-adoption support in Lucknow.",
  alternates: {
    canonical: `${site.url}/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <FigmaFaq />
      <section className="bg-bg-section px-0 pb-10">
        <div className="container-home">
          <p className="text-center text-xs font-semibold text-text-secondary">
            FAQ content updated: April 2026
          </p>
        </div>
      </section>
    </>
  );
}
