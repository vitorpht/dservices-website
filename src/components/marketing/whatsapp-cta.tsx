"use client";

import { MessageCircle } from "lucide-react";
import type { VariantProps } from "class-variance-authority";

import { useContactMethodChooser } from "@/components/marketing/contact-method-chooser";
import { TrackedLink } from "@/components/marketing/tracked-link";
import { buttonVariants } from "@/components/ui/button";
import { getPhone, getWhatsApp } from "@/data/company";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type WhatsAppCtaProps = {
  location: string;
  label?: string;
  message?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  showIcon?: boolean;
  onClick?: () => void;
};

function WhatsAppCta({
  location,
  label = "Pedir Orçamento",
  message,
  variant = "accent",
  size = "lg",
  className,
  showIcon = true,
  onClick,
}: WhatsAppCtaProps) {
  const { openContactMethods } = useContactMethodChooser();
  const phone = getPhone();
  const whatsapp = getWhatsApp(message);
  const classes = cn(buttonVariants({ variant, size }), className);

  if (!phone || !whatsapp) {
    return (
      <TrackedLink
        href="/contacto/"
        eventLocation={location}
        eventLabel={label}
        onClick={onClick}
        className={classes}
      >
        {showIcon ? <MessageCircle className="size-4" /> : null}
        {label}
      </TrackedLink>
    );
  }

  return (
    <>
      {/* Desktop: WhatsApp direto */}
      <a
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        data-cta={location}
        data-cta-label={label}
        className={cn(classes, "hidden lg:inline-flex")}
        onClick={() => {
          trackEvent("whatsapp_click", {
            location,
            label,
            phone: whatsapp.display,
          });
          onClick?.();
        }}
      >
        {showIcon ? <MessageCircle className="size-4" /> : null}
        {label}
      </a>

      {/* Mobile: escolher ligação ou WhatsApp */}
      <button
        type="button"
        data-cta={location}
        data-cta-label={label}
        className={cn(classes, "lg:hidden")}
        onClick={() => {
          openContactMethods({ location, label, message });
          onClick?.();
        }}
      >
        {showIcon ? <MessageCircle className="size-4" /> : null}
        {label}
      </button>
    </>
  );
}

export { WhatsAppCta };
export type { WhatsAppCtaProps };
