"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

import { PhoneCta } from "@/components/marketing/phone-cta";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { HeroContent } from "@/types/hero";

type HeroProps = {
  content: HeroContent;
  className?: string;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

function Hero({ content, className }: HeroProps) {
  const { title, subtitle, cta, image } = content;

  return (
    <section
      aria-labelledby="hero-title"
      className={cn(
        "relative isolate flex min-h-[min(32rem,calc(100svh-4rem))] items-center overflow-hidden sm:min-h-[min(36rem,calc(100svh-5rem))] lg:min-h-[min(42.5rem,calc(100svh-7rem))]",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay: mais cobertura no mobile para legibilidade */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/45 sm:via-primary/80 sm:to-primary/15"
      />

      <Container className="relative z-10 py-12 sm:py-16 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-primary-foreground"
        >
          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="typo-h1 text-balance text-primary-foreground md:text-display"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl typo-body text-pretty text-primary-foreground/85 sm:mt-6 sm:typo-body-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 sm:mt-8 lg:mt-10">
            <PhoneCta
              location="hero"
              label={cta.label}
              variant="accent"
              size="lg"
              className="w-full shadow-md sm:w-auto"
              showIcon={false}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export { Hero };
export type { HeroProps };
