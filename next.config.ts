import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
