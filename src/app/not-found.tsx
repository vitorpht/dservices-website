import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <Container className="flex flex-1 flex-col items-center justify-center py-20 text-center">
        <p className="typo-caption text-secondary">Erro 404</p>
        <h1 className="mt-3 typo-h2 text-primary">Página não encontrada</h1>
        <p className="mt-3 max-w-md typo-body text-muted">
          A página que procura não existe ou foi movida. Volte à página inicial
          para continuar a explorar os nossos serviços.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "primary", size: "md" }), "mt-8")}
        >
          Ir para a página inicial
        </Link>
      </Container>
    </main>
  );
}
