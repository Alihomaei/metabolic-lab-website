// -----------------------------------------------------------------------------
// TEAM — current members and alumni.
// Headshots: put image files in public/team/ and set `photo` to "/team/name.jpg".
// `alt` is REQUIRED for accessibility — write a real description of the photo.
// Leave `photo` as "" to show initials placeholder instead.
// -----------------------------------------------------------------------------

export type Member = {
  name: string;
  role: string;
  photo?: string; // e.g. "/team/jane-doe.jpg" (file in public/team/)
  alt?: string; // REQUIRED if photo set — describe the person/photo
  bio?: string;
  email?: string;
};

export const team: Member[] = [
  {
    name: "Ali Tavakkoli, MD",
    role: "Principal Investigator",
    photo: "",
    alt: "",
    bio: "Chief of the Division of General and Gastrointestinal Surgery at Brigham and Women's Hospital and Associate Professor of Surgery at Harvard Medical School. A minimally invasive GI surgeon and R01-funded surgeon-scientist, he co-directs the Center for Weight Management and Wellness and directs the Minimally Invasive Surgery fellowship. He leads the lab's basic and translational work on GI surgical metabolism.",
    email: "",
  },
  {
    name: "Eric G. Sheu, MD, PhD",
    role: "Principal Investigator",
    photo: "",
    alt: "",
    bio: "Surgeon at Brigham and Women's Hospital and Assistant Professor of Surgery at Harvard Medical School. He earned his MD from Harvard Medical School and a doctorate in immunology from Oxford. His research focuses on the role of immunometabolism and the microbiome in type 2 diabetes resolution after bariatric surgery.",
    email: "",
  },
  {
    name: "Yingjia Chen, PhD",
    role: "Postdoctoral Research Fellow",
    photo: "",
    alt: "",
    bio: "Received her PhD from the College of Veterinary Medicine, University of Georgia. Her work focuses on the mechanistic and translational aspects of cholic acid-7-sulfate (CA7S), a bile acid increased after sleeve gastrectomy, and on selecting gut bacterial candidates for obesity, type 2 diabetes, and fatty liver remission.",
  },
  {
    name: "Vasundhara Mathur, MD",
    role: "Postdoctoral Research Fellow",
    photo: "",
    alt: "",
    bio: "Received her degree in medicine from VMMC & Safdarjung Hospital, New Delhi. A former WHO CC Global Surgery Fellow, she works to develop systems for a gastrointestinal and surgical tissue repository within the lab.",
  },
  {
    name: "Weronika Stupalkowska, MRCS, MBBS, BSc",
    role: "Postdoctoral Research Fellow",
    photo: "",
    alt: "",
    bio: "A surgical resident within the East of England Deanery, UK, and a member of the Royal College of Surgeons of England. Her work centers on the mechanisms underlying metabolic changes after bariatric surgery and its effects on oncogenesis and tumor growth.",
  },
  {
    name: "Ali Homaei, MD, MBA",
    role: "Postdoctoral Research Fellow",
    photo: "/team/ali-homaei.jpg",
    alt: "Ali Homaei, smiling, in a light gray suit and patterned tie against a gray backdrop.",
    bio: "Postdoctoral research fellow in the Laboratory for Surgical and Metabolic Research, contributing to the lab's translational work in metabolic and gastrointestinal surgery.", // EDIT ME — replace with your own bio
    email: "",
  },
];

export const alumni: Member[] = [
  {
    name: "Thomas Shin, MD, PhD",
    role: "Former MIS/Bariatric Surgery Fellow — now Assistant Professor of Surgery & bariatric surgeon, UVA Health, Charlottesville, VA",
  },
  {
    name: "Thomas J. Martin, MD",
    role: "Former Research Resident — completed two years of research in the lab; surgical resident",
  },
  {
    name: "Mehran Karvar, MD",
    role: "Research Fellow, 2021–2022",
  },
  {
    name: "Tammy Lo, MBBS, MRCS",
    role: "Research Fellow, 2018–2020 — General Surgery Registrar, East of England Deanery, UK",
  },
  {
    name: "Renuka Haridas, PhD",
    role: "Research Fellow, 2016–2021 — Research Scientist, Affinivax, Cambridge, MA",
  },
  {
    name: "Hassan Aliakbarian, MD",
    role: "Research Fellow, 2014–2020 — Abdominal Transplant Fellow, Ochsner Multi-Organ Transplant Institute",
  },
  {
    name: "James Luo, MD",
    role: "Research Fellow, 2019–2021 — Surgical Resident, Brigham and Women's Hospital, Boston, MA",
  },
  {
    name: "Dave Harris, MD",
    role: "Research Fellow, 2016–2018 — Assistant Professor of Surgery, University of Wisconsin, Madison, WI",
  },
  {
    name: "Eleanor Rudge, MBBS, MRCS",
    role: "Research Fellow, 2016–2018 — General Surgery Registrar, East of England Deanery, UK",
  },
  {
    name: "Keyvan Heshmati, MD",
    role: "Research Fellow, 2016–2018 — Neurology Resident, Rutgers University, Newark, NJ",
  },
  {
    name: "Tara Deelman, MD",
    role: "Research Fellow, 2010–2017 — Surgical Resident, Netherlands",
  },
  {
    name: "Atanu Pal, MBBS, FRCS",
    role: "Research Fellow, 2012–2014 — Consultant Colorectal Surgeon, Cambridge University Hospitals, UK",
  },
  {
    name: "Ali Ardestani, MD, MSc",
    role: "Research Fellow, 2010–2013 — Interventional Radiologist, Massachusetts General Hospital",
  },
  {
    name: "Hina Khan (Bhutta), MBBS, FRCS",
    role: "Research Fellow, 2009–2013 — Consultant Upper GI Surgeon, Bedfordshire Hospitals NHS Foundation Trust, UK",
  },
  {
    name: "Adam Stearns, MBBS, PhD, FRCS",
    role: "Research Fellow, 2006–2009 — Consultant Laparoscopic Colorectal and General Surgeon, Norfolk and Norwich University Hospital, UK",
  },
  {
    name: "Anita Balakrishnan, MBBS, PhD, FRCS",
    role: "Research Fellow, 2006–2009 — Consultant Hepato-pancreato-biliary Surgeon, Cambridge University Hospitals, UK",
  },
];
