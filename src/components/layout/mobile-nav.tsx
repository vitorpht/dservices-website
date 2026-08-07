"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { PhoneCta } from "@/components/marketing/phone-cta";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" />
      </Button>

      <Sheet
        open={open}
        onOpenChange={setOpen}
        side="right"
        title="Menu"
        className="border-border"
      >
        <div id="mobile-navigation" className="flex h-full flex-col">
          <Logo onNavigate={close} className="mb-8" />

          <nav aria-label="Navegação mobile" className="flex flex-1 flex-col">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href.replace(/\/$/, ""));

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className={cn(
                        "flex items-center rounded-md px-3 py-3 typo-body font-medium transition-colors",
                        isActive
                          ? "bg-primary-soft text-primary"
                          : "text-muted hover:bg-surface-muted hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <PhoneCta
            location="mobile_nav"
            label="Pedir Orçamento"
            variant="primary"
            size="lg"
            className="mt-8 w-full"
            showIcon={false}
            onClick={close}
          />
        </div>
      </Sheet>
    </div>
  );
}

export { MobileNav };
