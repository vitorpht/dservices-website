import type { NextConfig } from "next";
import path from "path";

/**
 * Static Export para Hostinger (hospedagem compartilhada).
 * - Gera a pasta `out/` no build
 * - `images.unoptimized` é obrigatório sem servidor de otimização
 * - `trailingSlash` melhora compatibilidade com Apache/cPanel
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    // Evita o Turbopack subir até a home do utilizador (ex.: package-lock.json em C:\Users\...)
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
