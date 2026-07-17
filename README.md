# Tavakkoli Lab Website

Modern lab website for a Harvard Medical School lab, built from scratch with Next.js 15 (App Router), Tailwind CSS 4, and TypeScript. Static export, so it can be hosted anywhere.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site output in ./out
```

## Customize (no code knowledge needed)

All content lives in `data/`:

| File | Controls |
| --- | --- |
| `data/site.ts` | Lab name, PI, department, address, emails, nav |
| `data/research.ts` | Research areas |
| `data/publications.ts` | Publication list (auto-grouped by year) |
| `data/team.ts` | Members and alumni (headshots go in `public/team/`) |
| `data/news.ts` | News items (auto-sorted by date) |

## HMS compliance checklist

Built against the [HMS Identity Guide for websites](https://identityguide.hms.harvard.edu/multimedia/websites):

- **Colors**: Official HMS palette only (Crimson `#A51C30`, Ink `#1E1E1E`, secondary neutrals, accents), defined in `app/globals.css`. Body text is Ink on white/Parchment (WCAG AA contrast).
- **Naming rule**: If your site URL and header do NOT follow the "Lastname Lab" convention, HMS requires your *department's* branding instead of the HMS primary logo. Set this in `data/site.ts`.
- **Logo**: Not bundled. Request official department or HMS logo files via the [Identity Guide](https://identityguide.hms.harvard.edu/brand-design/logo) before adding to the header/footer. Do not recreate or modify logos.
- **Accessibility (WCAG 2.1 AA, required by the [Harvard Digital Accessibility Policy](https://accessibility.huit.harvard.edu/digital-accessibility-policy))**:
  - Skip-to-content link, semantic landmarks, one `h1` per page, unique page titles
  - Persistent primary nav with `aria-current`, standard placement (top), footer with contact info
  - Inline links underlined (not color-only), visible focus indicators
  - Scroll reveals fully disabled under `prefers-reduced-motion`
  - No autoplay, no carousels, no flashing content, no splash screens
  - `alt` text fields required on team photos; write real descriptions
- **Usability**: Follows the HMS "Ten Principles": useful homepage (no intro animation), <12 primary nav items, descriptive labels, external links in body/footer rather than menus.

**Your remaining responsibilities** (custom sites are self-managed per HMS policy):

1. Validate with [WAVE](https://wave.webaim.org/) after adding your real content, and caption any videos.
2. For an `hms.harvard.edu` subdomain, follow [Use of Name](https://identityguide.hms.harvard.edu/trademarks-use-name/use-name-inquiries) and email Benjamin_Sharbaugh@hms.harvard.edu (OCER) about options and approval.
3. Keep content accurate and accessible over time; you own ongoing compliance.

## Deploy

- **Vercel**: push to GitHub, import repo, done.
- **GitHub Pages**: `npm run build`, publish `out/` (set `basePath` in `next.config.mjs` if not using a custom domain).
- **HMS self-managed hosting**: HMS IT offers hosting for self-managed sites; see [website services](https://it.hms.harvard.edu/service/website-creation-and-consultation).
