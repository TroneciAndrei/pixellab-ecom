/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  experimental: {
    images: {
      layoutRaw: true,
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
