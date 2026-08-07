"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { trackCtaClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventLocation: string;
  eventLabel: string;
};

function TrackedLink({
  eventLocation,
  eventLabel,
  href,
  className,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  const hrefValue = typeof href === "string" ? href : href.toString();

  return (
    <Link
      href={href}
      className={cn(className)}
      data-cta={eventLocation}
      data-cta-label={eventLabel}
      onClick={(event) => {
        trackCtaClick(eventLocation, eventLabel, hrefValue);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

export { TrackedLink };
export type { TrackedLinkProps };
