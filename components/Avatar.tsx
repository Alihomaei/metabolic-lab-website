"use client";

import { useState } from "react";
import { Member } from "@/data/team";
import { asset } from "@/lib/asset";

/** Square headshot (grayscale, reveals color on hover) if provided and it loads,
 *  otherwise an initials placeholder. Falling back on error means a not-yet-added
 *  headshot file never shows as a broken image. */
export default function Avatar({ member }: { member: Member }) {
  const [failed, setFailed] = useState(false);

  const initials = member.name
    .split(" ")
    .filter((w) => /[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  if (member.photo && !failed) {
    return (
      <div className="portrait-frame aspect-square w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(member.photo)}
          alt={member.alt || member.name}
          onError={() => setFailed(true)}
          className="portrait h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="portrait-frame aspect-square w-full bg-paper flex items-center justify-center"
    >
      <span className="display text-5xl font-extrabold text-line select-none">
        {initials}
      </span>
    </div>
  );
}
