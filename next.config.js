/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "cdn.sanity.io",
    ],
    loader: "default",
  },
};

module.exports = nextConfig;
