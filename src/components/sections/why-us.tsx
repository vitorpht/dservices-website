import { Container } from "@/components/ui/container";
import { whyUsItems, whyUsSection } from "@/data/why-us";
import { cn } from "@/lib/utils";
import type { WhyUsItem } from "@/types/why-us";

import { WhyUsCard } from "./why-us-card";

type WhyUsProps = {
  items?: WhyUsItem[];
  title?: string;
  subtitle?: string;
  className?: string;
};

function WhyUs({
  items = whyUsItems,
  title = whyUsSection.title,
  subtitle = whyUsSection.subtitle,
  className,
}: WhyUsProps) {
  return (
    <section
      id="porque-nos"
      aria-labelledby="why-us-title"
      className={cn("section-padding bg-background", className)}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="why-us-title" className="typo-h2 text-primary">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 typo-body text-muted sm:mt-4 sm:typo-body-lg">
              {subtitle}
            </p>
          ) : null}
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <li key={item.id}>
              <WhyUsCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export { WhyUs };
export type { WhyUsProps };
