// -----------------------------------------------------------------------------
// NEWS — items are auto-sorted by date (newest first).
// `date` must be ISO format: "YYYY-MM-DD".
// -----------------------------------------------------------------------------

export type NewsItem = {
  date: string; // "YYYY-MM-DD"
  title: string;
  body: string;
  link?: string; // optional external URL
};

export const news: NewsItem[] = [
  {
    date: "2026-06-01",
    title: "Lab awarded new research grant", // PLACEHOLDER
    body: "The lab received funding to study mechanisms of diabetes remission after metabolic surgery. Replace with your real announcement.", // PLACEHOLDER
  },
  {
    date: "2026-03-15",
    title: "New publication in a leading journal", // PLACEHOLDER
    body: "Our latest work on gut-brain signaling was published. Replace with details and a link.", // PLACEHOLDER
  },
  {
    date: "2025-11-10",
    title: "Welcome to our new lab members", // PLACEHOLDER
    body: "We are excited to welcome new postdocs and students to the team this fall.", // PLACEHOLDER
  },
];
