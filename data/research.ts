// -----------------------------------------------------------------------------
// RESEARCH AREAS — edit, add, or remove entries below.
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
    slug: "metabolic-surgery",
    title: "Mechanisms of Metabolic Surgery",
    summary:
      "How bariatric and metabolic operations drive durable weight loss and diabetes remission beyond simple caloric restriction.",
    body: [
      "Our group studies the physiological changes that follow metabolic and bariatric surgery, seeking to explain why these operations produce durable weight loss and rapid improvements in type 2 diabetes. We combine rodent models with human physiological studies to isolate the gut-derived signals responsible for these effects.", // PLACEHOLDER
      "By mapping the hormonal, neural, and microbial pathways engaged by surgery, we aim to identify targets for less invasive therapies that reproduce the metabolic benefits of an operation without the operation itself.", // PLACEHOLDER
    ],
  },
  {
    slug: "gut-brain-signaling",
    title: "Gut-Brain Signaling in Appetite",
    summary:
      "Neural and hormonal circuits linking the gastrointestinal tract to central control of appetite and energy balance.",
    body: [
      "We investigate how nutrient sensing in the gut is communicated to the brain to regulate hunger, satiety, and energy expenditure. This work spans enteroendocrine cell biology, vagal afferent signaling, and central integration of peripheral signals.", // PLACEHOLDER
      "Understanding these circuits informs the design of pharmacologic and device-based interventions for obesity and its metabolic complications.", // PLACEHOLDER
    ],
  },
  {
    slug: "surgical-outcomes",
    title: "Surgical Outcomes & Health Services",
    summary:
      "Data-driven evaluation of long-term outcomes, access, and value in metabolic and gastrointestinal surgery.",
    body: [
      "Using large clinical datasets and registry data, we study the long-term outcomes, safety, and comparative effectiveness of surgical and non-surgical treatments for obesity and related conditions.", // PLACEHOLDER
      "Our health services research addresses disparities in access to care and works to define the value of surgical intervention across diverse patient populations.", // PLACEHOLDER
    ],
  },
];
