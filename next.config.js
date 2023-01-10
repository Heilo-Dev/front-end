/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl: process.env.API_URL,
  },
  swcMinify: true,
};

module.exports = nextConfig;
