import { cva, type VariantProps } from "class-variance-authority";
import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "flex w-full rounded-md border border-input bg-surface",
    "typo-body text-foreground placeholder:text-muted",
    "transition-[border-color,box-shadow] duration-200 ease-out",
    "focus-visible:border-accent focus-visible:outline-none focus-visible:shadow-focus",
    "disabled:cursor-not-allowed disabled:bg-background disabled:opacity-55",
    "file:border-0 file:bg-transparent file:typo-body-sm file:font-medium file:text-foreground",
  ].join(" "),
  {
    variants: {
      inputSize: {
        sm: "h-9 px-3",
        md: "h-11 px-3.5",
        lg: "h-12 px-4",
      },
      invalid: {
        true: "border-destructive focus-visible:border-destructive focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-destructive)_25%,transparent)]",
        false: "",
      },
    },
    defaultVariants: {
      inputSize: "md",
      invalid: false,
    },
  },
);

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputVariants>;

function Input({ className, inputSize, invalid, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(inputVariants({ inputSize, invalid }), className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

const textareaVariants = cva(
  [
    "flex min-h-28 w-full resize-y rounded-md border border-input bg-surface",
    "px-3.5 py-3 typo-body text-foreground placeholder:text-muted",
    "transition-[border-color,box-shadow] duration-200 ease-out",
    "focus-visible:border-accent focus-visible:outline-none focus-visible:shadow-focus",
    "disabled:cursor-not-allowed disabled:bg-background disabled:opacity-55",
  ].join(" "),
  {
    variants: {
      invalid: {
        true: "border-destructive focus-visible:border-destructive focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-destructive)_25%,transparent)]",
        false: "",
      },
    },
    defaultVariants: {
      invalid: false,
    },
  },
);

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>;

function Textarea({ className, invalid, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(textareaVariants({ invalid }), className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

const labelVariants = cva("typo-body-sm font-medium text-foreground");

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

function Label({ className, required, children, ...props }: LabelProps) {
  return (
    <label className={cn(labelVariants(), className)} {...props}>
      {children}
      {required ? <span className="ml-0.5 text-destructive">*</span> : null}
    </label>
  );
}

export { Input, Textarea, Label, inputVariants, textareaVariants, labelVariants };
export type { InputProps, TextareaProps, LabelProps };
