// -----------------------------------------------------------------------------
// SITE CONFIG — edit this file to control lab-wide info, nav, and branding.
// Content sourced from the lab's BWH site: https://surgery.bwh.harvard.edu/
// -----------------------------------------------------------------------------

export const site = {
  // Lab identity ------------------------------------------------------------
  labName: "Laboratory for Surgical and Metabolic Research",
  shortName: "Surgical & Metabolic Research",
  tagline:
    "Investigating the biology of metabolic and bariatric surgery — the molecular connections between the intestine, gut luminal factors, and the immune system.",

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

  // HMS naming compliance ---------------------------------------------------
  followsLastnameLabConvention: true,

  // Contact -----------------------------------------------------------------
  contact: {
    email: "tavakkoli-lab@bwh.harvard.edu", // PLACEHOLDER — confirm real lab inbox
    labEmail: "tavakkoli-lab@bwh.harvard.edu", // PLACEHOLDER
    phone: "+1 (617) 732-5500", // PLACEHOLDER — BWH main line; confirm lab number
    address: {
      line1: "75 Francis Street",
      line2: "Boston, MA 02115",
    },
  },

  // Social / external -------------------------------------------------------
  links: {
    googleScholar: "", // PLACEHOLDER
    pubmed: "", // PLACEHOLDER
    twitter: "https://twitter.com/bwhsurgmetab",
    linkedin: "", // PLACEHOLDER
  },

  // Primary navigation (keep under 12 items per HMS usability principles) ---
  nav: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/publications" },
    { label: "Team", href: "/team" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
};

export type Site = typeof site;
