import { cn } from "@/lib/utils";
import type { WhyUsItem } from "@/types/why-us";

type WhyUsCardProps = {
  item: WhyUsItem;
  className?: string;
};

function WhyUsCard({ item, className }: WhyUsCardProps) {
  const Icon = item.icon;

  return (
    <article
      className={cn(
        "flex h-full flex-col items-center rounded-xl bg-surface p-6 text-center shadow-card sm:p-8",
        className,
      )}
    >
      <span
        aria-hidden
        className="flex size-12 items-center justify-center rounded-lg bg-primary-soft text-primary"
      >
        <Icon className="size-6 stroke-[1.75]" />
      </span>

      <h3 className="mt-5 typo-h4 text-primary">{item.title}</h3>

      <p className="mt-2 typo-body-sm text-muted">{item.description}</p>
    </article>
  );
}

export { WhyUsCard };
export type { WhyUsCardProps };
