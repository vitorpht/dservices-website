import { Check } from "lucide-react";
import Image from "next/image";

import { WhatsAppCta } from "@/components/marketing/whatsapp-cta";
import { cn } from "@/lib/utils";
import type { ServiceCardImagePosition, ServiceItem } from "@/types/service";

type ServiceCardProps = {
  service: ServiceItem;
  imagePosition?: ServiceCardImagePosition;
  className?: string;
};

function ServiceCard({
  service,
  imagePosition = "right",
  className,
}: ServiceCardProps) {
  const { title, description, benefits, image, cta, id } = service;

  return (
    <article
      id={id}
      className={cn(
        "grid overflow-hidden rounded-xl bg-surface shadow-card md:grid-cols-2",
        className,
      )}
    >
      <div
        className={cn(
          "order-2 flex flex-col justify-center p-6 sm:p-8 md:p-10",
          imagePosition === "right" ? "md:order-1" : "md:order-2",
        )}
      >
        <h3 className="typo-h3 text-primary">{title}</h3>

        <p className="mt-3 typo-body text-muted">{description}</p>

        <ul className="mt-5 flex flex-col gap-3 sm:mt-6" aria-label={`Benefícios de ${title}`}>
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 typo-body-sm text-foreground">
              <span
                aria-hidden
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-secondary"
              >
                <Check className="size-3.5 stroke-[2.5]" />
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 sm:mt-8">
          <WhatsAppCta
            location={`service_card_${id}`}
            label={cta.label}
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            showIcon={false}
          />
        </div>
      </div>

      <div
        className={cn(
          "relative order-1 min-h-48 sm:min-h-64 md:min-h-[22rem] md:h-full",
          imagePosition === "right" ? "md:order-2" : "md:order-1",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover"
        />
      </div>
    </article>
  );
}

export { ServiceCard };
export type { ServiceCardProps };
