/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.buymeacoffee.com"],
  },
};

module.exports = nextConfig;
