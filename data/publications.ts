// -----------------------------------------------------------------------------
// PUBLICATIONS — add entries here; they are auto-grouped by year (newest first).
// `link` is optional (DOI or PubMed URL). Use `featured: true` to highlight.
// -----------------------------------------------------------------------------

export type Publication = {
  title: string;
  authors: string; // e.g. "Smith J, Doe A, Tavakkoli A"
  venue: string; // journal / conference
  year: number;
  link?: string; // DOI or PubMed URL (optional)
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      "Placeholder: Mechanisms of glycemic improvement after metabolic surgery", // PLACEHOLDER
    authors: "Author A, Author B, Tavakkoli A",
    venue: "Journal of Placeholder Surgery",
    year: 2025,
    link: "",
    featured: true,
  },
  {
    title:
      "Placeholder: Gut hormone dynamics following gastric bypass in a rodent model", // PLACEHOLDER
    authors: "Author C, Tavakkoli A",
    venue: "Placeholder Metabolism",
    year: 2024,
    link: "",
  },
  {
    title:
      "Placeholder: Long-term outcomes of metabolic surgery in a national cohort", // PLACEHOLDER
    authors: "Author D, Author E, Tavakkoli A",
    venue: "Annals of Placeholder Medicine",
    year: 2024,
    link: "",
  },
  {
    title:
      "Placeholder: Vagal afferent signaling and central control of appetite", // PLACEHOLDER
    authors: "Author F, Tavakkoli A",
    venue: "Placeholder Neuroscience",
    year: 2023,
    link: "",
  },
];
