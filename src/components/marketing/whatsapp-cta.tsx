"use client";

import { MessageCircle } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import type { MouseEvent } from "react";

import { useContactMethodChooser } from "@/components/marketing/contact-method-chooser";
import { TrackedLink } from "@/components/marketing/tracked-link";
import { buttonVariants } from "@/components/ui/button";
import { getPhone, getWhatsApp } from "@/data/company";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/** Alinhado com o breakpoint `lg` do Tailwind (1024px). */
const MOBILE_CONTACT_QUERY = "(max-width: 1023px)";

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

function isMobileViewport() {
  return window.matchMedia(MOBILE_CONTACT_QUERY).matches;
}

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

  if (!phone || !whatsapp) {
    return (
      <TrackedLink
        href="/contacto/"
        eventLocation={location}
        eventLabel={label}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size }), className)}
      >
        {showIcon ? <MessageCircle className="size-4" /> : null}
        {label}
      </TrackedLink>
    );
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isMobileViewport()) {
      event.preventDefault();
      openContactMethods({ location, label, message });
      onClick?.();
      return;
    }

    trackEvent("whatsapp_click", {
      location,
      label,
      phone: whatsapp.display,
    });
    onClick?.();
  };

  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={location}
      data-cta-label={label}
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={handleClick}
    >
      {showIcon ? <MessageCircle className="size-4" /> : null}
      {label}
    </a>
  );
}

export { WhatsAppCta };
export type { WhatsAppCtaProps };
