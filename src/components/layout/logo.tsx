import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  onNavigate?: () => void;
};

function Logo({ className, onNavigate }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="D.Services — Página inicial"
      onClick={onNavigate}
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/images/brand/logo_horizontal.svg"
        alt="D.Services"
        width={340}
        height={121}
        priority
        className="h-11 w-auto max-w-[11.5rem] object-contain object-left sm:h-14 sm:max-w-[15rem] lg:h-20 lg:max-w-[23rem]"
        style={{ width: "auto" }}
      />
    </Link>
  );
}

export { Logo };
export type { LogoProps };
