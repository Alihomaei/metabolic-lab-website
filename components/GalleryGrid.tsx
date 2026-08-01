"use client";

import { useState } from "react";
import type { GalleryPhoto } from "@/data/gallery";
import { asset } from "@/lib/asset";

/**
 * Masonry-style photo grid (CSS columns, so mixed aspect ratios pack cleanly).
 * Any photo whose file is missing/broken hides itself (same pattern as
 * Avatar/BrandLogo), so the page works before `scripts/pull-gallery.sh` runs.
 * If every photo fails, a short note renders instead of an empty section.
 */
export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [failed, setFailed] = useState<Set<string>>(new Set());

  const markFailed = (src: string) =>
    setFailed((prev) => {
      const next = new Set(prev);
      next.add(src);
      return next;
    });

  if (failed.size >= photos.length) {
    return (
      <div className="border border-line bg-paper px-6 py-10 text-center">
        <p className="text-sm leading-relaxed text-slate">
          Photos are on their way. Run{" "}
          <code className="num text-ink">bash scripts/pull-gallery.sh</code> to
          add them.
        </p>
      </div>
    );
  }

  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
      {photos.map((photo) =>
        failed.has(photo.src) ? null : (
          <figure
            key={photo.src}
            className="mb-6 break-inside-avoid border border-line bg-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(photo.src)}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              onError={() => markFailed(photo.src)}
              className="block w-full"
            />
            {photo.caption && (
              <figcaption className="border-t border-line px-4 py-3 text-xs font-medium leading-relaxed text-slate">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        )
      )}
    </div>
  );
}
