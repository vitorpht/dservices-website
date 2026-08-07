/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modo Next.js padrão (SSR/SSG) — Hostinger Node.js usa a pasta `.next`
  // e corre `next start`. Não usar `output: "export"` neste hosting.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
