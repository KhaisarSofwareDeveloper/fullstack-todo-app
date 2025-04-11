/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false,
    // If you previously added webpackBuild: true, you can keep it
    // webpackBuild: true,
  },
};

module.exports = nextConfig;