"use client";

import type { LucideIcon } from "lucide-react";

import { trackEvent, type MarketingEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ContactChannelLinkProps = {
  href: string;
  label: string;
  value: string;
  icon: LucideIcon;
  eventName?: MarketingEvent;
  external?: boolean;
  className?: string;
};

function ContactChannelLink({
  href,
  label,
  value,
  icon: Icon,
  eventName,
  external = false,
  className,
}: ContactChannelLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      data-cta={`contact_${label.toLowerCase()}`}
      className={cn(
        "group flex items-start gap-4 rounded-lg border border-border/70 bg-surface p-4 transition-colors hover:border-secondary/40 hover:bg-secondary-soft",
        className,
      )}
      onClick={() => {
        if (eventName) {
          trackEvent(eventName, { label, value, href });
        }
      }}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary transition-colors group-hover:bg-secondary/15 group-hover:text-secondary">
        <Icon className="size-5 stroke-[1.75]" />
      </span>
      <span className="min-w-0">
        <span className="block typo-body-sm font-medium text-muted">{label}</span>
        <span className="mt-0.5 block typo-body font-semibold text-primary break-words">
          {value}
        </span>
      </span>
    </a>
  );
}

export { ContactChannelLink };
export type { ContactChannelLinkProps };
