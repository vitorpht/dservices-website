import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

import { WhatsAppCta } from "@/components/marketing/whatsapp-cta";
import { ContactChannels } from "@/components/sections/contact-channels";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { getPhone, getWhatsApp } from "@/data/company";
import { contactPage } from "@/data/contact";
import {
  breadcrumbJsonLd,
  buildMetadata,
  contactPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description: contactPage.seoDescription,
  path: "/contacto/",
});

export default function ContactPage() {
  const phone = getPhone();
  const whatsapp = getWhatsApp();

  return (
    <main className="flex flex-1 flex-col">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Contacto", path: "/contacto/" },
        ])}
      />
      <JsonLd
        data={contactPageJsonLd({
          phone: phone?.display,
        })}
      />

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div aria-hidden className="brand-glow pointer-events-none absolute inset-0" />
        <Container className="relative py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="typo-caption text-accent">{contactPage.eyebrow}</p>
            <h1 className="mt-3 typo-h1 text-balance text-primary-foreground md:text-display">
              {contactPage.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl typo-body text-primary-foreground/80 sm:typo-body-lg">
              {contactPage.description}
            </p>

            {whatsapp ? (
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 text-balance font-semibold tracking-tight text-primary-foreground transition-opacity hover:opacity-90"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                <MessageCircle className="size-8 shrink-0 sm:size-10" aria-hidden />
                <span>{whatsapp.display}</span>
              </a>
            ) : null}

            <div className="mt-8 flex justify-center">
              <WhatsAppCta
                location="contact_hero"
                label="Pedir Orçamento"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {contactPage.trust.map((item) => (
              <li
                key={item.label}
                className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-4 text-center backdrop-blur-sm"
              >
                <p className="font-semibold text-primary-foreground">{item.value}</p>
                <p className="mt-1 typo-body-sm text-primary-foreground/70">{item.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-surface-muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:items-start">
            <div>
              <h2 className="typo-h3 text-primary">Como pedimos orçamento</h2>
              <p className="mt-2 typo-body text-muted">
                Sem formulários — envie uma mensagem no WhatsApp. Atendimento
                direto para particulares e empresas na Figueira da Foz e
                arredores.
              </p>

              <ol className="mt-8 space-y-5">
                {contactPage.steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="typo-body font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-1 typo-body-sm text-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8">
                <WhatsAppCta
                  location="contact_steps"
                  label="Pedir Orçamento"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            <aside>
              <h2 className="typo-h3 text-primary">Dados de contacto</h2>
              <p className="mt-2 typo-body text-muted">
                Preferimos WhatsApp para orçamentos. Também pode ligar ou ver a
                morada da empresa abaixo.
              </p>
              <div className="mt-6">
                <ContactChannels />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="contact-map-title"
        className="section-padding bg-surface"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="contact-map-title" className="typo-h2 text-primary">
              {contactPage.map.title}
            </h2>
            <p className="mt-3 typo-body text-muted">{contactPage.map.subtitle}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-border/70 shadow-card sm:mt-10">
            <iframe
              title="Mapa da localização da D.Services Limpezas na Figueira da Foz"
              src={contactPage.map.embedUrl}
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-4 text-center typo-body-sm text-muted">
            <a
              href={contactPage.map.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-secondary hover:underline"
            >
              Abrir no Google Maps
            </a>
          </p>
        </Container>
      </section>
    </main>
  );
}
