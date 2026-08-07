"use client";

import { Phone } from "lucide-react";
import type { VariantProps } from "class-variance-authority";

import { TrackedLink } from "@/components/marketing/tracked-link";
import { buttonVariants } from "@/components/ui/button";
import { getPhone } from "@/data/company";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type PhoneCtaProps = {
  location: string;
  label?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  showNumber?: boolean;
  showIcon?: boolean;
  onClick?: () => void;
};

function PhoneCta({
  location,
  label = "Ligar agora",
  variant = "accent",
  size = "lg",
  className,
  showNumber = false,
  showIcon = true,
  onClick,
}: PhoneCtaProps) {
  const phone = getPhone();

  if (!phone) {
    return (
      <TrackedLink
        href="/contacto/"
        eventLocation={location}
        eventLabel={label}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size }), className)}
      >
        {showIcon ? <Phone className="size-4" /> : null}
        {label}
      </TrackedLink>
    );
  }

  const text = showNumber ? phone.display : label;

  return (
    <a
      href={phone.href}
      data-cta={location}
      data-cta-label={text}
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={() => {
        trackEvent("phone_click", {
          location,
          label: text,
          phone: phone.display,
        });
        onClick?.();
      }}
    >
      {showIcon ? <Phone className="size-4" /> : null}
      {text}
    </a>
  );
}

export { PhoneCta };
export type { PhoneCtaProps };
