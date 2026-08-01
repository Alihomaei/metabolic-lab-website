import Link from "next/link";
import { site } from "@/data/site";
import { research } from "@/data/research";
import { publications } from "@/data/publications";
import { team } from "@/data/team";
import { news } from "@/data/news";
import Reveal from "@/components/Reveal";
import ScrollVideoHero from "@/components/ScrollVideoHero";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HomePage() {
  const latestNews = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const stats = [
    { value: `${research.length}`, label: "Research areas", href: "/research" },
    { value: `${publications.length}+`, label: "Publications", href: "/publications" },
    { value: `${team.length}`, label: "Team members", href: "/team" },
    { value: site.founded, label: "Founded", href: "#about" },
  ];

  return (
    <>
      {/* ================= HERO (scroll-scrub video) ================= */}
      <ScrollVideoHero />

      {/* ================= META BAND ================= */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <dl className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
            <div className="flex items-baseline justify-between gap-6 py-4 sm:py-5 sm:pr-8">
              <dt className="kicker">Principal Investigator</dt>
              <dd className="text-sm font-semibold text-ink text-right">
                {site.pi.name}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-4 sm:py-5 sm:px-8">
              <dt className="kicker">Location</dt>
              <dd className="text-sm font-semibold text-ink text-right">
                {site.contact.address.line2}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-4 sm:py-5 sm:pl-8">
              <dt className="kicker">Focus</dt>
              <dd className="text-sm font-semibold text-ink text-right">
                Metabolic &amp; GI surgery
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ================= LAB INTRO ================= */}
      <section id="about" className="scroll-mt-24 border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <Reveal as="div" className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="kicker kicker-crimson">Who we are</p>
              <h2 className="display display-section mt-4">
                Continuing the Brigham&rsquo;s tradition of surgical metabolic
                research since {site.founded}.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="text-base leading-relaxed text-slate">
                Founded by Dr. Francis D. Moore, our laboratory pioneered the
                study of how surgery reshapes metabolism. Today we work to
                understand the mechanistic underpinnings of bariatric surgery,
                from its anti-diabetic effects to its influence on immunity and
                cancer, and to translate these discoveries into therapies that
                are more effective and less invasive.
              </p>
              <div className="mt-6">
                <Link href="/team" className="arrow-link text-sm">
                  Meet the team <Arrow />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= STATS (each tile links to its page) ================= */}
      <section className="on-dark border-b border-line bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
            {stats.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="group block px-5 py-10 first:pl-0 transition-colors hover:bg-white/[0.06]"
              >
                <div className="num display text-4xl sm:text-5xl font-extrabold text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/60 transition-colors group-hover:text-white">
                  {s.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESEARCH ================= */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker kicker-crimson">What we study</p>
            <h2 className="display display-section mt-4">Research areas</h2>
          </div>
          <Link href="/research" className="arrow-link text-sm">
            View all research <Arrow />
          </Link>
        </div>

        <div className="mt-14 border-t border-ink">
          {research.map((area, i) => (
            <Reveal key={area.slug} as="div">
              <Link
                href={`/research#${area.slug}`}
                className="row-link group grid gap-4 sm:grid-cols-12 items-baseline border-b border-line px-2 py-8 sm:py-10"
              >
                <div className="sm:col-span-1 section-index text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="sm:col-span-5 display text-2xl sm:text-3xl font-bold text-ink group-hover:text-crimson transition-colors">
                  {area.title}
                </h3>
                <p className="sm:col-span-5 text-sm leading-relaxed text-slate">
                  {area.summary}
                </p>
                <div className="sm:col-span-1 flex sm:justify-end text-crimson">
                  <span className="arrow-link">
                    <Arrow />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker kicker-crimson">Latest</p>
              <h2 className="display display-section mt-4">News &amp; updates</h2>
            </div>
            <Link href="/news" className="arrow-link text-sm">
              All news <Arrow />
            </Link>
          </div>

          <div className="mt-14 grid gap-px bg-line sm:grid-cols-3 border border-line">
            {latestNews.map((item) => (
              <Reveal
                key={item.date + item.title}
                as="article"
                className="bg-white p-7 sm:p-8"
              >
                <time
                  dateTime={item.date}
                  className="num text-xs font-semibold uppercase tracking-wider text-crimson"
                >
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <h3 className="mt-4 text-lg font-bold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
