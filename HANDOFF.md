# Handoff — Laboratory for Surgical and Metabolic Research website

Paste everything below the line into a new session to continue.

---

You are picking up an existing, working Next.js site. Do NOT rebuild it. Continue from the state described here.

## Project
- Location: `/Users/ali/Lab/Dr.Tavakkoli/website`
- Stack: Next.js 15 (App Router, Webpack), React, Tailwind CSS 4, TypeScript. Static export: `output: "export"`, `trailingSlash: true`, `images.unoptimized` in `next.config.mjs`.
- Fonts: self-hosted Inter via `@fontsource-variable/inter` (family `"Inter Variable"`). Do NOT add `next/font/google` — the build sandbox can't reach Google Fonts.
- Run it: `cd /Users/ali/Lab/Dr.Tavakkoli/website && npm install && npm run dev` → http://localhost:3000. Run each shell command on its own line; do NOT paste a command with an inline `# comment` (bracketed paste mangles it — e.g. `next dev #` was read as a directory path).

## Design system (`app/globals.css`) — "Clean Modern / Swiss"
- Single crimson accent `#a51c30` (dark `#7f1521`); ink `#0f0f0f`, body `#1e1e1e`, slate `#565656`, line `#e5e5e5`, paper `#fafafa`.
- Utilities: `.display` / `.display-hero` / `.display-page` / `.display-section`, `.kicker` / `.kicker-crimson`, `.num`, `.section-index`, `.btn` / `.btn-primary` / `.btn-ghost` / `.btn-invert`, `.arrow-link`, `.prose-links` / `a.body-link`, `.reveal`, plus hero helpers `.hero-dark` and `.hero-pin-outer`.
- Accessibility + `prefers-reduced-motion` already handled globally.

## What is DONE
### Scroll-scrub video hero — `components/ScrollVideoHero.tsx` (client)
- Outer section `height: 300vh` (const `PIN_HEIGHT`); inner wrapper `sticky top-0 h-svh` pins the hero.
- Scroll progress (0→1) maps to `video.currentTime` (never `.play()`), rAF-smoothed, quantized to source frames.
- Assets in `public/media/`: `hero-scrub.mp4` (1920×1080 desktop, all-intra), `hero-scrub-mobile.mp4` (1280×720), `hero-poster.jpg`, plus original `hero.mp4`. Both scrub files are all-keyframe (every frame an I-frame), audio stripped, faststart.
- Reduced-motion / touch / viewport <768px → static poster hero, no pin, no scrub. Overlay text is SSR'd and accessible; `<video>` is `aria-hidden`.
- Layout: overlay block sits in the LEFT THIRD (`md:max-w-[33vw]`), vertically centered, shifted left ~12.5vw via `md:ml-[max(-12.5vw,(80rem-100vw)/2)]`. Headline `clamp(3.375rem,6vw,6rem)`, tagline `1.69rem`, CTA buttons `1.275rem`. Left-weighted scrim keeps WCAG AA over the video.
- Tuning: change `PIN_HEIGHT` for scrub speed (bigger = slower). Swap the clip by replacing files in `public/media/` — keep the all-keyframe encode (ffmpeg command is in the component header comment).

### Homepage — `app/page.tsx`
`<ScrollVideoHero />` → meta band (PI / Location / Focus) → Stats (`bg-ink`) → Research (numbered rows) → News.

