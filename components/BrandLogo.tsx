"use client";

import { useState, type ReactNode } from "react";

/**
 * Renders a brand logo image, falling back to text (or any node) if the file
 * is missing or fails to load. Lets us wire official logos before the actual
 * asset files are dropped in, without ever showing a broken image.
 */
export default function BrandLogo({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
