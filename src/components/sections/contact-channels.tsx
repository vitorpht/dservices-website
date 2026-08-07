"use client";

import { Building2, MapPin, Phone } from "lucide-react";

import { ContactChannelLink } from "@/components/marketing/contact-channel-link";
import { getContactInfo } from "@/data/contact";

function ContactChannels() {
  const info = getContactInfo();

  return (
    <div className="space-y-3">
      {info.phone ? (
        <ContactChannelLink
          href={info.phone.href}
          label="Telefone"
          value={info.phone.display}
          icon={Phone}
          eventName="phone_click"
        />
      ) : null}

      <ContactChannelLink
        href={info.address.href}
        label={info.address.label}
        value={info.address.value}
        icon={MapPin}
        external
      />

      <div className="flex items-start gap-4 rounded-lg border border-border/70 bg-surface p-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
          <Building2 className="size-5 stroke-[1.75]" />
        </span>
        <div>
          <p className="typo-body-sm font-medium text-muted">
            {info.company.label}
          </p>
          <p className="mt-0.5 typo-body font-semibold text-primary">
            {info.company.value}
          </p>
        </div>
      </div>
    </div>
  );
}

export { ContactChannels };
