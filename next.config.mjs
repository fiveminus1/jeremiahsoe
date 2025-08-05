import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

/** @type (import('next').NextConfig) */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
};



export default withMDX(nextConfig);
