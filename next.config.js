/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["user-images.githubusercontent.com"],
  },
  rewrites: [
    { source: "/blog/", destination: "https://www.layoutlogic.com/blog/" },
    {
      source: "/blog/:match*",
      destination: "https://www.layoutlogic.com/blog/:match*",
    },
    { source: "/", destination: "https://www.layoutlogic.com/" },
    {
      source: "/:match*",
      destination: "https://www.layoutlogic.com/:match*",
    },
  ],
};

module.exports = nextConfig;
