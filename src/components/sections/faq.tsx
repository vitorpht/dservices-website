"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { faqItems, faqSection, type FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

type FaqProps = {
  items?: FaqItem[];
  title?: string;
  subtitle?: string;
  className?: string;
};

function Faq({
  items = faqItems,
  title = faqSection.title,
  subtitle = faqSection.subtitle,
  className,
}: FaqProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className={cn("section-padding bg-surface", className)}
    >
      <Container className="max-w-3xl">
        <div className="text-center">
          <h2 id="faq-title" className="typo-h2 text-primary">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 typo-body text-muted sm:mt-4 sm:typo-body-lg">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-8 divide-y divide-border rounded-xl border border-border/70 bg-surface-muted sm:mt-12">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="px-5 sm:px-6">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span className="typo-body font-semibold text-primary">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-secondary transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 typo-body-sm text-muted">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export { Faq };
export type { FaqProps };
