"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegação principal">
      <ul className="flex items-center gap-8">
        {mainNav.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href.replace(/\/$/, ""));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative typo-body-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted hover:text-primary",
                )}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="header-nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { HeaderNav };