### Real content (sourced from https://surgery.bwh.harvard.edu/)
- `data/site.ts`: `labName` = "Laboratory for Surgical and Metabolic Research" (NOT "Tavakkoli Lab"); `shortName` = "Surgical & Metabolic Research"; PI Ali Tavakkoli, MD (Associate Professor of Surgery, HMS); `institution` Brigham and Women's Hospital; `healthSystem` Mass General Brigham; `medicalSchool` Harvard Medical School; twitter `@bwhsurgmetab`. Contact email/phone are still PLACEHOLDER — confirm the real lab inbox/number.
- `data/team.ts`: PIs = Ali Tavakkoli + Eric G. Sheu (James Yoo removed as PI). Postdocs = Yingjia Chen, Vasundhara Mathur, Weronika Stupalkowska, Ali Homaei (MD, MBA — new). Alumni lead with Thomas Shin (former MIS/Bariatric fellow → Assistant Professor & bariatric surgeon, UVA Health) and Thomas J. Martin (former research resident, 2 years), then the full historical fellows list.
- `data/research.ts`: 3 areas — "Gut–Liver Signaling & Diabetes Remission", "Surgical Immunometabolism", "Metabolic Surgery & Cancer".
- `data/news.ts`: Brigham On A Mission immune-cell feature (2022-02-11, has link), Department of Surgery Annual Report (link), NIH R01 DK126855.

### Logos + headshots (graceful, no broken images)
- `components/BrandLogo.tsx`: renders an `<img>`, falls back to text if the file is missing.
- Header uses `/brand/lab-logo.png` (fallback = full lab name). Footer co-brand uses `/brand/mass-general-brigham.png` + `/brand/harvard-medical-school.png` (fallback = text).
- `components/Avatar.tsx`: shows the headshot, falls back to initials if the file is missing/broken.
- `data/team.ts` photo paths: `/team/ali-tavakkoli.jpg`, `/team/eric-sheu.jpg`, `/team/yingjia-chen.jpg`, `/team/vasundhara-mathur.jpg`, `/team/weronika-stupalkowska.jpg`, `/team/ali-homaei.jpg`.
- `scripts/pull-photos.sh`: run locally (`bash scripts/pull-photos.sh`) to `curl` the 5 headshots + lab banner logo from the old BWH site into `public/team/` and `public/brand/` (uses `curl` + `sips`, both macOS built-ins).

## OPEN ITEMS (do these)
1. `bash scripts/pull-photos.sh` — pulls the 5 headshots + lab logo. NOT yet run.
2. Add 3 files the old site doesn't have: `public/team/ali-homaei.jpg` (Ali's own headshot), `public/brand/mass-general-brigham.png` and `public/brand/harvard-medical-school.png` (the transparent institutional PNGs Ali already has).
3. Push: local `main` is ONE commit ahead of GitHub and unpushed (last commit `0f06ffa`). Remote `origin` is HTTPS `https://github.com/Alihomaei/metabolic-lab-website.git`. Run `git push` (an earlier try failed as `push~` from a stray tilde).
4. Restart dev cleanly if the `undefined (reading 'call')` webpack error appears: `rm -rf .next` then `npm run dev`.

## Constraints / gotchas
- The project folder is a mounted folder; a sandboxed shell CANNOT delete files in it (`unlink` blocked). Therefore: (a) do all git ops locally on the Mac — if git says a lock file exists, run `find .git -name '*.lock' -delete` locally; (b) to VERIFY a build, copy to a NON-mounted dir first (in-place `next build`/export fails because export unlinks):
  ```
  DST=$HOME/labverify; rm -rf "$DST"; mkdir -p "$DST"
  (cd /Users/ali/Lab/Dr.Tavakkoli/website && tar cf - --exclude=./node_modules --exclude=./.next --exclude=./out --exclude=./.git --exclude=./package-lock.json .) | (cd "$DST" && tar xf -)
  cd "$DST" && npm install --no-audit --no-fund --prefer-offline && npx next build   # must exit 0
  ```
- Assistant limits: cannot fetch web images or write chat-attached images to disk — image files come from the user locally or via `scripts/pull-photos.sh`. Cannot use the user's SSH keys — pushes happen locally.
- Keep static-export compatible (client components only for interactivity; no server APIs; no `next/image` loader needs). One crimson accent, Swiss system. Keep self-hosted Inter. Don't regress the other pages.

## Current build status
Passes clean (`next build` exit 0), all 9 pages static, header/footer show the correct lab name (0 "Tavakkoli Lab" in output), all 6 headshot paths + the logo are wired.

## My next task
<describe what you want to do next>
