import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Static sitemap.xml (works with output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...site.nav.map((n) => n.href), "/gallery"];
  // De-duplicate in case a route appears in nav and in the base list.
  const unique = Array.from(new Set(routes));
  const now = new Date();
  return unique.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}/`,
    lastModified: now,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
