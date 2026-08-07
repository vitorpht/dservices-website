"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { WhatsAppCta } from "@/components/marketing/whatsapp-cta";
import { Container } from "@/components/ui/container";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function ServicesShowcase() {
  return (
    <section aria-label="Lista de serviços" className="bg-surface">
      {services.map((service, index) => {
        const imageLeft = index % 2 === 1;
        const number = String(index + 1).padStart(2, "0");

        return (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-b border-border/50 last:border-b-0"
          >
            <Container className="py-14 sm:py-16 lg:py-20">
              <div
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-12 lg:gap-14",
                )}
              >
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, ease }}
                  className={cn(
                    "lg:col-span-5",
                    imageLeft ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <p className="font-medium tabular-nums tracking-tight text-accent sm:text-lg">
                    {number}
                  </p>
                  <h2 className="mt-3 typo-h2 text-balance text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-md typo-body text-muted">
                    {service.description}
                  </p>

                  <ul
                    className="mt-8 space-y-0 border-t border-border/70"
                    aria-label={`Inclui — ${service.title}`}
                  >
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="border-b border-border/70 py-3.5 typo-body-sm text-foreground"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <WhatsAppCta
                      location={`services_page_${service.id}`}
                      label={service.cta.label}
                      variant="outline"
                      size="md"
                      className="w-full sm:w-auto"
                      showIcon={false}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.08, ease }}
                  className={cn(
                    "relative lg:col-span-7",
                    imageLeft ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3]">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"
                    />
                  </div>
                </motion.div>
              </div>
            </Container>
          </article>
        );
      })}
    </section>
  );
}

export { ServicesShowcase };
