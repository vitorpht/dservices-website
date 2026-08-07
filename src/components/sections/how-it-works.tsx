"use client";

import { Container } from "@/components/ui/container";
import { howItWorksSection, howItWorksSteps } from "@/data/how-it-works";
import { cn } from "@/lib/utils";
import type { HowItWorksStep } from "@/types/how-it-works";

import { HowItWorksStepCard } from "./how-it-works-step";

type HowItWorksProps = {
  steps?: HowItWorksStep[];
  title?: string;
  subtitle?: string;
  className?: string;
};

function HowItWorks({
  steps = howItWorksSteps,
  title = howItWorksSection.title,
  subtitle = howItWorksSection.subtitle,
  className,
}: HowItWorksProps) {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-title"
      className={cn("section-padding bg-surface-muted", className)}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="how-it-works-title" className="typo-h2 text-primary">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 typo-body text-muted sm:mt-4 sm:typo-body-lg">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="relative mt-8 sm:mt-12 lg:mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[calc(2.25rem+2.75rem)] right-[8%] left-[8%] z-0 hidden lg:block"
          >
            <div className="h-0 w-full border-t-[2.5px] border-dashed border-secondary/45" />
          </div>

          <ol className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => (
              <li key={step.id} className="relative">
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-[calc(100%+0.1rem)] left-1/2 z-0 h-5 w-0 -translate-x-1/2 border-l-[2.5px] border-dashed border-secondary/45 md:hidden"
                  />
                ) : null}
                <HowItWorksStepCard step={step} index={index} />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export { HowItWorks };
export type { HowItWorksProps };
