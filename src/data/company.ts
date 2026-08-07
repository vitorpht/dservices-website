/**
 * Dados públicos da D.Services Limpezas, Lda
 * Fonte: https://www.racius.com/d-services-limpezas-lda/
 */
export const company = {
  legalName: "D.Services Limpezas, Lda",
  brandName: "D.Services",
  nif: "508673879",
  foundedYear: 2008,
  legalForm: "Sociedade por Quotas",
  shareCapital: "€ 5.000,00",
  activity: "Prestação de Serviços de limpeza doméstica e industrial",
  address: {
    street: "Avenida Dr. Manuel Gaspar de Lemos, Nº 1, R/C Esquerdo",
    postalCode: "3080-184",
    city: "Figueira da Foz",
    district: "Coimbra",
    country: "Portugal",
  },
  /**
   * Contacto principal — telefone / WhatsApp.
   * Pode ser sobrescrito por NEXT_PUBLIC_CONTACT_PHONE / NEXT_PUBLIC_CONTACT_PHONE_TEL
   */
  phone: {
    display: "927 512 571",
    tel: "+351927512571",
  },
  whatsapp: {
    /** Mensagem pré-preenchida ao abrir o WhatsApp (orçamento) */
    defaultMessage:
      "Olá, D.Services Limpezas.\n\nEncontrei o vosso site e gostaria de solicitar um orçamento para um serviço de limpeza.\n\nAguardo o vosso contacto. Obrigado!",
  },
  developer: {
    name: "Victor Rodrigues",
    url: "https://victorrodrigues.dev/",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = company.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getPhone() {
  const display =
    process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || company.phone.display;
  const telRaw =
    process.env.NEXT_PUBLIC_CONTACT_PHONE_TEL?.trim() ||
    company.phone.tel ||
    display;

  if (!display && !telRaw) {
    return null;
  }

  let tel = telRaw.replace(/[^\d+]/g, "");
  if (!tel.startsWith("+") && tel.length === 9) {
    tel = `+351${tel}`;
  } else if (!tel.startsWith("+")) {
    tel = `+${tel}`;
  }

  return {
    display: display || telRaw,
    href: `tel:${tel}`,
    tel,
  };
}

/** Link wa.me para pedidos de orçamento */
export function getWhatsApp(message?: string) {
  const phone = getPhone();
  if (!phone) return null;

  const digits = phone.tel.replace(/\D/g, "");
  const text =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ||
    message ||
    company.whatsapp.defaultMessage;

  return {
    display: phone.display,
    href: `https://wa.me/${digits}?text=${encodeURIComponent(text)}`,
    digits,
    message: text,
  };
}
