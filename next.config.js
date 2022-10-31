/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "images.unsplash.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
