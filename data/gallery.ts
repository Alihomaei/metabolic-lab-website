// -----------------------------------------------------------------------------
// GALLERY CONTENT. Photos + videos carried over from the old lab site
// (https://surgery.bwh.harvard.edu/gallery/ and /in-news/).
//
// Image files live in public/gallery/. Run `bash scripts/pull-gallery.sh`
// locally once to download them from the old site. Tiles for missing files
// hide themselves automatically, so a partial download never breaks the page.
// -----------------------------------------------------------------------------

export type GalleryPhoto = {
  src: string; // path under /public
  alt: string;
  caption?: string; // shown under the photo when set
};

export type GalleryVideo = {
  youtubeId: string;
  title: string; // used for the iframe title (accessibility)
  caption?: string;
};

export const photos: GalleryPhoto[] = [
  {
    src: "/gallery/lab-group-2021.jpg",
    alt: "Group photo of lab members outdoors",
    caption: "The lab, October 2021",
  },
  {
    src: "/gallery/spring-outing-2022-group.jpg",
    alt: "Lab members together during the spring outing",
    caption: "Lab outing, May 2022",
  },
  {
    src: "/gallery/spring-outing-2022-morning.jpg",
    alt: "Lab members at the May 2022 outing",
  },
  {
    src: "/gallery/kimball-farm.jpg",
    alt: "Lab members at Kimball Farm",
    caption: "Lab outing at Kimball Farm",
  },
  {
    src: "/gallery/annual-report.png",
    alt: "The lab featured in the Department of Surgery Annual Report",
    caption: "Featured in the Department of Surgery Annual Report",
  },
  {
    src: "/gallery/lab-gathering-2017.jpg",
    alt: "Lab gathering in August 2017",
    caption: "Lab gathering, August 2017",
  },
  {
    src: "/gallery/lab-gathering-2018.jpg",
    alt: "Lab gathering in April 2018",
    caption: "Lab gathering, April 2018",
  },
  {
    src: "/gallery/archive-01.jpg",
    alt: "Lab members, from the lab archives",
  },
  {
    src: "/gallery/discover-brigham-2018.png",
    alt: "Presenting at the Discover Brigham research showcase in 2018",
    caption: "Discover Brigham research showcase, 2018",
  },
  {
    src: "/gallery/archive-02.png",
    alt: "Lab members, from the lab archives",
  },
  {
    src: "/gallery/archive-03.jpg",
    alt: "Lab members, from the lab archives",
  },
  {
    src: "/gallery/archive-04.jpg",
    alt: "Lab members, from the lab archives",
  },
  {
    src: "/gallery/lab-dinner-2015.jpg",
    alt: "Lab members at a dinner in January 2015",
    caption: "Lab dinner, January 2015",
  },
  {
    src: "/gallery/sheu-tavakkoli-harris-labs.jpg",
    alt: "Joint group photo of the Sheu, Tavakkoli, and Harris labs",
    caption: "The Sheu, Tavakkoli, and Harris labs",
  },
  {
    src: "/gallery/with-drs-tavakkoli-sheu-2020.jpg",
    alt: "Tammy Lo with Drs. Tavakkoli and Sheu in 2020",
    caption: "Tammy Lo with Drs. Tavakkoli and Sheu, 2020",
  },
  {
    src: "/gallery/asc-2019.jpg",
    alt: "Lab members at the Academic Surgical Congress in 2019",
    caption: "Academic Surgical Congress, 2019",
  },
];

export const videos: GalleryVideo[] = [
  {
    youtubeId: "hi0V-l2KE9g",
    title:
      "Meet Dr. Tavakkoli, Chief, General & Gastrointestinal Surgery, Brigham and Women's Hospital",
    caption: "Meet Dr. Tavakkoli, Chief of General & Gastrointestinal Surgery",
  },
  {
    youtubeId: "WGcOA0KW2vY",
    title: "Improving Health through Weight Loss, Brigham and Women's Hospital",
    caption: "Improving health through weight loss",
  },
];
