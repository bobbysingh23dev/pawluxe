"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Answers = {
  home: "apartment" | "house" | null;
  activity: "low" | "medium" | "high" | null;
  size: "small" | "medium" | "large" | null;
  budget: "under45" | "45to90" | "90plus" | null;
  kids: "yes" | "no" | null;
  experience: "first" | "experienced" | null;
};

const initialAnswers: Answers = {
  home: null,
  activity: null,
  size: null,
  budget: null,
  kids: null,
  experience: null,
};

type Match = {
  title: string;
  slug: string;
  why: string;
};

function scoreMatches(answers: Answers): Match[] {
  const all: Array<Match & { score: number }> = [
    {
      title: "Pug",
      slug: "pug-puppies-companion",
      why: "Compact size and apartment-friendly temperament.",
      score: 0,
    },
    {
      title: "French Bulldog",
      slug: "french-bulldog-puppies-pedigree",
      why: "Low-space friendly with premium care profile.",
      score: 0,
    },
    {
      title: "Labrador Retriever",
      slug: "labrador-puppies-companion",
      why: "Excellent for active homes and family routines.",
      score: 0,
    },
    {
      title: "Golden Retriever",
      slug: "golden-retriever-puppies-pedigree",
      why: "Balanced temperament for family-focused households.",
      score: 0,
    },
    {
      title: "Bernedoodle",
      slug: "bernedoodle-puppies-pedigree",
      why: "Premium option with low-shedding coat preference.",
      score: 0,
    },
  ];

  for (const item of all) {
    if (answers.home === "apartment") {
      if (item.title === "Pug" || item.title === "French Bulldog") item.score += 3;
      if (item.title === "Labrador Retriever") item.score += 1;
    }
    if (answers.home === "house") {
      if (item.title === "Labrador Retriever" || item.title === "Golden Retriever")
        item.score += 3;
    }

    if (answers.activity === "low") {
      if (item.title === "Pug" || item.title === "French Bulldog") item.score += 3;
    }
    if (answers.activity === "medium") {
      if (item.title === "Golden Retriever" || item.title === "Pug") item.score += 2;
      if (item.title === "Labrador Retriever") item.score += 1;
    }
    if (answers.activity === "high") {
      if (item.title === "Labrador Retriever" || item.title === "Golden Retriever")
        item.score += 3;
    }

    if (answers.size === "small") {
      if (item.title === "Pug" || item.title === "French Bulldog") item.score += 3;
    }
    if (answers.size === "medium") {
      if (item.title === "Labrador Retriever" || item.title === "Golden Retriever")
        item.score += 2;
    }
    if (answers.size === "large") {
      if (item.title === "Golden Retriever" || item.title === "Bernedoodle")
        item.score += 2;
    }

    if (answers.budget === "under45") {
      if (item.title === "Pug" || item.title === "Labrador Retriever") item.score += 3;
    }
    if (answers.budget === "45to90") {
      if (item.title === "Golden Retriever" || item.title === "Labrador Retriever")
        item.score += 2;
    }
    if (answers.budget === "90plus") {
      if (item.title === "French Bulldog" || item.title === "Bernedoodle") item.score += 3;
    }

    if (answers.kids === "yes") {
      if (item.title === "Labrador Retriever" || item.title === "Golden Retriever")
        item.score += 3;
    }
    if (answers.kids === "no") {
      if (item.title === "French Bulldog" || item.title === "Pug") item.score += 2;
    }

    if (answers.experience === "first") {
      if (item.title === "Labrador Retriever" || item.title === "Golden Retriever")
        item.score += 2;
      if (item.title === "Pug") item.score += 1;
    }
    if (answers.experience === "experienced") {
      if (item.title === "Bernedoodle" || item.title === "French Bulldog") item.score += 2;
    }
  }

  return all.sort((a, b) => b.score - a.score).slice(0, 3);
}

