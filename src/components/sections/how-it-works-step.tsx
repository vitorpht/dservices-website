"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { HowItWorksStep } from "@/types/how-it-works";

type HowItWorksStepCardProps = {
  step: HowItWorksStep;
  index: number;
  className?: string;
};

function HowItWorksStepCard({ step, index, className }: HowItWorksStepCardProps) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex h-full flex-col items-center rounded-2xl bg-surface px-5 pb-8 pt-8 text-center shadow-card sm:px-6 sm:pt-9",
        className,
      )}
    >
      <div className="relative z-10 mb-5 flex flex-col items-center">
        <span
          aria-hidden
          className="flex size-[4.75rem] items-center justify-center rounded-full bg-secondary-soft text-secondary sm:size-[5.5rem]"
        >
          <Icon className="size-8 sm:size-9" />
        </span>

        <span
          aria-hidden
          className="mt-3 flex size-9 items-center justify-center rounded-full bg-secondary text-[0.7rem] font-bold tracking-wide text-secondary-foreground shadow-sm sm:mt-3.5 sm:size-10 sm:text-[0.75rem]"
        >
          {step.number}
        </span>
      </div>

      <h3 className="typo-h4 text-primary">{step.title}</h3>

      <span aria-hidden className="mt-3 h-[3px] w-10 rounded-full bg-secondary" />

      <p className="mt-4 max-w-[15.5rem] typo-body-sm text-muted">
        {step.description}
      </p>
    </motion.article>
  );
}

export { HowItWorksStepCard };
export type { HowItWorksStepCardProps };
