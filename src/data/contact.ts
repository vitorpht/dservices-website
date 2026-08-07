import { company, getFullAddress, getPhone } from "@/data/company";

export const contactPage = {
  title: "Contacto",
  eyebrow: "Contacto direto",
  headline: "Fale connosco por telefone",
  description:
    "Na D.Services Limpezas o contacto é simples e direto: ligue-nos para informações, esclarecimentos ou pedidos de orçamento na Figueira da Foz e arredores.",
  seoDescription:
    "Contacto telefónico D.Services Limpezas na Figueira da Foz. Ligue para pedir orçamento de limpeza residencial, escritórios, condomínios e pós-obra.",
  trust: [
    { value: "Telefone", label: "Único canal de contacto" },
    { value: "Desde 2008", label: "Experiência no setor" },
    { value: "Figueira da Foz", label: "Atuação local" },
  ],
  steps: [
    {
      title: "Ligue-nos",
      description: "Fale diretamente com a nossa equipa e explique o que precisa.",
    },
    {
      title: "Esclareça o serviço",
      description:
        "Indicamos a melhor solução para o seu espaço — habitação, empresa ou pós-obra.",
    },
    {
      title: "Receba o orçamento",
      description:
        "Apresentamos uma proposta clara, sem compromisso e adaptada às suas necessidades.",
    },
  ],
  map: {
    title: "A nossa localização",
    subtitle: "Figueira da Foz, Coimbra — Portugal",
    embedUrl:
      "https://www.google.com/maps?q=40.150593,-8.861856&z=16&output=embed",
    externalUrl: "https://www.google.com/maps?q=40.150593,-8.861856",
  },
} as const;

export function getContactInfo() {
  const phone = getPhone();

  return {
    phone,
    address: {
      label: "Morada",
      value: getFullAddress(),
      href: contactPage.map.externalUrl,
    },
    company: {
      label: "Empresa",
      value: `${company.legalName} · NIF ${company.nif}`,
    },
  };
}
