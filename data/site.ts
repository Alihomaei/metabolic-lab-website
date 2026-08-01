// -----------------------------------------------------------------------------
// SITE CONFIG. Edit this file to control lab-wide info, nav, and branding.
// Content sourced from the lab's BWH site: https://surgery.bwh.harvard.edu/
// -----------------------------------------------------------------------------

export const site = {
  // Canonical deploy URL, used for metadataBase, sitemap.xml and robots.txt.
  // Currently the GitHub Pages project site, so it includes the /<repo> path.
  // No trailing slash: sitemap.ts and robots.ts append their own.
  // When the lab moves to a custom domain, set this to that origin and drop
  // NEXT_PUBLIC_BASE_PATH from the deploy workflow at the same time.
  url: "https://alihomaei.github.io/metabolic-lab-website",

  // Lab identity ------------------------------------------------------------
  labName: "Laboratory for Surgical and Metabolic Research",
  shortName: "Surgical & Metabolic Research",
  tagline:
    "Investigating the biology of metabolic and bariatric surgery: the molecular connections between the intestine, gut luminal factors, and the immune system.",

  // Principal investigator --------------------------------------------------
  pi: {
    name: "Ali Tavakkoli, MD",
    title: "Principal Investigator",
    role: "Associate Professor of Surgery, Harvard Medical School",
  },

  // Affiliation -------------------------------------------------------------
  department: "Department of Surgery",
  institution: "Brigham and Women's Hospital",
  healthSystem: "Mass General Brigham",
  medicalSchool: "Harvard Medical School",

  // Founding year of the Brigham's surgical metabolism laboratory lineage
  // (Dr. Francis D. Moore established the Laboratory for Biochemistry and
  // Metabolism in Surgery in 1948; source: old lab site /history/).
  founded: "1948",

  // HMS naming compliance ---------------------------------------------------
  followsLastnameLabConvention: true,

  // Contact -----------------------------------------------------------------
  contact: {
    // Real PI inboxes from the old lab site (/contact-us/).
    email: "atavakkoli@bwh.harvard.edu",
    labEmail: "atavakkoli@bwh.harvard.edu",
    piEmails: [
      { name: "Ali Tavakkoli, MD", email: "atavakkoli@bwh.harvard.edu" },
      { name: "Eric G. Sheu, MD, PhD", email: "esheu@bwh.harvard.edu" },
    ],
    phone: "+1 (617) 732-5500", // BWH main switchboard
    address: {
      line1: "Thorn Research Building 1503, 75 Francis Street",
      line2: "Boston, MA 02115",
    },
  },

  // Social / external -------------------------------------------------------
  // Empty string means "not set": Footer.tsx skips the button and
  // app/publications/page.tsx falls back to plain text instead of a link.
  // Paste a full https:// URL to switch any of these on. No other edit needed.
  links: {
    twitter: "https://twitter.com/bwhsurgmetab",
    // PLACEHOLDER, Footer button. Full profile URL, e.g.
    // https://www.instagram.com/<handle>
    instagram: "",
    // PLACEHOLDER, Footer button. Company or showcase page, e.g.
    // https://www.linkedin.com/company/<slug>
    linkedin: "",
    // PLACEHOLDER, Publications page. Author profile, e.g.
    // https://scholar.google.com/citations?user=<id>
    googleScholar: "",
    // PLACEHOLDER, Publications page. Author search or bibliography, e.g.
    // https://pubmed.ncbi.nlm.nih.gov/?term=Tavakkoli+A
    pubmed: "",
  },

  // Primary navigation (keep under 12 items per HMS usability principles) ---
  nav: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/publications" },
    { label: "Team", href: "/team" },
    { label: "News", href: "/news" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
};

export type Site = typeof site;
