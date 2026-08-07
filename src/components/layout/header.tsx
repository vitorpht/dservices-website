"use client";

import { WhatsAppCta } from "@/components/marketing/whatsapp-cta";
import { Container } from "@/components/ui/container";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

import { HeaderNav } from "./header-nav";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

function Header() {
  const scrolled = useScrolled(8);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-surface transition-[box-shadow,border-color] duration-300",
        scrolled && "border-border/60 shadow-sm",
      )}
    >
      <Container
        className={cn(
          "flex h-16 items-center justify-between gap-3 sm:h-20",
          "lg:grid lg:h-28 lg:grid-cols-[1fr_auto_1fr] lg:gap-0",
        )}
      >
        <div className="flex min-w-0 shrink items-center lg:justify-self-start">
          <Logo />
        </div>

        <div className="hidden items-center lg:flex lg:justify-self-center">
          <HeaderNav />
        </div>

        <div className="flex shrink-0 items-center justify-end lg:justify-self-end">
          <WhatsAppCta
            location="header"
            label="Pedir Orçamento"
            variant="primary"
            size="md"
            className="hidden lg:inline-flex"
            showIcon={false}
          />

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

export { Header };
