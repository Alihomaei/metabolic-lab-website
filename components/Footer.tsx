import Link from "next/link";
import { site } from "@/data/site";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const year = new Date().getFullYear();

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

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.labName}, {site.medicalSchool}.
          </p>
          <p>
            Official {site.medicalSchool} research laboratory. Logo usage
            subject to HMS Identity Guide approval.
          </p>
        </div>
      </div>
    </footer>
  );
}
