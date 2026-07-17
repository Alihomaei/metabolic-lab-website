# Handoff prompt — scroll-scrub video hero (Tavakkoli Lab site)

Copy everything below the line into a new session.

---

You are picking up an existing, working project. Do NOT rebuild the site. Your one job: replace the current homepage hero with a **full-bleed, scroll-scrub video hero** and verify it.

## Project state (already built and passing)

- Location: `/Users/ali/Lab/Dr.Tavakkoli/website`
- Stack: Next.js 15 (App Router), Tailwind CSS 4, TypeScript, **static export** (`output: "export"` in `next.config.mjs`, `trailingSlash: true`, `images.unoptimized`).
- Fonts: self-hosted **Inter** via `@fontsource-variable/inter` (font-family `"Inter Variable"`). Do NOT switch to `next/font/google` — the build sandbox cannot reach Google Fonts.
- Design language: "Clean Modern / Swiss" — single crimson accent, bold Inter display type, strict grid, hairline rules, generous whitespace. Design tokens and utility classes live in `app/globals.css`.
- Run it: `cd /Users/ali/Lab/Dr.Tavakkoli/website && npm install && npm run dev` → http://localhost:3000

### Design tokens / classes to reuse (from `app/globals.css`)
- Colors: crimson `#a51c30`, crimson-dark `#7f1521`, ink `#0f0f0f`, body `#1e1e1e`, slate `#565656`, line `#e5e5e5`, paper `#fafafa`.
- Type utilities: `.display`, `.display-hero`, `.display-page`, `.display-section`, `.kicker`, `.kicker-crimson`, `.num`, `.section-index`.
- Components: `.btn` / `.btn-primary` / `.btn-ghost`, `.arrow-link`, `.prose-links` / `a.body-link`, `.reveal` (scroll reveal, already reduced-motion aware).
- The current hero markup is the first `<section>` in `app/page.tsx`. Keep the Stats, Research, and News sections that follow it — only the hero changes.

## Assets already staged (in `public/media/`)
- `hero.mp4` — the source clip: **1920×1080, ~5.17s, 155 frames @ 30fps, H.264, has an AAC audio track, 1.8MB**.
- `hero-poster.jpg` — first-frame poster (fallback + initial paint + reduced-motion still).

## Step 1 — Pre-process the video for smooth scrubbing (required)

Scrubbing by setting `video.currentTime` stutters unless every frame is a keyframe, because seeks snap to keyframes. Re-encode to **all-intra (every frame a keyframe)** and drop the audio (scrubbing has no audio). ffmpeg is available in the sandbox.

```bash
cd /sessions/<session>/mnt/website/public/media   # translate to your session path

# Desktop: all-keyframe, no audio, faststart
ffmpeg -y -i hero.mp4 -an \
  -c:v libx264 -x264-params "keyint=1:min-keyint=1:scenecut=0" \
  -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart hero-scrub.mp4

# Mobile: 1280-wide variant (smaller, same all-keyframe treatment)
ffmpeg -y -i hero.mp4 -an -vf "scale=1280:-2" \
  -c:v libx264 -x264-params "keyint=1:min-keyint=1:scenecut=0" \
  -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart hero-scrub-mobile.mp4
```

If scrubbing is still not buttery on desktop Safari, fall back to an **image-sequence + `<canvas>`** approach (Apple-style): `ffmpeg -i hero.mp4 -vf fps=30 frames/f_%03d.jpg` (155 frames), preload them, and draw the frame for the current scroll progress. Recommend the all-keyframe MP4 first; only go to canvas if needed.

## Step 2 — Build the hero component

Create `components/ScrollVideoHero.tsx` (`"use client"`):

