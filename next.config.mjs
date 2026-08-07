import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Static Export para Hostinger (hospedagem compartilhada).
 *
 * Usa .mjs (não .ts) para evitar a compilação do next.config via SWC
 * — o ambiente de build da Hostinger tem GLIBC antigo e falha com next.config.ts.
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Evita o Next subir até pastas fora do repo (ex.: package-lock na home)
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
