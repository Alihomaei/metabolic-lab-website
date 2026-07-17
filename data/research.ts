// -----------------------------------------------------------------------------
// RESEARCH / PROJECTS. Areas are grouped into three categories: Basic Science,
// Clinical, and AI. Each category renders as a section on the Research page.
// The flat `research` export (real areas only) feeds the homepage cards + stats.
// Source: https://surgery.bwh.harvard.edu/research-projects/
// -----------------------------------------------------------------------------

export type ResearchArea = {
  slug: string;
  title: string;
  summary: string; // 1-2 sentence teaser (shown on cards)
  body: string[]; // full paragraphs (shown on Research page)
  placeholder?: boolean; // true = EDIT ME stub; kept off the homepage
};

export type ProjectCategory = {
  slug: "basic-science" | "clinical" | "ai";
  title: string;
  kicker: string; // short label shown above the category title
  intro: string; // 1-2 sentence section intro
  areas: ResearchArea[];
};

// --- Individual areas --------------------------------------------------------
const gutLiver: ResearchArea = {
  slug: "gut-liver-metabolism",
  title: "Gut-Liver Signaling & Diabetes Remission",
  summary:
    "A novel gut-liver pathway activated by sleeve gastrectomy produces an intestinal metabolite that improves glucose metabolism, a target for non-invasive diabetes therapy.",
  body: [
    "Bariatric surgery is our most effective therapy for obesity and associated metabolic disease, yet the mechanisms of action of these operations remain unclear. Our lab studies the biology of the sleeve gastrectomy, the most commonly performed bariatric operation, focusing on the molecular connections between the intestine, gut luminal factors (microbiota, bile acids, metabolites), and the immune system.",
    "We recently discovered a novel gut-liver pathway activated by sleeve gastrectomy that leads to the production of an intestinal metabolite that improves glucose metabolism. We are working to manipulate this pathway as a new, non-invasive treatment for diabetes that mimics the metabolic benefits of surgery without the operation itself.",
  ],
};

const immunometabolism: ResearchArea = {
  slug: "surgical-immunometabolism",
  title: "Surgical Immunometabolism",
  summary:
    "Sleeve gastrectomy reprograms the function and metabolism of the immune system independent of weight loss, reshaping the body's response to pathogens.",
  body: [
    "We have identified changes in the function and metabolism of the immune system induced by sleeve gastrectomy that occur independent of weight loss. This surgical regulation of immunometabolism appears to alter how the body responds to challenges such as viral infection.",
    "We are now determining the mechanisms by which surgery reprograms immune cells and what these changes mean for host defense and inflammatory disease, work featured in the Brigham's account of how laparoscopic sleeve gastrectomy has profound effects on immune cells.",
  ],
};

const surgeryCancer: ResearchArea = {
  slug: "surgery-and-cancer",
  title: "Metabolic Surgery & Cancer",
  summary:
    "Using models of bariatric surgery and cancer to understand how surgical and metabolic changes influence cancer pathogenesis and response to treatment.",
  body: [
    "We are using models of bariatric surgery and cancer to understand the mechanisms by which surgically induced metabolic and immune changes influence cancer pathogenesis and the response to treatment.",
    "The lab is funded by the NIH as well as non-profit and society grants, with active collaborations across the microbiome, endocrinology, and colon cancer. Trainees in the lab have been highly productive, with high-impact publications, national presentations, and success in obtaining extramural funding and research awards.",
  ],
};

// Clinical placeholder: tissue repository / clinical studies.
const tissueRepository: ResearchArea = {
  slug: "tissue-repository",
  title: "Surgical Tissue Repository & Clinical Studies",
  placeholder: true,
  summary:
    "EDIT ME: describe the gastrointestinal and surgical tissue repository and the clinical studies it supports.",
  body: [
    "EDIT ME: replace this with a description of the lab's clinical and translational work, including the gastrointestinal and surgical tissue repository, patient cohorts, and outcomes studies.",
    "EDIT ME: add a second paragraph, or delete this entry, once the clinical section content is finalized.",
  ],
};

// AI placeholder: computational / imaging projects.
const aiProjects: ResearchArea = {
  slug: "ai-imaging",
  title: "AI & Computational Analysis",
  placeholder: true,
  summary:
    "EDIT ME: describe the lab's AI and machine-learning projects, such as medical image segmentation and quality control.",
  body: [
    "EDIT ME: replace this with a description of the lab's AI and computational work, for example uncertainty-aware segmentation of medical imaging, model-based quality control, and analysis of large biological datasets.",
    "EDIT ME: add a second paragraph, or duplicate this block for additional AI projects.",
  ],
};

// --- Categories --------------------------------------------------------------
export const projectCategories: ProjectCategory[] = [
  {
    slug: "basic-science",
    title: "Basic Science",
    kicker: "Mechanistic",
    intro:
      "Mechanistic work on how metabolic surgery reshapes gut signaling, metabolism, and immune function.",
    areas: [gutLiver, immunometabolism],
  },
  {
    slug: "clinical",
    title: "Clinical",
    kicker: "Translational & outcomes",
    intro:
      "Translational and clinical studies, including our surgical tissue repository and work on metabolic surgery and cancer.",
    areas: [surgeryCancer, tissueRepository],
  },
  {
    slug: "ai",
    title: "AI",
    kicker: "Computation & imaging",
    intro:
      "Machine-learning and computational methods applied to medical imaging and large biological datasets.",
    areas: [aiProjects],
  },
];

// Flat list for homepage cards + stats (real areas only, no placeholders).
export const research: ResearchArea[] = [gutLiver, immunometabolism, surgeryCancer];
