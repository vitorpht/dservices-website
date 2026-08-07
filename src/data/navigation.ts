import { getWhatsApp } from "@/data/company";

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos/" },
  { label: "Sobre Nós", href: "/sobre/" },
  { label: "Contacto", href: "/contacto/" },
];

/** CTA principal — abre WhatsApp com mensagem de orçamento */
export function getQuoteCta() {
  const whatsapp = getWhatsApp();

  return {
    label: "Pedir Orçamento",
    href: whatsapp?.href ?? "/contacto/",
    isWhatsApp: Boolean(whatsapp),
  } as const;
}

export const ctaNav = {
  label: "Pedir Orçamento",
  get href() {
    return getQuoteCta().href;
  },
} as const;
