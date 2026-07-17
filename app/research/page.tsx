import type { Metadata } from "next";
import { research } from "@/data/research";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Research",
  description: "Research areas and ongoing projects in the lab.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      {/* page header */}
      <header className="grid gap-8 lg:grid-cols-12 py-16 sm:py-20 border-b border-ink">
        <div className="lg:col-span-8">
          <p className="kicker kicker-crimson">01 — What we study</p>
          <h1 className="display display-page mt-5">Research</h1>
        </div>
        <p className="lg:col-span-4 self-end text-base leading-relaxed text-slate">
          Our work spans mechanistic, translational, and outcomes research in
          metabolic and gastrointestinal surgery.
        </p>
      </header>

      {/* numbered areas */}
      <div>
        {research.map((area, i) => (
          <Reveal key={area.slug} as="section">
            <div id={area.slug} className="scroll-mt-28" />
            <div className="grid gap-6 lg:grid-cols-12 py-14 sm:py-20 border-b border-line">
              <div className="lg:col-span-4">
                <span className="section-index text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display text-3xl sm:text-4xl font-bold text-ink mt-3">
                  {area.title}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-5">
                {area.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-lg leading-relaxed text-body max-w-2xl"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
