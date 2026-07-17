import Link from "next/link";
import { site } from "@/data/site";
import BrandLogo from "@/components/BrandLogo";

// Icon buttons for the social platforms (rendered only when a URL is set).
const SOCIAL_ICONS: Record<string, { label: string; path: React.ReactNode }> = {
  twitter: {
    label: "X (Twitter)",
    path: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    ),
  },
  instagram: {
    label: "Instagram",
    path: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.64 3.64 0 0 0-.88-1.35 3.64 3.64 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92Zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08Zm6.95-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0Z" />
    ),
  },
  linkedin: {
    label: "LinkedIn",
    path: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    ),
  },
};

const SCHOLAR_LABELS: Record<string, string> = {
  googleScholar: "Google Scholar",
  pubmed: "PubMed",
};

export default function Footer() {
  const year = new Date().getFullYear();

  // Only render links that actually have a URL set in data/site.ts.
  const socialButtons = Object.entries(site.links)
    .filter(([key, href]) => href && key in SOCIAL_ICONS)
    .map(([key, href]) => ({ key, href, ...SOCIAL_ICONS[key] }));

  const scholarLinks = Object.entries(site.links)
    .filter(([key, href]) => href && key in SCHOLAR_LABELS)
    .map(([key, href]) => ({ href, label: SCHOLAR_LABELS[key] }));

  return (
    <footer className="mt-24 border-t-2 border-ink bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Identity */}
          <div className="lg:col-span-5">
            <p className="display text-2xl font-extrabold text-ink">
              {site.labName}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">
              {site.tagline}
            </p>
            <p className="mt-6 text-sm text-slate">
              {site.department}, {site.institution}
              <br />
              {site.medicalSchool}
            </p>

            {/* Institutional co-brand lockup (falls back to text until files added) */}
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <BrandLogo
                src="/brand/mass-general-brigham.png"
                alt={`${site.healthSystem} logo`}
                className="h-7 w-auto sm:h-8"
                fallback={
                  <span className="text-sm font-semibold text-ink">
                    {site.healthSystem}
                  </span>
                }
              />
              <BrandLogo
                src="/brand/harvard-medical-school.png"
                alt={`${site.medicalSchool} logo`}
                className="h-7 w-auto sm:h-8"
                fallback={
                  <span className="text-sm font-semibold text-ink">
                    {site.medicalSchool}
                  </span>
                }
              />
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="kicker">Contact</p>
            <address className="mt-4 text-sm not-italic text-slate prose-links">
              {site.contact.address.line1}
              <br />
              {site.contact.address.line2}
              <br />
              <a className="body-link mt-2 inline-block" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </address>

            {socialButtons.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {socialButtons.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      {s.path}
                    </svg>
                  </a>
                ))}
              </div>
            )}

            {scholarLinks.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {scholarLinks.map((s) => (
                  <li key={s.href}>
                    <a
                      className="text-sm text-slate hover:text-crimson transition-colors"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Nav */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="kicker">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate hover:text-crimson transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/*
          NOTE (internal, not shown to visitors): official HMS/BWH logo usage is
          subject to HMS Identity Guide approval before deploying the co-brand
          lockup above. Keep that review in mind; do not surface it as page copy.
        */}
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.labName}, {site.medicalSchool}.
          </p>
          <p>Official {site.medicalSchool} research laboratory.</p>
        </div>
      </div>
    </footer>
  );
}