- Structure: a tall outer container (e.g. `height: 300vh`) whose inner wrapper is `position: sticky; top: 0; height: 100vh; overflow: hidden`. This is what makes the hero "pin" (the scroll-stop) while the rest scrolls.
- Map scroll progress through the outer container (0→1) to `video.currentTime = progress * video.duration`. Compute progress from `getBoundingClientRect()` on scroll; smooth with `requestAnimationFrame`; never call `.play()` — keep it paused and only seek.
- Video element: `muted`, `playsInline`, `preload="auto"`, `poster="/media/hero-poster.jpg"`, `aria-hidden="true"` (decorative), object-cover, full-bleed. Use `hero-scrub.mp4` (and the mobile variant via a `<source media>` or JS swap).
- Overlay: a dark scrim (e.g. `background: linear-gradient(...)` or `rgba(15,15,15,.55)`) behind the text so it hits **WCAG AA contrast over the video**. On top: `.kicker.kicker-crimson` label, an `<h1>` using `.display.display-hero` in white, the subhead, and the two CTAs (`Explore our research` → `/research` with arrow, `Join the lab` → `/contact`). This real DOM text is the accessible content; the video is decorative.

## Step 3 — Accessibility / HMS compliance (do not skip)

The site is built against HMS + WCAG 2.1 AA. Requirements:
- **`prefers-reduced-motion: reduce`** → NO scrub, NO pin, NO motion. Render a static full-bleed `hero-poster.jpg` with the same headline overlay. Detect via `window.matchMedia` and also guard in CSS.
- **No-JS / load fallback**: the poster image + headline must be visible without the scroll effect (SSR the overlay text; the video/scrub is progressive enhancement).
- **Muted always** (no autoplay audio). No flashing/strobing.
- **Keyboard**: CTAs must be focusable and reachable; the pinned section must NOT trap focus or scrolling. Verify tab order reaches the CTAs and then the nav/rest of page.
- Video is decorative → `aria-hidden="true"`; do not add captions requirement, but confirm it carries no informational audio (it's muted). If the clip conveys meaning, add a visually-hidden text description.
- Keep the existing sticky `Header` working above the hero — check `z-index` layering (header has a crimson top bar and is `sticky top-0 z-40`; the hero sticky wrapper should sit below it, or make the header transparent over the hero with adjusted contrast — your call, keep AA contrast either way).

## Step 4 — Mobile behavior

`currentTime` scrubbing is janky on iOS Safari. On touch / viewports below `md` (768px): fall back to EITHER the static poster hero OR a simple muted `autoplay loop playsinline` of `hero-scrub-mobile.mp4` (no pin, no scrub). Pick the poster fallback if you want maximum HMS-safety. Gate with a matchMedia/width check.

## Step 5 — Integrate

In `app/page.tsx`, replace the current first `<section>` (the hero) with `<ScrollVideoHero />`. Leave the Stats (`bg-ink`), Research (numbered rows), and News sections untouched so they scroll up under the released hero. Keep the asymmetric PI/Location/Focus meta list — either fold it into the overlay or drop it into a thin band right after the hero; your judgment, keep it Swiss and uncluttered.

## Step 6 — Verify (required)

The mounted folder blocks `unlink` during `next export`, so build in a NON-mounted dir:
```bash
DST=$HOME/labverify; rm -rf "$DST"; mkdir -p "$DST"
cp -r /sessions/<session>/mnt/website/. "$DST"/
cd "$DST" && rm -rf node_modules .next out package-lock.json
npm install --no-audit --no-fund --prefer-offline && npx next build   # must exit 0
```
Then a dev smoke test (curl `/` for 200 + headline present). Also manually confirm: scrub is smooth on desktop, reduced-motion shows the static poster with no motion, CTAs are keyboard-reachable, and text contrast passes AA over the scrim. Use the TaskCreate/TaskUpdate task list and finish with this verification step.

## Constraints recap
- Keep static-export compatible (client component only; no server APIs, no `next/image` loader needs).
- Keep self-hosted Inter; don't add Google Fonts.
- One crimson accent; match the existing Swiss system.
- Don't regress the other pages.

Deliverable: updated `app/page.tsx`, new `components/ScrollVideoHero.tsx`, the processed `public/media/hero-scrub*.mp4`, a passing build, and a one-line note on how to tune the pin length (the `300vh` value) and where to swap the clip later.
