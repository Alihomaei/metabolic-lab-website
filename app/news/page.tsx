import type { Metadata } from "next";
import { news } from "@/data/news";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements and updates from the lab.",
};

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <header className="grid gap-8 lg:grid-cols-12 py-16 sm:py-20 border-b border-ink">
        <div className="lg:col-span-8">
          <p className="kicker kicker-crimson">04 — Updates</p>
          <h1 className="display display-page mt-5">News</h1>
        </div>
        <p className="lg:col-span-4 self-end text-base leading-relaxed text-slate">
          Announcements, grants, publications, and lab milestones.
        </p>
      </header>

      <div>
        {sorted.map((item) => (
          <Reveal key={item.date + item.title} as="article">
            <div className="group grid gap-4 sm:grid-cols-12 items-baseline border-b border-line py-10 prose-links">
              <time
                dateTime={item.date}
                className="num sm:col-span-3 text-sm font-semibold uppercase tracking-wider text-crimson"
              >
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <div className="sm:col-span-9 max-w-2xl">
                <h2 className="display text-2xl font-bold text-ink">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate">
                  {item.body}
                </p>
                {item.link && (
                  <a
                    className="body-link mt-3 inline-block text-sm font-semibold"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more →
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
