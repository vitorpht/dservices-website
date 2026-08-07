"use client";

import { PhoneCta } from "@/components/marketing/phone-cta";
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
      <Container className="grid h-16 grid-cols-[1fr_auto] items-center sm:h-20 lg:h-28 lg:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start">
          <Logo />
        </div>

        <div className="justify-self-center">
          <HeaderNav />
        </div>

        <div className="flex items-center justify-self-end gap-2">
          <PhoneCta
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
