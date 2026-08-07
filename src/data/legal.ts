export type LegalLink = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * Links legais para o rodapé (site institucional / apresentação).
 */
export const legalNav: LegalLink[] = [
  {
    label: "Política de Privacidade",
    href: "/politica-de-privacidade/",
  },
  {
    label: "Política de Cookies",
    href: "/politica-de-cookies/",
  },
  {
    label: "Termos e Condições",
    href: "/termos-e-condicoes/",
  },
];