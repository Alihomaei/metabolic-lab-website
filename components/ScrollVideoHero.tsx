"use client";

/**
 * ScrollVideoHero - full-bleed, scroll-scrubbed video hero.
 *
 * How it works
 * - Outer section is 180vh tall; the inner wrapper is `sticky top-0 h-svh`,
 *   so the hero pins while the user scrolls through the outer container.
 * - Scroll progress through the outer container (0..1) is mapped to
 *   `video.currentTime`. The video is NEVER played - only seeked. The clip
 *   is re-encoded all-intra (every frame a keyframe) so seeks are exact.
 * - Progressive enhancement: SSR/no-JS renders the static poster + headline.
 *   Scrubbing activates only on JS + fine pointer + >=768px + motion OK.
 *
 * Tuning
 * - Pin length: change PIN_HEIGHT ("180vh"). Bigger = slower scrub.
 * - Swap clips: replace files in /public/media (hero-scrub.mp4,
 *   hero-scrub-mobile.mp4, hero-poster.jpg) - keep the all-keyframe encode.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

const PIN_HEIGHT = "180vh"; // scroll distance for the full clip
const FPS = 30; // frame rate of the source clip (used to quantize seeks)
const POSTER = "/media/hero-poster.jpg";
const SRC_DESKTOP = "/media/hero-scrub.mp4";
const SRC_SMALL = "/media/hero-scrub-mobile.mp4";

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ScrollVideoHero() {
  const outerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const cueRef = useRef<HTMLParagraphElement | null>(null);

  // false on SSR / no-JS / reduced-motion / touch / <md - static poster hero.
  const [enhanced, setEnhanced] = useState(false);
  const [src, setSrc] = useState<string | null>(null);

  // Decide mode from media queries; re-decide live if they change.
  useEffect(() => {
    const queries = [
      window.matchMedia("(prefers-reduced-motion: reduce)"),
      window.matchMedia("(min-width: 768px)"),
      window.matchMedia("(pointer: fine)"),
    ];
    const decide = () => {
      const [reduce, wide, fine] = queries.map((q) => q.matches);
      const on = !reduce && wide && fine;
      setEnhanced(on);
      setSrc(on ? (window.innerWidth >= 1024 ? SRC_DESKTOP : SRC_SMALL) : null);
    };
    decide();
    queries.forEach((q) => q.addEventListener("change", decide));
    return () => queries.forEach((q) => q.removeEventListener("change", decide));
  }, []);

  // Scrub loop: scroll -> target progress -> rAF-smoothed currentTime seeks.
  useEffect(() => {
    if (!enhanced) return;
    const outer = outerRef.current;
    const video = videoRef.current;
    if (!outer || !video) return;

    let raf = 0;
    let ticking = false;
    let pos = -1; // smoothed progress (-1 = uninitialized)
    let lastFrame = -1;

    const targetProgress = () => {
      const rect = outer.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      if (range <= 0) return 0;
      return Math.min(1, Math.max(0, -rect.top / range));
    };

    const paint = (p: number) => {
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (cueRef.current) cueRef.current.style.opacity = p > 0.04 ? "0" : "1";
      if (video.readyState >= 1 && Number.isFinite(video.duration)) {
        // Quantize to source frames so we never issue redundant seeks.
        const frame = Math.round(p * video.duration * FPS);
        if (frame !== lastFrame) {
          lastFrame = frame;
          video.currentTime = Math.min(video.duration, frame / FPS);
        }
      }
    };

    const loop = () => {
      const t = targetProgress();
      pos = pos < 0 ? t : pos + (t - pos) * 0.22; // ease toward target
      if (Math.abs(t - pos) < 0.0005) {
        pos = t;
        paint(pos);
        ticking = false;
        return; // settled - stop the loop until the next scroll
      }
      paint(pos);
      raf = requestAnimationFrame(loop);
    };

    const kick = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const onMeta = () => {
      lastFrame = -1;
      kick(); // sync frame to current scroll (e.g. reload mid-hero)
    };

    video.addEventListener("loadedmetadata", onMeta);
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    kick();

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [enhanced, src]);

  return (
    <section
      ref={outerRef}
      className="hero-pin-outer relative"
      style={enhanced ? { height: PIN_HEIGHT } : undefined}
    >
      <div
        className={`${
          enhanced ? "sticky top-0 h-svh" : "relative min-h-svh"
        } hero-dark overflow-hidden border-b border-line bg-ink`}
      >
        {/* Media layer (decorative) */}
        {enhanced && src ? (
          <video
            ref={videoRef}
            src={src}
            poster={POSTER}
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={POSTER}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Scrim - left-weighted so the left-third text keeps WCAG AA over any frame */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.62) 38%, rgba(15,15,15,0.28) 68%, rgba(15,15,15,0.15) 100%)",
          }}
        />

        {/* Overlay content - left third, vertically centered; SSR'd, keyboard-reachable */}
        <div className="relative z-10 mx-auto flex h-full min-h-svh max-w-7xl flex-col justify-center px-5 py-28 sm:px-8">
          {/* shifted left by 12.5vw, clamped so it never leaves the viewport */}
          <div className="w-full md:max-w-[33vw] md:ml-[max(-12.5vw,(80rem-100vw)/2)]">
            <p className="flex items-center gap-3 text-[1.08rem] font-semibold uppercase tracking-[0.16em] text-white/85">
              <span className="inline-block h-px w-10 bg-crimson" aria-hidden="true" />
              {site.department} &middot; {site.institution}
            </p>
            <h1
              className="display mt-6 text-[clamp(3.375rem,6vw,6rem)]"
              style={{ color: "#ffffff" }}
            >
              Advancing
              <br />
              metabolic surgery
              <br />
              science.
            </h1>
            <p className="mt-8 max-w-xl text-[1.69rem] leading-relaxed text-white/85">
              {site.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/research"
                className="btn btn-primary ring-1 ring-white/25"
                style={{ fontSize: "1.275rem" }}
              >
                Explore our research <Arrow />
              </Link>
              <Link
                href="/contact"
                className="btn btn-invert"
                style={{ fontSize: "1.275rem" }}
              >
                Join the lab
              </Link>
            </div>
          </div>
        </div>

        {/* Scrub affordances (decorative, enhanced mode only) */}
        {enhanced && (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 z-10 h-[2px] bg-white/15"
            >
              <div
                ref={barRef}
                className="h-full w-full origin-left bg-crimson"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
            <p
              ref={cueRef}
              aria-hidden="true"
              className="absolute bottom-6 right-5 z-10 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70 transition-opacity duration-500 sm:right-8"
            >
              Scroll
            </p>
          </>
        )}
      </div>
    </section>
  );
}
