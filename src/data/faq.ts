export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqSection = {
  title: "Perguntas Frequentes",
  subtitle:
    "Respostas claras às dúvidas mais comuns sobre os nossos serviços de limpeza.",
} as const;

export const faqItems: FaqItem[] = [
  {
    id: "area",
    question: "Em que zonas atuam?",
    answer:
      "Prestamos serviços na Figueira da Foz e arredores, para clientes particulares e empresas. Se estiver noutra localidade próxima, contacte-nos para confirmarmos disponibilidade.",
  },
  {
    id: "orcamento",
    question: "O orçamento é gratuito?",
    answer:
      "Sim. Avaliamos as suas necessidades e enviamos uma proposta clara, sem compromisso e sem surpresas.",
  },
  {
    id: "servicos",
    question: "Que tipos de limpeza realizam?",
    answer:
      "Realizamos limpeza de habitações, escritórios, espaços comerciais, condomínios, centros comerciais, limpeza pós-obra e manutenção contínua.",
  },
  {
    id: "agendamento",
    question: "Como funciona o agendamento?",
    answer:
      "Após o contacto, agendamos uma visita ou recolhemos os detalhes necessários, enviamos o orçamento e marcamos o serviço na data combinada.",
  },
  {
    id: "empresas",
    question: "Trabalham com empresas e contratos regulares?",
    answer:
      "Sim. Temos soluções pontuais e planos de manutenção contínua adaptados a escritórios, lojas e outros espaços empresariais.",
  },
  {
    id: "produtos",
    question: "Utilizam produtos seguros?",
    answer:
      "Sim. Utilizamos produtos profissionais adequados a cada espaço, com atenção à eficácia, segurança e boas práticas ambientais sempre que possível.",
  },
];
