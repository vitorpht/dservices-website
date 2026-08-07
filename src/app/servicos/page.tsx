import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections";
import { ServicesPageHero } from "@/components/sections/services-page-hero";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { JsonLd } from "@/components/seo/json-ld";
import { services } from "@/data/services";
import {
  breadcrumbJsonLd,
  buildMetadata,
  servicesJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Serviços de Limpeza",
  description:
    "Limpeza de escritórios, residências, pós-obra e manutenção contínua na Figueira da Foz. Conheça os serviços da D.Services Limpezas.",
  path: "/servicos/",
});

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/servicos/" },
        ])}
      />
      <JsonLd
        data={servicesJsonLd(
          services.map((service) => ({
            name: service.title,
            description: service.description,
            path: `/servicos/#${service.id}`,
          })),
        )}
      />

      <ServicesPageHero />
      <ServicesShowcase />
      <CtaBanner />
    </main>
  );
}
