import type { HeroContent } from "@/types/hero";

import { ctaNav } from "./navigation";

export const homeHero: HeroContent = {
  title: "Limpeza profissional com excelência e confiança",
  subtitle:
    "Empresa de limpeza na Figueira da Foz — soluções premium para escritórios, residências e pós-obra, com equipas especializadas e resultados impecáveis.",
  cta: {
    label: ctaNav.label,
    href: ctaNav.href,
  },
  image: {
    src: "/images/hero.jpg",
    alt: "Serviços de limpeza profissional D.Services Limpezas na Figueira da Foz",
  },
};
