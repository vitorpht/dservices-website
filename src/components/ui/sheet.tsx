"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  useEffect,
  useId,
  type ReactNode,
} from "react";

import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { cn } from "@/lib/utils";

import { Button } from "./button";

type SheetSide = "right" | "left";

type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: SheetSide;
  title: string;
  children: ReactNode;
  className?: string;
};

const sideClasses: Record<SheetSide, string> = {
  right: "right-0 border-l",
  left: "left-0 border-r",
};

const sideMotion: Record<SheetSide, { initial: { x: string }; animate: { x: number }; exit: { x: string } }> =
  {
    right: { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" } },
    left: { initial: { x: "-100%" }, animate: { x: 0 }, exit: { x: "-100%" } },
  };

function Sheet({
  open,
  onOpenChange,
  side = "right",
  title,
  children,
  className,
}: SheetProps) {
  const titleId = useId();

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] lg:hidden" role="presentation">
          <motion.button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onOpenChange(false)}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              "absolute inset-y-0 flex w-[min(100%,20.5rem)] flex-col bg-surface shadow-elevated",
              sideClasses[side],
              className,
            )}
            initial={sideMotion[side].initial}
            animate={sideMotion[side].animate}
            exit={sideMotion[side].exit}
            transition={{ type: "spring", stiffness: 380, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <p id={titleId} className="typo-body-sm font-semibold text-primary">
                {title}
              </p>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Fechar menu"
                className="size-10"
                onClick={() => onOpenChange(false)}
              >
                <X className="size-5" />
              </Button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6">{children}</div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

export { Sheet };
export type { SheetProps, SheetSide };
