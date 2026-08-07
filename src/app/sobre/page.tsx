import type { Metadata } from "next";

import { About, CtaBanner } from "@/components/sections";
import { JsonLd } from "@/components/seo/json-ld";
import { aboutContent } from "@/data/about";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sobre Nós",
  description:
    "A D.Services Limpezas, Lda atua desde 2008 na Figueira da Foz e arredores, com serviços de limpeza para particulares e empresas.",
  path: "/sobre/",
});

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Sobre Nós", path: "/sobre/" },
        ])}
      />
      <About content={aboutContent} />
      <CtaBanner />
    </main>
  );
}
