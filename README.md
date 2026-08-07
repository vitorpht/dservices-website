# D.Services Site

Site estático com Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS v4 — pronto para deploy na Hostinger via **Static Export**.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- Lucide React, Framer Motion, Sonner
- React Hook Form + Zod + `@hookform/resolvers`
- clsx, tailwind-merge, class-variance-authority
- Embla Carousel
- ESLint + Prettier
- Fonte Inter (`next/font`)

## Scripts

```bash
npm run dev          # desenvolvimento (Turbopack)
npm run build        # gera a pasta out/ para Hostinger
npm run lint         # ESLint
npm run format       # Prettier
npm run typecheck    # TypeScript
```

## Deploy na Hostinger

1. `npm run build`
2. Envie o conteúdo da pasta `out/` para `public_html` (ou subpasta do domínio)

## Notas de compatibilidade

- `output: "export"` — site 100% estático
- `images.unoptimized: true` — necessário sem servidor de otimização de imagens
- `trailingSlash: true` — melhor suporte em Apache/cPanel
- Sem API Routes / Server Actions que dependam de servidor Node
