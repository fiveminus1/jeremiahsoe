import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: `/jeremiahsoe`,
  assetPrefix: `/jeremiahsoe`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
