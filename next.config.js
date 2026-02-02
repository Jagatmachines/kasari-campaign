/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: '/kasari-campaign', // Add your repository name here, including the leading slash
  assetPrefix: '/kasari-campaign/', // Optional: can also be used for static assets
};

export default nextConfig;
