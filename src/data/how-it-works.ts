import { howItWorksIcons } from "@/lib/icons/how-it-works";
import type { HowItWorksStep } from "@/types/how-it-works";

export const howItWorksSection = {
  title: "Como Funciona",
  subtitle:
    "Um processo simples e transparente, do primeiro contacto ao serviço concluído.",
} as const;

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "contacto",
    number: "01",
    title: "Contacte-nos",
    description:
      "Envie-nos uma mensagem no WhatsApp. Atendimento direto e rápido para o seu pedido.",
    icon: howItWorksIcons.phone,
  },
  {
    id: "visita",
    number: "02",
    title: "Agendamos uma Visita",
    description:
      "Visitamos o local para avaliar as suas necessidades e entender todos os detalhes.",
    icon: howItWorksIcons.mapPin,
  },
  {
    id: "orcamento",
    number: "03",
    title: "Receba o Orçamento",
    description:
      "Enviamos um orçamento gratuito, claro e sem compromisso. Sem surpresas.",
    icon: howItWorksIcons.quoteDoc,
  },
  {
    id: "servico",
    number: "04",
    title: "Serviço Realizado",
    description:
      "Executamos o serviço na data combinada com qualidade, eficiência e pontualidade. Espaço impecável!",
    icon: howItWorksIcons.doneBadge,
  },
];
