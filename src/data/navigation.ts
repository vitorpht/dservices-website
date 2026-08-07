import { getPhone } from "@/data/company";

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

/** CTA principal — liga por telefone quando o número está definido */
export function getQuoteCta() {
  const phone = getPhone();

  return {
    label: "Pedir Orçamento",
    href: phone?.href ?? "/contacto/",
    isPhone: Boolean(phone),
  } as const;
}

/** Compatibilidade com imports estáticos (href aponta para contacto se sem telefone) */
export const ctaNav = {
  label: "Pedir Orçamento",
  get href() {
    return getQuoteCta().href;
  },
} as const;
