"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";
import BrandLogo from "@/components/BrandLogo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40">
      {/* thin crimson accent bar */}
      <div className="h-1 bg-crimson" />

      <div className="border-b border-line bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-[72px] items-center justify-between gap-6">
            {/* Official lab logo (falls back to wordmark until the file is added) */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${site.labName} — home`}>
              <BrandLogo
                src="/brand/lab-logo.png"
                alt={site.labName}
                className="h-10 w-auto sm:h-11"
                fallback={
                  <>
                    <span className="display text-lg sm:text-xl font-extrabold tracking-tight text-ink">
                      {site.shortName}
                    </span>
                    <span className="hidden sm:inline-block h-3 w-px bg-line" />
                    <span className="hidden sm:inline kicker">
                      {site.medicalSchool}
                    </span>
                  </>
                }
              />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-7">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`relative text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-ink"
                          : "text-slate hover:text-ink"
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-crimson" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 -mr-2 text-ink"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile nav */}
          {open && (
            <nav id="mobile-nav" aria-label="Primary mobile" className="md:hidden pb-5">
              <ul className="flex flex-col divide-y divide-line border-t border-line">
                {site.nav.map((item, i) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 py-3.5 text-base ${
                        isActive(item.href)
                          ? "text-crimson font-semibold"
                          : "text-ink"
                      }`}
                    >
                      <span className="section-index text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
