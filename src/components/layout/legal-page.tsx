import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type LegalPageProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

function LegalPage({ title, description, children, className }: LegalPageProps) {
  return (
    <main className={cn("flex flex-1 flex-col bg-background", className)}>
      <Container className="section-padding max-w-3xl">
        <header className="mb-8 sm:mb-10">
          <h1 className="typo-h2 text-primary">{title}</h1>
          {description ? (
            <p className="mt-3 typo-body text-muted">{description}</p>
          ) : null}
        </header>

        <div className="space-y-6 typo-body text-foreground/90 [&_h2]:mt-8 [&_h2]:typo-h4 [&_h2]:text-primary [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </main>
  );
}

export { LegalPage };
export type { LegalPageProps };
