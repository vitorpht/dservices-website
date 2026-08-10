"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { Button } from "@/components/ui/button";
import { getPhone, getWhatsApp } from "@/data/company";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ContactMethodOpenOptions = {
  location: string;
  label?: string;
  message?: string;
};

type ContactMethodChooserContextValue = {
  openContactMethods: (options: ContactMethodOpenOptions) => void;
};

const ContactMethodChooserContext =
  createContext<ContactMethodChooserContextValue | null>(null);

function useContactMethodChooser() {
  const context = useContext(ContactMethodChooserContext);
  if (!context) {
    throw new Error(
      "useContactMethodChooser must be used within ContactMethodChooserProvider",
    );
  }
  return context;
}

function ContactMethodChooserProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<ContactMethodOpenOptions | null>(null);
  const open = Boolean(options);
  const titleId = useId();

  const phone = getPhone();
  const whatsapp = getWhatsApp(options?.message);

  const openContactMethods = useCallback((next: ContactMethodOpenOptions) => {
    setOptions(next);
  }, []);

  const close = useCallback(() => setOptions(null), []);

  const value = useMemo(
    () => ({ openContactMethods }),
    [openContactMethods],
  );

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <ContactMethodChooserContext.Provider value={value}>
      {children}

      <AnimatePresence>
        {open && options && phone && whatsapp ? (
          <div className="fixed inset-0 z-[110]" role="presentation">
            <motion.button
              type="button"
              aria-label="Fechar"
              className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className={cn(
                "absolute inset-x-0 bottom-0 mx-auto w-full max-w-md",
                "rounded-t-2xl border border-border bg-surface shadow-elevated",
                "sm:bottom-8 sm:rounded-2xl",
              )}
              initial={{ y: "100%", opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
            >
              <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
                <div className="min-w-0">
                  <p
                    id={titleId}
                    className="typo-body font-semibold text-primary"
                  >
                    Como prefere contactar-nos?
                  </p>
                  <p className="mt-1 typo-body-sm text-muted">
                    Escolha ligação direta ou WhatsApp.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="Fechar"
                  className="size-10 shrink-0"
                  onClick={close}
                >
                  <X className="size-5" />
                </Button>
              </div>

              <div className="flex flex-col gap-3 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <a
                  href={phone.href}
                  data-cta={`${options.location}_call`}
                  className={cn(
                    "flex items-center gap-4 rounded-lg border border-border/70 bg-surface p-4",
                    "transition-colors hover:border-secondary/40 hover:bg-secondary-soft",
                  )}
                  onClick={() => {
                    trackEvent("phone_click", {
                      location: options.location,
                      label: options.label ?? "Pedir Orçamento",
                      phone: phone.display,
                      method: "call",
                    });
                    close();
                  }}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                    <Phone className="size-5 stroke-[1.75]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block typo-body font-semibold text-primary">
                      Ligação direta
                    </span>
                    <span className="mt-0.5 block typo-body-sm text-muted">
                      Ligar para {phone.display}
                    </span>
                  </span>
                </a>

                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`${options.location}_whatsapp`}
                  className={cn(
                    "flex items-center gap-4 rounded-lg border border-border/70 bg-surface p-4",
                    "transition-colors hover:border-secondary/40 hover:bg-secondary-soft",
                  )}
                  onClick={() => {
                    trackEvent("whatsapp_click", {
                      location: options.location,
                      label: options.label ?? "Pedir Orçamento",
                      phone: whatsapp.display,
                      method: "whatsapp",
                    });
                    close();
                  }}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                    <MessageCircle className="size-5 stroke-[1.75]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block typo-body font-semibold text-primary">
                      Enviar no WhatsApp
                    </span>
                    <span className="mt-0.5 block typo-body-sm text-muted">
                      Mensagem já preparada para {whatsapp.display}
                    </span>
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </ContactMethodChooserContext.Provider>
  );
}

export {
  ContactMethodChooserProvider,
  useContactMethodChooser,
};
export type { ContactMethodOpenOptions };
