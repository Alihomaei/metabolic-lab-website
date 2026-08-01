// -----------------------------------------------------------------------------
// ASSET PATH HELPER
//
// On GitHub Pages a project repo is served from a sub-path
// (e.g. https://alihomaei.github.io/metabolic-lab-website/), so every URL needs
// that prefix. Next.js adds it automatically for <Link> and for its own /_next
// bundles, but NOT for raw <img src> / <video src> strings. Anything in
// /public that we reference by hand must go through asset().
//
// NEXT_PUBLIC_BASE_PATH is set by the deploy workflow. It is empty for local
// dev and for a custom domain, so asset() is a no-op there.
// -----------------------------------------------------------------------------

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public path with the deploy base path. Leaves absolute URLs alone. */
export function asset(path: string): string {
  if (!path) return path;
  // Already absolute (http://, https://, //cdn, data:) - leave untouched.
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
