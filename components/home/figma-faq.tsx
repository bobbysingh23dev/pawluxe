"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Do you have puppies available right now?",
    a: "Availability changes by breed and season. Message us on WhatsApp for live options and the current fee range.",
  },
  {
    q: "Can I verify vaccination and health records with my vet?",
    a: "Yes. We share vaccination, deworming, and vet records so your own vet can verify all details independently.",
  },
  {
    q: "Do you provide pickup support in Lucknow?",
    a: "Yes. We coordinate pickup and local handoff support across major Lucknow zones.",
  },
  {
    q: "What happens after I bring the puppy home?",
    a: "We guide first-week care, basic feeding routine, and settling tips so the transition is smoother.",
  },
] as const;

export function FigmaFaq() {
  const [question, setQuestion] = useState("");

  const whatsappHref = useMemo(() => {
    const text = question.trim()
      ? `Hi, I have a question: ${question.trim()}`
      : "Hi, I have a question about your puppies.";
    return `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
  }, [question]);

  const handleAskOnWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="faq" className="border-y border-border-soft bg-bg-section px-0 py-16 sm:py-20">
      <div className="container-home">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border-soft/70 bg-white/70 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] sm:p-8">
          <h2 className="text-h2 text-text-primary">FAQs</h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            Quick answers to common questions before you reserve.
          </p>

          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-xl border border-border-soft bg-white/80 p-4 text-sm text-text-secondary"
              >
                <summary className="cursor-pointer list-none font-semibold text-text-primary">
                  {item.q}
                </summary>
                <p className="mt-2 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>

          <form onSubmit={handleAskOnWhatsApp} className="mt-6 space-y-2">
            <label htmlFor="faq-question" className="block text-xs font-semibold text-text-secondary">
              Ask your own question
            </label>
            <textarea
              id="faq-question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={3}
              placeholder="Type your question here..."
              className="w-full rounded-xl border border-border-soft bg-white px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/70 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition hover:bg-orange-500"
            >
              Send question on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