export function FigmaDogMatchGame() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [showResults, setShowResults] = useState(false);
  const [open, setOpen] = useState(false);

  const canSubmit = Object.values(answers).every(Boolean);
  const matches = useMemo(() => scoreMatches(answers), [answers]);

  function resetQuiz() {
    setAnswers(initialAnswers);
    setShowResults(false);
  }

  return (
    <section className="bg-[#fffaf3] px-0 py-10 sm:py-12">
      <div className="container-home">
        <div className="rounded-3xl border border-[#f4d2a3] bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Dog Match Game</p>
          <h2 className="mt-2 text-h2 text-text-primary">Confused Which Dog To Buy?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-text-secondary">
            Tap below and answer a few fun questions. We will suggest your top 3 best-matched breeds.
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            Start Quiz
          </button>
        </div>

        {open ? (
          <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Dog Match Quiz
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-text-primary">Find Your Top 3 Matches</h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    resetQuiz();
                  }}
                  className="rounded-full border border-border-soft px-3 py-1 text-sm font-bold text-text-primary"
                >
                  ✕
                </button>
              </div>

              {!showResults ? (
                <>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-border-soft p-4">
                      <p className="text-sm font-bold text-text-primary">1) Home type</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[["Apartment", "apartment"], ["House", "house"]].map(([label, value]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setAnswers((s) => ({ ...s, home: value as Answers["home"] }))}
                            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                              answers.home === value ? "bg-primary text-white" : "bg-bg-section text-text-primary"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border-soft p-4">
                      <p className="text-sm font-bold text-text-primary">2) Activity level</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[["Low", "low"], ["Medium", "medium"], ["High", "high"]].map(([label, value]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setAnswers((s) => ({ ...s, activity: value as Answers["activity"] }))}
                            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                              answers.activity === value ? "bg-primary text-white" : "bg-bg-section text-text-primary"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border-soft p-4">
                      <p className="text-sm font-bold text-text-primary">3) Preferred size</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[["Small", "small"], ["Medium", "medium"], ["Large", "large"]].map(([label, value]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setAnswers((s) => ({ ...s, size: value as Answers["size"] }))}
                            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                              answers.size === value ? "bg-primary text-white" : "bg-bg-section text-text-primary"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border-soft p-4">
                      <p className="text-sm font-bold text-text-primary">4) Budget range</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[["Under ₹45k", "under45"], ["₹45k - ₹90k", "45to90"], ["₹90k+", "90plus"]].map(
                          ([label, value]) => (
                            <button
                              key={value}
                              type="button"
                              onClick={() => setAnswers((s) => ({ ...s, budget: value as Answers["budget"] }))}
                              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                                answers.budget === value ? "bg-primary text-white" : "bg-bg-section text-text-primary"
                              }`}
                            >
                              {label}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border-soft p-4">
                      <p className="text-sm font-bold text-text-primary">5) Kids at home?</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[["Yes", "yes"], ["No", "no"]].map(([label, value]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setAnswers((s) => ({ ...s, kids: value as Answers["kids"] }))}
                            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                              answers.kids === value ? "bg-primary text-white" : "bg-bg-section text-text-primary"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border-soft p-4">
                      <p className="text-sm font-bold text-text-primary">6) Experience level</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[["First-time owner", "first"], ["Experienced", "experienced"]].map(
                          ([label, value]) => (
                            <button
                              key={value}
                              type="button"
                              onClick={() =>
                                setAnswers((s) => ({ ...s, experience: value as Answers["experience"] }))
                              }
                              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                                answers.experience === value
                                  ? "bg-primary text-white"
                                  : "bg-bg-section text-text-primary"
                              }`}
                            >
                              {label}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      disabled={!canSubmit}
                      onClick={() => setShowResults(true)}
                      className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Show My Top 3 Matches
                    </button>
                  </div>
                </>
              ) : (
                <div className="mt-8">
                  <div className="grid gap-4 md:grid-cols-3">
                    {matches.map((match) => (
                      <article key={match.slug} className="rounded-2xl border border-[#f8d7a6] bg-[#fff7ed] p-5">
                        <p className="text-lg font-black text-text-primary">{match.title}</p>
                        <p className="mt-2 text-sm text-text-secondary">{match.why}</p>
                        <Link
                          href={`/dogs/${match.slug}`}
                          onClick={() => setOpen(false)}
                          className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
                        >
                          View Match →
                        </Link>
                      </article>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="rounded-full border border-border-soft bg-white px-5 py-2 text-sm font-bold text-text-primary"
                    >
                      Play Again
                    </button>
                    <a
                      href="https://wa.me/917054611731?text=Hi%2C%20I%20just%20finished%20the%20dog%20match%20quiz.%20Please%20help%20me%20choose."
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#25D366] px-5 py-2 text-sm font-bold text-white"
                    >
                      Discuss on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
