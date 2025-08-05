import type { NextConfig } from "next";
import createMDX from '@next/mdx';

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

const withMDX = createMDX({
  extension: /\.mdx$/,
});

export default withMDX(nextConfig);
