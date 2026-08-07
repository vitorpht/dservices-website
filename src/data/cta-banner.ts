import type { CtaBannerContent } from "@/types/cta-banner";

import { ctaNav } from "./navigation";

export const homeCtaBanner: CtaBannerContent = {
  title: "Pronto para um espaço impecável?",
  description:
    "Peça um orçamento sem compromisso por WhatsApp e descubra como a D.Services pode elevar o padrão de limpeza do seu escritório ou residência.",
  cta: {
    label: ctaNav.label,
    href: ctaNav.href,
  },
  image: {
    src: "/images/cta.jpg",
    alt: "Interior moderno e luminoso com acabamento premium",
  },
};
