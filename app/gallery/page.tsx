import type { Metadata } from "next";
import { photos, videos } from "@/data/gallery";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from lab life, outings, and conferences, plus video features on our team and research.",
};

function SectionHeading({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-10">
      <p className="kicker kicker-crimson">{index}</p>
      <h2 className="display display-section mt-3">{label}</h2>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <header className="grid gap-8 lg:grid-cols-12 py-16 sm:py-20 border-b border-ink">
        <div className="lg:col-span-8">
          <p className="kicker kicker-crimson">05 · Life in the lab</p>
          <h1 className="display display-page mt-5">Gallery</h1>
        </div>
        <p className="lg:col-span-4 self-end text-base leading-relaxed text-slate">
          Snapshots from the bench, lab outings, and conferences, plus video
          features on our team and research.
        </p>
      </header>

      {/* Photographs */}
      <section className="py-14 sm:py-20 border-b border-line">
        <SectionHeading index="01" label="Photographs" />
        <GalleryGrid photos={photos} />
      </section>

      {/* Video */}
      <section className="py-14 sm:py-20">
        <SectionHeading index="02" label="Video" />
        <div className="grid gap-8 sm:grid-cols-2">
          {videos.map((video) => (
            <Reveal key={video.youtubeId} as="figure">
              <div className="aspect-video w-full border border-line bg-ink">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="h-full w-full"
                />
              </div>
              {video.caption && (
                <figcaption className="mt-3 text-xs font-medium leading-relaxed text-slate">
                  {video.caption}
                </figcaption>
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
