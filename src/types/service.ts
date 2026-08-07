export type ServiceCta = {
  label: string;
  href: string;
};

export type ServiceImage = {
  src: string;
  alt: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: ServiceImage;
  cta: ServiceCta;
};

export type ServiceCardImagePosition = "left" | "right";
