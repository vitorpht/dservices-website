import type { ServiceItem } from "@/types/service";

export const servicesSection = {
  title: "Os Nossos Serviços",
  subtitle:
    "Soluções de limpeza adaptadas a cada espaço, com rigor, discrição e resultados consistentes.",
} as const;

export const services: ServiceItem[] = [
  {
    id: "escritorios",
    title: "Limpeza de Escritórios",
    description:
      "Ambientes de trabalho impecáveis que reforçam a imagem da sua empresa e o bem-estar da equipa.",
    benefits: [
      "Planos diários, semanais ou personalizados",
      "Produtos profissionais e ecológicos",
      "Equipas formadas e supervisionadas",
      "Horários flexíveis sem interromper o negócio",
    ],
    image: {
      src: "/images/services/escritorios.jpg",
      alt: "Escritório moderno e luminoso após limpeza profissional",
    },
    cta: {
      label: "Pedir Orçamento",
      href: "/contacto/",
    },
  },
  {
    id: "residencias",
    title: "Limpeza Residencial",
    description:
      "Cuidamos da sua casa com atenção ao detalhe, para que desfrute de um espaço limpo, fresco e acolhedor.",
    benefits: [
      "Limpeza profunda ou de manutenção",
      "Cozinhas, casas de banho e zonas comuns",
      "Materiais e métodos seguros para a família",
      "Agendamento simples e pontualidade",
    ],
    image: {
      src: "/images/services/residencias.jpg",
      alt: "Interior residencial limpo e organizado",
    },
    cta: {
      label: "Pedir Orçamento",
      href: "/contacto/",
    },
  },
  {
    id: "pos-obra",
    title: "Limpeza Pós-Obra",
    description:
      "Remoção de resíduos e pó de obra para entregar o espaço pronto a usar, com acabamento profissional.",
    benefits: [
      "Remoção de pó, tinta e resíduos",
      "Limpeza de superfícies e vidros",
      "Preparação para habitação ou abertura",
      "Equipamento adequado a obras recentes",
    ],
    image: {
      src: "/images/services/pos-obra.jpg",
      alt: "Espaço em fase de acabamento pronto para limpeza pós-obra",
    },
    cta: {
      label: "Pedir Orçamento",
      href: "/contacto/",
    },
  },
  {
    id: "manutencao",
    title: "Manutenção Contínua",
    description:
      "Contratos de manutenção para manter o seu espaço sempre apresentável, com qualidade constante.",
    benefits: [
      "Visitas regulares e checklists claros",
      "Relatórios de acompanhamento",
      "Resposta rápida a necessidades pontuais",
      "Parceria de confiança a longo prazo",
    ],
    image: {
      src: "/images/services/manutencao.jpg",
      alt: "Profissional de limpeza em manutenção contínua de um espaço",
    },
    cta: {
      label: "Pedir Orçamento",
      href: "/contacto/",
    },
  },
];