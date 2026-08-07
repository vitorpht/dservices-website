import type { Metadata } from "next";

import {
  CtaBanner,
  Faq,
  Hero,
  HowItWorks,
  Services,
  WhyUs,
} from "@/components/sections";
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/data/faq";
import { homeHero } from "@/data/hero";
import { services } from "@/data/services";
import { buildMetadata, faqJsonLd, servicesJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Limpeza Profissional na Figueira da Foz",
  description:
    "D.Services Limpezas — limpeza de escritórios, residências, pós-obra e manutenção na Figueira da Foz. Qualidade, confiança e pontualidade desde 2008.",
  path: "/",
});

export default function Home() {
  const servicesSchema = servicesJsonLd(
    services.map((service) => ({
      name: service.title,
      description: service.description,
      path: `/servicos/#${service.id}`,
    })),
  );

  return (
    <main className="flex flex-1 flex-col">
      <JsonLd data={servicesSchema} />
      <JsonLd
        data={faqJsonLd(
          faqItems.map((item) => ({
            question: item.question,
            answer: item.answer,
          })),
        )}
      />
      <Hero content={homeHero} />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Faq />
      <CtaBanner />
    </main>
  );
}
