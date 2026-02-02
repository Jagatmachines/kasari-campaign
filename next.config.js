/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: '/kasari-campaign',
  assetPrefix: '/kasari-campaign',
  trailingSlash: true,
};

export default nextConfig;
