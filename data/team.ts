// -----------------------------------------------------------------------------
// TEAM. People are grouped into sections: leadership, fellows, students,
// collaborators, and alumni. Each section is its own exported array.
// Headshots: put image files in public/team/ and set `photo` to "/team/name.jpg".
// `alt` is REQUIRED for accessibility. Write a real description of the photo.
// Leave `photo` as "" (or omit) to show an initials placeholder instead.
// -----------------------------------------------------------------------------

export type Member = {
  name: string;
  role: string;
  photo?: string; // e.g. "/team/jane-doe.jpg" (file in public/team/)
  alt?: string; // REQUIRED if photo set. Describe the person/photo.
  bio?: string;
  email?: string;
  href?: string; // optional external link (used for collaborator labs)
};

// --- Leadership --------------------------------------------------------------
export const leadership: Member[] = [
  {
    name: "Ali Tavakkoli, MD",
    role: "Principal Investigator",
    photo: "/team/ali-tavakkoli.jpg",
    alt: "Ali Tavakkoli, MD",
    bio: "Chief of the Division of General and Gastrointestinal Surgery at Brigham and Women's Hospital and Associate Professor of Surgery at Harvard Medical School. A minimally invasive GI surgeon and R01-funded surgeon-scientist, he co-directs the Center for Weight Management and Wellness and directs the Minimally Invasive Surgery fellowship. He leads the lab's basic and translational work on GI surgical metabolism.",
    email: "atavakkoli@bwh.harvard.edu",
  },
  {
    name: "Eric G. Sheu, MD, PhD",
    role: "Principal Investigator",
    photo: "/team/eric-sheu.jpg",
    alt: "Eric G. Sheu, MD, PhD",
    bio: "Surgeon at Brigham and Women's Hospital and Assistant Professor of Surgery at Harvard Medical School. He earned his MD from Harvard Medical School and a doctorate in immunology from Oxford. His research focuses on the role of immunometabolism and the microbiome in type 2 diabetes resolution after bariatric surgery.",
    email: "esheu@bwh.harvard.edu",
  },
];

// --- Previous Principal Investigators ---------------------------------------
// The lab's PI lineage back to its founding (source: old site home + /history/).
// Headshots: run `bash scripts/pull-pi-photos.sh` to download them.
export const previousPIs: Member[] = [
  {
    name: "Stanley W. Ashley, MD",
    role: "Principal Investigator, 1997 to 2006",
    photo: "/team/stanley-ashley.jpg",
    alt: "Stanley W. Ashley, MD",
    bio: "Frank Sawyer Professor of Surgery and former Chief Medical Officer of Brigham and Women's Hospital. His R01-funded work focused on intestinal adaptation, the sodium-glucose cotransporter, and GLP-2 as a therapy for short bowel syndrome.",
  },
  {
    name: "Edward E. Whang, MD",
    role: "Principal Investigator, 1998 to 2007",
    photo: "/team/edward-whang.jpg",
    alt: "Edward E. Whang, MD",
    bio: "NIH-funded surgeon-scientist studying intestinal physiology and GLP-2 in intestinal adaptation, with pioneering collaborative work on tissue-engineered small intestine and novel therapies for pancreatic cancer.",
  },
  {
    name: "Danny O. Jacobs, MD, MPH",
    role: "Principal Investigator, 1997 to 2000",
    photo: "/team/danny-jacobs.jpg",
    alt: "Danny O. Jacobs, MD, MPH",
    bio: "Studied the metabolic effects of malnutrition, stress, infection, and injury using nuclear magnetic resonance. Later Chair of Surgery at Duke University, then Dean and Provost of the University of Texas Medical Branch; elected to the Institute of Medicine in 2001.",
  },
  {
    name: "Douglas W. Wilmore, MD",
    role: "Principal Investigator, 1979 to 1997",
    photo: "/team/douglas-wilmore.jpg",
    alt: "Douglas W. Wilmore, MD",
    bio: "Frank Sawyer Professor of Surgery. Established the Laboratory for Surgical Metabolism and Nutrition, described glutamine's response to acute illness, and drove the work leading to FDA approval of glutamine for short bowel syndrome.",
  },
  {
    name: "Francis D. Moore, MD",
    role: "Founder and Principal Investigator, 1948 to 1979",
    photo: "/team/francis-moore.jpg",
    alt: "Francis D. Moore, MD",
    bio: "Third Surgeon-in-Chief of the Brigham and Moseley Professor of Surgery at Harvard Medical School. Pioneered the study of body composition and the metabolic care of the surgical patient; under his leadership the world's first successful human organ transplant was performed.",
  },
];

