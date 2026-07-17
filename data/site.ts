// -----------------------------------------------------------------------------
// SITE CONFIG — edit this file to control lab-wide info, nav, and branding.
// Values marked PLACEHOLDER should be replaced with your real details.
// -----------------------------------------------------------------------------

export const site = {
  // Lab identity ------------------------------------------------------------
  labName: "Tavakkoli Lab", // PLACEHOLDER — confirm exact lab name
  shortName: "Tavakkoli Lab",
  tagline:
    "Advancing metabolic and gastrointestinal surgery through translational science.", // PLACEHOLDER

  // Principal investigator --------------------------------------------------
  pi: {
    name: "Ali Tavakkoli, MD", // PLACEHOLDER — confirm full name & credentials
    title: "Principal Investigator", // PLACEHOLDER
    // e.g. "Professor of Surgery, Harvard Medical School"
    role: "Professor of Surgery, Harvard Medical School", // PLACEHOLDER
  },

  // Affiliation -------------------------------------------------------------
  department: "Department of Surgery", // PLACEHOLDER
  institution: "Brigham and Women's Hospital", // PLACEHOLDER
  medicalSchool: "Harvard Medical School",

  // HMS naming compliance ---------------------------------------------------
  // HMS requires the "Lastname Lab" convention for the HMS primary logo.
  // If your site URL and header follow "Lastname Lab", set true.
  // If false, HMS requires your DEPARTMENT branding instead of the HMS logo.
  followsLastnameLabConvention: true,

  // Contact -----------------------------------------------------------------
  contact: {
    email: "tavakkoli-lab@example.harvard.edu", // PLACEHOLDER
    // General inquiries / lab manager
    labEmail: "labmanager@example.harvard.edu", // PLACEHOLDER
    phone: "+1 (617) 000-0000", // PLACEHOLDER
    address: {
      line1: "75 Francis Street", // PLACEHOLDER
      line2: "Boston, MA 02115", // PLACEHOLDER
    },
  },

  // Social / external -------------------------------------------------------
  links: {
    googleScholar: "", // PLACEHOLDER — full URL or leave "" to hide
    pubmed: "", // PLACEHOLDER
    twitter: "", // PLACEHOLDER
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
