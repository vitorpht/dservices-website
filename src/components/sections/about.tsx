import Image from "next/image";

import { PhoneCta } from "@/components/marketing/phone-cta";
import { Container } from "@/components/ui/container";
import { aboutContent } from "@/data/about";
import { cn } from "@/lib/utils";
import type { AboutContent } from "@/types/about";

type AboutProps = {
  content?: AboutContent;
  className?: string;
  showCta?: boolean;
};

function About({
  content = aboutContent,
  className,
  showCta = true,
}: AboutProps) {
  const { title, paragraphs, image, highlights } = content;

  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className={cn("section-padding bg-surface", className)}
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-1 min-h-64 overflow-hidden rounded-[20px] shadow-card sm:min-h-80 lg:min-h-[28rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
              priority
            />
          </div>

          <div className="order-2">
            <h1 id="about-title" className="typo-h2 text-primary">
              {title}
            </h1>

            <div className="mt-5 space-y-4 sm:mt-6">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="typo-body text-pretty text-muted sm:typo-body-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="rounded-lg bg-surface-muted px-4 py-3 text-center sm:text-left"
                >
                  <p className="text-sm font-semibold text-primary">{item.value}</p>
                  <p className="mt-0.5 text-xs text-muted">{item.label}</p>
                </li>
              ))}
            </ul>

            {showCta ? (
              <div className="mt-8">
                <PhoneCta
                  location="about"
                  label="Pedir Orçamento"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  showIcon={false}
                />
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { About };
export type { AboutProps };
