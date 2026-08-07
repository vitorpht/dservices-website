import type { AboutContent } from "@/types/about";

export const aboutContent: AboutContent = {
  title: "Sobre Nós",
  paragraphs: [
    "A D.Services Limpezas, Lda atua no setor das limpezas desde 2008, prestando serviços profissionais na Figueira da Foz e arredores para clientes particulares e empresas.",
    "Ao longo dos anos, construímos uma reputação assente na confiança, no profissionalismo e na atenção ao detalhe, oferecendo soluções de limpeza adaptadas às necessidades de cada cliente.",
    "Realizamos serviços de limpeza em habitações particulares, escritórios, escritórios empresariais, centros comerciais, condomínios, espaços comerciais e outros tipos de instalações, assegurando sempre um elevado padrão de qualidade, rigor e eficiência.",
    "O nosso compromisso é proporcionar espaços limpos, organizados e acolhedores, contribuindo para o bem-estar, conforto e produtividade de quem os utiliza diariamente.",
  ],
  image: {
    src: "/images/about.jpg",
    alt: "Equipa da D.Services Limpezas — serviços de limpeza profissional na Figueira da Foz",
  },
  highlights: [
    { value: "2008", label: "Ano de fundação" },
    { value: "Figueira da Foz", label: "Área de atuação" },
    { value: "Particulares & Empresas", label: "Clientes" },
  ],
};
