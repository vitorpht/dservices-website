import type { ComponentType, SVGProps } from "react";

export type HowItWorksIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type HowItWorksStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: HowItWorksIcon;
};
