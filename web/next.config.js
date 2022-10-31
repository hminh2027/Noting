/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
    // EXAMPLE_API_URL: process.env.EXAMPLE_API_URL,
  },
};

module.exports = nextConfig;
