/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — Hostinger serve a pasta `out/`
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
