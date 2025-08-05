import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  basePath: isProd ? `/jeremiahsoe` : '',
  assetPrefix: isProd ? `/jeremiahsoe` : '',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@next/mdx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

module.exports = withMDX(nextConfig);
