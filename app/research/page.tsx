import type { Metadata } from "next";
import { projectCategories } from "@/data/research";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Projects grouped into basic science, clinical, and AI research in metabolic and gastrointestinal surgery.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      {/* page header */}
      <header className="grid gap-8 lg:grid-cols-12 py-16 sm:py-20 border-b border-ink">
        <div className="lg:col-span-8">
          <p className="kicker kicker-crimson">01 · What we study</p>
          <h1 className="display display-page mt-5">Research</h1>
        </div>
        <p className="lg:col-span-4 self-end text-base leading-relaxed text-slate">
          Our projects span three areas: basic science, clinical, and AI.
        </p>
      </header>

      {/* categories */}
      <div>
        {projectCategories.map((category, ci) => (
          <section key={category.slug} className="border-b border-ink">
            <div id={category.slug} className="scroll-mt-28" />
            {/* category header */}
            <Reveal as="div" className="grid gap-6 lg:grid-cols-12 pt-14 sm:pt-20">
              <div className="lg:col-span-4">
                <span className="section-index text-sm">
                  {String(ci + 1).padStart(2, "0")}
                </span>
                <p className="kicker kicker-crimson mt-3">{category.kicker}</p>
                <h2 className="display display-section mt-2">{category.title}</h2>
              </div>
              <p className="lg:col-span-8 self-end text-lg leading-relaxed text-body max-w-2xl">
                {category.intro}
              </p>
            </Reveal>

            {/* areas within the category */}
            <div className="pb-6 sm:pb-10">
              {category.areas.map((area) => (
                <Reveal key={area.slug} as="div">
                  <div id={area.slug} className="scroll-mt-28" />
                  <div className="grid gap-6 lg:grid-cols-12 py-12 sm:py-14 border-t border-line">
                    <div className="lg:col-span-4">
                      <h3 className="display text-2xl sm:text-3xl font-bold text-ink">
                        {area.title}
                      </h3>
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
          </section>
        ))}
      </div>
    </div>
  );
}