// --- Fellows -----------------------------------------------------------------
export const fellows: Member[] = [
  {
    name: "Yingjia Chen, PhD",
    role: "Postdoctoral Research Fellow",
    photo: "/team/yingjia-chen.jpg",
    alt: "Yingjia Chen, PhD",
    bio: "Received her PhD from the College of Veterinary Medicine, University of Georgia. Her work focuses on the mechanistic and translational aspects of cholic acid-7-sulfate (CA7S), a bile acid increased after sleeve gastrectomy, and on selecting gut bacterial candidates for obesity, type 2 diabetes, and fatty liver remission.",
  },
  {
    name: "Vasundhara Mathur, MD",
    role: "Postdoctoral Research Fellow",
    photo: "/team/vasundhara-mathur.jpg",
    alt: "Vasundhara Mathur, MD",
    bio: "Received her degree in medicine from VMMC & Safdarjung Hospital, New Delhi. A former WHO CC Global Surgery Fellow, she works to develop systems for a gastrointestinal and surgical tissue repository within the lab.",
  },
  {
    name: "Weronika Stupalkowska, MRCS, MBBS, BSc",
    role: "Postdoctoral Research Fellow",
    photo: "/team/weronika-stupalkowska.jpg",
    alt: "Weronika Stupalkowska, MRCS, MBBS, BSc",
    bio: "A surgical resident within the East of England Deanery, UK, and a member of the Royal College of Surgeons of England. Her work centers on the mechanisms underlying metabolic changes after bariatric surgery and its effects on oncogenesis and tumor growth.",
  },
  {
    name: "Ali Homaei, MD, MBA",
    role: "Postdoctoral Research Fellow",
    photo: "/team/ali-homaei.jpg",
    alt: "Ali Homaei, smiling, in a light gray suit and patterned tie against a gray backdrop.",
    bio: "Postdoctoral research fellow in the Laboratory for Surgical and Metabolic Research, contributing to the lab's translational work in metabolic and gastrointestinal surgery.", // EDIT ME: replace with your own bio
    email: "",
  },
];

// --- Students ----------------------------------------------------------------
// EDIT ME: add one entry per student. Duplicate the block below, or delete it
// once the section is filled. Add a headshot to public/team/ and set `photo`.
// The section stays hidden while this array is empty. Template entry:
// { name: "Student Name", role: "Graduate or Medical Student", bio: "..." }
export const students: Member[] = [];

// --- Collaborators (other labs) ----------------------------------------------
// EDIT ME: list collaborating labs or investigators. `role` = institution and
// focus. `href` (optional) links to the collaborator's lab page.
// The section stays hidden while this array is empty. Template entry:
// { name: "Lab or Investigator", role: "Institution, focus", href: "", bio: "..." }
export const collaborators: Member[] = [];

// Back-compat: a flat list of current members (leadership + fellows).
export const team: Member[] = [...leadership, ...fellows];

// --- Alumni ------------------------------------------------------------------
export const alumni: Member[] = [
  {
    name: "Thomas Shin, MD, PhD",
    role: "Former MIS/Bariatric Surgery Fellow. Now Assistant Professor of Surgery & bariatric surgeon, UVA Health, Charlottesville, VA",
  },
  {
    name: "Thomas J. Martin, MD",
    role: "Former Research Resident. Completed two years of research in the lab; surgical resident",
  },
  {
    name: "Mehran Karvar, MD",
    role: "Research Fellow, 2021 to 2022",
  },
  {
    name: "Tammy Lo, MBBS, MRCS",
    role: "Research Fellow, 2018 to 2020. General Surgery Registrar, East of England Deanery, UK",
  },
  {
    name: "Renuka Haridas, PhD",
    role: "Research Fellow, 2016 to 2021. Research Scientist, Affinivax, Cambridge, MA",
  },
  {
    name: "Hassan Aliakbarian, MD",
    role: "Research Fellow, 2014 to 2020. Abdominal Transplant Fellow, Ochsner Multi-Organ Transplant Institute",
  },
  {
    name: "James Luo, MD",
    role: "Research Fellow, 2019 to 2021. Surgical Resident, Brigham and Women's Hospital, Boston, MA",
  },
  {
    name: "Dave Harris, MD",
    role: "Research Fellow, 2016 to 2018. Assistant Professor of Surgery, University of Wisconsin, Madison, WI",
  },
  {
    name: "Eleanor Rudge, MBBS, MRCS",
    role: "Research Fellow, 2016 to 2018. General Surgery Registrar, East of England Deanery, UK",
  },
  {
    name: "Keyvan Heshmati, MD",
    role: "Research Fellow, 2016 to 2018. Neurology Resident, Rutgers University, Newark, NJ",
  },
  {
    name: "Tara Deelman, MD",
    role: "Research Fellow, 2010 to 2017. Surgical Resident, Netherlands",
  },
  {
    name: "Atanu Pal, MBBS, FRCS",
    role: "Research Fellow, 2012 to 2014. Consultant Colorectal Surgeon, Cambridge University Hospitals, UK",
  },
  {
    name: "Ali Ardestani, MD, MSc",
    role: "Research Fellow, 2010 to 2013. Interventional Radiologist, Massachusetts General Hospital",
  },
  {
    name: "Hina Khan (Bhutta), MBBS, FRCS",
    role: "Research Fellow, 2009 to 2013. Consultant Upper GI Surgeon, Bedfordshire Hospitals NHS Foundation Trust, UK",
  },
  {
    name: "Adam Stearns, MBBS, PhD, FRCS",
    role: "Research Fellow, 2006 to 2009. Consultant Laparoscopic Colorectal and General Surgeon, Norfolk and Norwich University Hospital, UK",
  },
  {
    name: "Anita Balakrishnan, MBBS, PhD, FRCS",
    role: "Research Fellow, 2006 to 2009. Consultant Hepato-pancreato-biliary Surgeon, Cambridge University Hospitals, UK",
  },
];
