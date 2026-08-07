import type { Metadata } from "next";

import { WhatsAppCta } from "@/components/marketing/whatsapp-cta";
import { TrackedLink } from "@/components/marketing/tracked-link";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getWhatsApp } from "@/data/company";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Pedir Orçamento",
  description:
    "Peça um orçamento gratuito de limpeza na Figueira da Foz por WhatsApp. Resposta rápida, proposta clara e sem compromisso.",
  path: "/orcamento/",
});

export default function QuotePage() {
  const whatsapp = getWhatsApp();

  return (
    <main className="flex flex-1 flex-col bg-surface-muted">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Pedir Orçamento", path: "/orcamento/" },
        ])}
      />

      <Container className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <p className="typo-caption text-secondary">Orçamento gratuito</p>
          <h1 className="mt-2 typo-h1 text-primary">Pedir Orçamento</h1>
          <p className="mt-4 typo-body-lg text-muted">
            Orçamento sem compromisso — envie-nos uma mensagem no WhatsApp e
            diga-nos o que precisa. Atendimento direto na Figueira da Foz e
            arredores.
          </p>

          {whatsapp ? (
            <p className="mt-8 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {whatsapp.display}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppCta
              location="orcamento_page"
              label="Pedir Orçamento"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
            />
            <TrackedLink
              href="/contacto/"
              eventLocation="orcamento_page"
              eventLabel="Ver contacto"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto",
              )}
            >
              Ver contacto
            </TrackedLink>
          </div>
        </div>
      </Container>
    </main>
  );
}
