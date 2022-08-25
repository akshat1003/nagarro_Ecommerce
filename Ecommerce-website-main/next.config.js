/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["m.media-amazon.com", "4.imimg.com"],
  },
};

module.exports = nextConfig;
