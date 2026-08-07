export type HeroCta = {
  label: string;
  href: string;
};

export type HeroImage = {
  src: string;
  alt: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  cta: HeroCta;
  image: HeroImage;
};
