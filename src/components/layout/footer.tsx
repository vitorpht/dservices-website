import Link from "next/link";

import { Container } from "@/components/ui/container";
import { company, getFullAddress } from "@/data/company";
import { legalNav } from "@/data/legal";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

const currentYear = 2026;

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn("mt-auto border-t border-border/70 bg-surface", className)}
    >
      <Container className="py-10 sm:py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-md">
            <Logo className="[&_img]:h-10 [&_img]:max-w-[11rem] sm:[&_img]:h-12 sm:[&_img]:max-w-[13rem] lg:[&_img]:h-12 lg:[&_img]:max-w-[13rem]" />
            <p className="mt-3 typo-body-sm text-muted">{company.activity}</p>
            <p className="mt-1.5 typo-body-sm text-muted">{getFullAddress()}</p>
          </div>

          <nav aria-label="Informação legal">
            <ul className="flex flex-col gap-2 sm:items-end">
              {legalNav.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="typo-body-sm font-medium text-primary/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="typo-body-sm font-medium text-primary/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="typo-body-sm text-muted">
            © {currentYear} {company.legalName}. Todos os direitos reservados.
          </p>
          <p className="typo-body-sm text-muted">
            Desenvolvido por{" "}
            <a
              href={company.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-secondary underline-offset-2 transition-colors hover:text-secondary/80 hover:underline"
            >
              {company.developer.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
export type { FooterProps };
