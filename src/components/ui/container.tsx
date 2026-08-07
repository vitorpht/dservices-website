import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-gutter md:px-gutter-md lg:px-gutter-lg", {
  variants: {
    size: {
      narrow: "max-w-narrow",
      default: "max-w-site",
      wide: "max-w-wide",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type ContainerProps = ComponentProps<"div"> & VariantProps<typeof containerVariants>;

function Container({ className, size, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size }), className)} {...props} />;
}

export { Container, containerVariants };
export type { ContainerProps };
