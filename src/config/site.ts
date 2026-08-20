import { company, getFullAddress } from "@/data/company";
import { colors } from "@/lib/design-system";

/**
 * URL canónica do site.
 * Define NEXT_PUBLIC_SITE_URL no .env.production / Hostinger antes do deploy.
 */
export const siteConfig = {
  name: "D.Services Limpezas",
  legalName: company.legalName,
  shortName: "D.Services",
  description:
    "Empresa de limpeza profissional na Figueira da Foz. Limpeza de escritórios, residências, pós-obra e manutenção contínua — com qualidade, confiança e pontualidade.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dservices.pt").replace(/\/$/, ""),
  locale: "pt_PT",
  language: "pt",
  keywords: [
    "limpeza Figueira da Foz",
    "empresa de limpeza Figueira da Foz",
    "empresa de limpeza Coimbra",
    "limpeza de escritórios Figueira da Foz",
    "limpeza residencial Figueira da Foz",
    "limpeza pós-obra",
    "limpeza de condomínios",
    "limpeza comercial",
    "limpeza industrial",
    "orçamento limpeza",
    "D.Services Limpezas",
    "serviços de limpeza Portugal",
  ],
  ogImage: "/images/og.jpg",
  /** Ícone quadrado da marca — usado em Schema.org e manifest */
  brandLogo: "/images/brand/icon-512.png",
  themeColor: colors.primary,
  address: company.address,
  fullAddress: getFullAddress(),
  nif: company.nif,
  foundedYear: company.foundedYear,
  geo: {
    /** Av. Dr. Manuel Gaspar de Lemos, Figueira da Foz */
    latitude: 40.150593,
    longitude: -8.861856,
  },
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
