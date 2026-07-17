// -----------------------------------------------------------------------------
// RESEARCH AREAS — content from https://surgery.bwh.harvard.edu/research-projects/
// Each area renders as a card on Home and a section on the Research page.
// -----------------------------------------------------------------------------

export type ResearchArea = {
  slug: string;
  title: string;
  summary: string; // 1-2 sentence teaser (shown on cards)
  body: string[]; // full paragraphs (shown on Research page)
};

export const research: ResearchArea[] = [
  {
    slug: "gut-liver-metabolism",
    title: "Gut–Liver Signaling & Diabetes Remission",
    summary:
      "A novel gut–liver pathway activated by sleeve gastrectomy produces an intestinal metabolite that improves glucose metabolism — a target for non-invasive diabetes therapy.",
    body: [
      "Bariatric surgery is our most effective therapy for obesity and associated metabolic disease, yet the mechanisms of action of these operations remain unclear. Our lab studies the biology of the sleeve gastrectomy — the most commonly performed bariatric operation — focusing on the molecular connections between the intestine, gut luminal factors (microbiota, bile acids, metabolites), and the immune system.",
      "We recently discovered a novel gut–liver pathway activated by sleeve gastrectomy that leads to the production of an intestinal metabolite that improves glucose metabolism. We are working to manipulate this pathway as a new, non-invasive treatment for diabetes that mimics the metabolic benefits of surgery without the operation itself.",
    ],
  },
  {
    slug: "surgical-immunometabolism",
    title: "Surgical Immunometabolism",
    summary:
      "Sleeve gastrectomy reprograms the function and metabolism of the immune system independent of weight loss, reshaping the body's response to pathogens.",
    body: [
      "We have identified changes in the function and metabolism of the immune system induced by sleeve gastrectomy that occur independent of weight loss. This surgical regulation of immunometabolism appears to alter how the body responds to challenges such as viral infection.",
      "We are now determining the mechanisms by which surgery reprograms immune cells and what these changes mean for host defense and inflammatory disease — work featured in the Brigham's account of how laparoscopic sleeve gastrectomy has profound effects on immune cells.",
    ],
  },
  {
    slug: "surgery-and-cancer",
    title: "Metabolic Surgery & Cancer",
    summary:
      "Using models of bariatric surgery and cancer to understand how surgical and metabolic changes influence cancer pathogenesis and response to treatment.",
    body: [
      "We are using models of bariatric surgery and cancer to understand the mechanisms by which surgically induced metabolic and immune changes influence cancer pathogenesis and the response to treatment.",
      "The lab is funded by the NIH as well as non-profit and society grants, with active collaborations across the microbiome, endocrinology, and colon cancer. Trainees in the lab have been highly productive, with high-impact publications, national presentations, and success in obtaining extramural funding and research awards.",
    ],
  },
];
