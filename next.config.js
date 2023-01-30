/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "user-images.githubusercontent.com",
    ],
    loader: "default",
  },
};

module.exports = nextConfig;
