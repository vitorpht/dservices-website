import { Container } from "@/components/ui/container";
import { services, servicesSection } from "@/data/services";
import { cn } from "@/lib/utils";
import type { ServiceCardImagePosition, ServiceItem } from "@/types/service";

import { ServiceCard } from "./service-card";

type ServicesProps = {
  items?: ServiceItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  showHeader?: boolean;
};

function getImagePosition(index: number): ServiceCardImagePosition {
  return index % 2 === 0 ? "right" : "left";
}

function Services({
  items = services,
  title = servicesSection.title,
  subtitle = servicesSection.subtitle,
  className,
  showHeader = true,
}: ServicesProps) {
  return (
    <section
      id="servicos"
      aria-labelledby={showHeader ? "services-title" : undefined}
      className={cn("section-padding bg-surface-muted", className)}
    >
      <Container>
        {showHeader ? (
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="services-title" className="typo-h2 text-primary">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-3 typo-body text-muted sm:mt-4 sm:typo-body-lg">
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null}

        <div
          className={cn(
            "flex flex-col gap-6 sm:gap-8 lg:gap-10",
            showHeader && "mt-8 sm:mt-12 lg:mt-16",
          )}
        >
          {items.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              imagePosition={getImagePosition(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Services };
export type { ServicesProps };
