// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});


const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  basePath: isProd ? `/jeremiahsoe` : '',
  assetPrefix: isProd ? `/jeremiahsoe` : '',
  images: {
    unoptimized: true,
  },
};


export default withMDX(nextConfig);
