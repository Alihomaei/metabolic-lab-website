// -----------------------------------------------------------------------------
// NEWS. Items are auto-sorted by date (newest first).
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
    date: "2022-02-11",
    title: "Sleeve gastrectomy has profound effects on immune cells",
    body: "Our work on how laparoscopic sleeve gastrectomy reprograms the immune system was featured in Brigham On A Mission.",
    link: "https://www.brighamhealthonamission.org/2022/02/11/laparoscopic-sleeve-gastrectomy-has-profound-effects-on-immune-cells/",
  },
  {
    date: "2022-02-01",
    title: "The lab in the Department of Surgery Annual Report",
    body: "Read about the Laboratory for Surgical and Metabolic Research in the Brigham Department of Surgery Annual Report.",
    link: "https://online.pubhtml5.com/gzwa/tdhv/#p=29",
  },
  {
    date: "2021-01-01",
    title: "NIH R01 supports work on metabolic surgery",
    body: "The lab's research on the mechanisms of sleeve gastrectomy is supported by NIH R01 DK126855, alongside an American Surgical Association Foundation Fellowship Award and the Blavatnik Biomedical Accelerator Program.",
  },
];
