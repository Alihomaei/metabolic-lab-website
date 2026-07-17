/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // If deploying to GitHub Pages under a repo path, uncomment:
  // basePath: "/your-repo-name",
};

export default nextConfig;
