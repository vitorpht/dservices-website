import Image from "next/image";

import { WhatsAppCta } from "@/components/marketing/whatsapp-cta";
import { Container } from "@/components/ui/container";
import { homeCtaBanner } from "@/data/cta-banner";
import { cn } from "@/lib/utils";
import type { CtaBannerContent } from "@/types/cta-banner";

type CtaBannerProps = {
  content?: CtaBannerContent;
  className?: string;
};

function CtaBanner({ content = homeCtaBanner, className }: CtaBannerProps) {
  const { title, description, cta, image } = content;

  return (
    <section
      aria-labelledby="cta-banner-title"
      className={cn("section-padding bg-background", className)}
    >
      <Container>
        <div className="grid overflow-hidden rounded-xl bg-primary shadow-card lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <h2
              id="cta-banner-title"
              className="typo-h2 text-balance text-primary-foreground"
            >
              {title}
            </h2>

            <p className="mt-3 max-w-md typo-body text-pretty text-primary-foreground/80 sm:mt-4 sm:typo-body-lg">
              {description}
            </p>

            <div className="mt-6 sm:mt-8">
              <WhatsAppCta
                location="cta_banner"
                label={cta.label}
                variant="accent"
                size="lg"
                className="w-full shadow-md sm:w-auto"
                showIcon={false}
              />
            </div>
          </div>

          <div className="relative min-h-52 sm:min-h-72 lg:min-h-[22rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-primary/40"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { CtaBanner };
export type { CtaBannerProps };
