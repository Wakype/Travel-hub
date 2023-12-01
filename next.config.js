/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wallpaperaccess.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images2.alphacoders.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
