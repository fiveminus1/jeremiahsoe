import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  basePath: isProd ? `/jeremiahsoe` : '',
  assetPrefix: isProd ? `/jeremiahsoe` : '',
  images: {
    unoptimized: true,
  },
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

export default withMDX(nextConfig);
