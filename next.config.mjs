/** @type {import('next').NextConfig} */

// Set by the GitHub Pages workflow to "/<repo-name>" so the site works from a
// project sub-path. Empty locally and on a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
