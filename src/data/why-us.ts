import {
  Award,
  Clock3,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

import type { WhyUsItem } from "@/types/why-us";

export const whyUsSection = {
  title: "Porquê Escolher a D.Services",
  subtitle:
    "Compromisso com qualidade, confiança e resultados consistentes em cada intervenção.",
} as const;

export const whyUsItems: WhyUsItem[] = [
  {
    id: "equipa",
    title: "Equipa Especializada",
    description:
      "Profissionais formados e supervisionados, com atenção ao detalhe em cada espaço.",
    icon: Users,
  },
  {
    id: "confianca",
    title: "Confiança e Segurança",
    description:
      "Processos claros, equipas identificadas e total respeito pela sua privacidade.",
    icon: ShieldCheck,
  },
  {
    id: "pontualidade",
    title: "Pontualidade",
    description:
      "Cumprimos horários e planos acordados, sem interrupções desnecessárias ao seu dia.",
    icon: Clock3,
  },
  {
    id: "sustentavel",
    title: "Produtos Responsáveis",
    description:
      "Utilizamos soluções eficazes e mais amigas do ambiente, sem comprometer a qualidade.",
    icon: Leaf,
  },
  {
    id: "qualidade",
    title: "Qualidade Consistente",
    description:
      "Padrões elevados em todas as visitas, com resultados visíveis e duradouros.",
    icon: Award,
  },
  {
    id: "parceria",
    title: "Parceria de Longo Prazo",
    description:
      "Acompanhamento próximo e resposta rápida às necessidades da sua empresa ou casa.",
    icon: HeartHandshake,
  },
];
