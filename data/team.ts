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
    name: "Ali Tavakkoli, MD", // PLACEHOLDER
    role: "Principal Investigator",
    photo: "",
    alt: "",
    bio: "Principal investigator of the lab. Replace with a short bio.", // PLACEHOLDER
    email: "",
  },
  {
    name: "Placeholder Postdoc, PhD", // PLACEHOLDER
    role: "Postdoctoral Research Fellow",
    photo: "",
    alt: "",
    bio: "Studies gut-brain signaling in appetite regulation.", // PLACEHOLDER
  },
  {
    name: "Placeholder Student", // PLACEHOLDER
    role: "PhD Student",
    photo: "",
    alt: "",
    bio: "Investigates metabolic adaptations to bariatric surgery.", // PLACEHOLDER
  },
  {
    name: "Placeholder Manager", // PLACEHOLDER
    role: "Lab Manager",
    photo: "",
    alt: "",
    bio: "Coordinates lab operations and research logistics.", // PLACEHOLDER
  },
];

export const alumni: Member[] = [
  {
    name: "Placeholder Alum, PhD", // PLACEHOLDER
    role: "Former Postdoc — now Assistant Professor, University Placeholder",
  },
  {
    name: "Placeholder Alum, MD", // PLACEHOLDER
    role: "Former Research Fellow — now Surgical Resident, Hospital Placeholder",
  },
];
