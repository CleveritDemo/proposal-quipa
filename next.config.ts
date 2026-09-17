import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/proposal-quipa" : undefined,
  assetPrefix: isGithubPages ? "/proposal-quipa" : undefined,
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/brand/og-imagen-*.png",
        search: "?v=2",
      },
      {
        pathname: "/brand/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
