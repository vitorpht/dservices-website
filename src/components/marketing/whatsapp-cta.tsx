"use client";

import { MessageCircle } from "lucide-react";
import type { VariantProps } from "class-variance-authority";

import { TrackedLink } from "@/components/marketing/tracked-link";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsApp } from "@/data/company";
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
  const whatsapp = getWhatsApp(message);

  if (!whatsapp) {
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

  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={location}
      data-cta-label={label}
      className={cn(buttonVariants({ variant, size }), className)}
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
  );
}

export { WhatsAppCta };
export type { WhatsAppCtaProps };
