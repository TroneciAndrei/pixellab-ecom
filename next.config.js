/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com"],
    allowFutureImage: true,
    layoutRaw: true,
  },
};

module.exports = nextConfig;
