import type { Metadata } from "next";
import { publications } from "@/data/publications";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed publications from the lab.",
};

export default function PublicationsPage() {
  const byYear = new Map<number, typeof publications>();
  for (const pub of publications) {
    const list = byYear.get(pub.year) ?? [];
    list.push(pub);
    byYear.set(pub.year, list);
  }
  const years = [...byYear.keys()].sort((a, b) => b - a);

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <header className="grid gap-8 lg:grid-cols-12 py-16 sm:py-20 border-b border-ink">
        <div className="lg:col-span-8">
          <p className="kicker kicker-crimson">02 · Selected work</p>
          <h1 className="display display-page mt-5">Publications</h1>
        </div>
        <p className="lg:col-span-4 self-end text-base leading-relaxed text-slate prose-links">
          Peer-reviewed research. For a complete list, see the lab&rsquo;s{" "}
          {site.links.googleScholar ? (
            <a className="body-link" href={site.links.googleScholar} target="_blank" rel="noopener noreferrer">
              Google Scholar
            </a>
          ) : (
            "Google Scholar"
          )}{" "}
          or{" "}
          {site.links.pubmed ? (
            <a className="body-link" href={site.links.pubmed} target="_blank" rel="noopener noreferrer">
              PubMed
            </a>
          ) : (
            "PubMed"
          )}{" "}
          profile.
        </p>
      </header>

      <div>
        {years.map((year) => (
          <section key={year} className="grid gap-6 lg:grid-cols-12 py-12 border-b border-line">
            <div className="lg:col-span-3">
              <h2 className="num display text-4xl sm:text-5xl font-extrabold text-ink sticky top-28">
                {year}
              </h2>
            </div>
            <ul className="lg:col-span-9 divide-y divide-line">
              {byYear.get(year)!.map((pub, i) => (
                <Reveal as="li" key={i} className="prose-links py-6 first:pt-0">
                  <p className="text-lg font-semibold leading-snug text-ink">
                    {pub.link ? (
                      <a
                        className="body-link"
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                    {pub.featured && (
                      <span className="ml-3 align-middle border border-crimson px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-crimson">
                        Featured
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-sm text-slate">{pub.authors}</p>
                  <p className="text-sm italic text-slate">
                    {pub.venue}, {pub.year}
                  </p>
                </Reveal>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
