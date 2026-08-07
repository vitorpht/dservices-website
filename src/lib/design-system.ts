/**
 * Design System — constantes reutilizáveis (espelho dos tokens CSS).
 * Preferir classes Tailwind / utilitários em UI; usar estes valores
 * quando for preciso JS (Framer Motion, charts, estilos inline).
 */

export const colors = {
  primary: "#010C42",
  primarySoft: "#E8EAF2",
  secondary: "#2196F3",
  secondarySoft: "#E3F2FD",
  accent: "#00AFF5",
  accentSoft: "#E0F7FC",
  background: "#F8FAFC",
  surface: "#FFFFFF",
  surfaceMuted: "#F1F5F9",
  white: "#FFFFFF",
  muted: "#64748B",
  border: "#E2E8F0",
  destructive: "#DC2626",
} as const;

/** Alternância de fundos de secção */
export const surfaces = {
  page: "bg-background",
  raised: "bg-surface",
  muted: "bg-surface-muted",
  brand: "bg-primary",
} as const;

export const container = {
  narrow: "max-w-narrow",
  default: "max-w-site",
  wide: "max-w-wide",
  full: "max-w-full",
  className: {
    narrow: "mx-auto w-full max-w-narrow px-gutter md:px-gutter-md lg:px-gutter-lg",
    default: "mx-auto w-full max-w-site px-gutter md:px-gutter-md lg:px-gutter-lg",
    wide: "mx-auto w-full max-w-wide px-gutter md:px-gutter-md lg:px-gutter-lg",
    full: "mx-auto w-full max-w-full px-gutter md:px-gutter-md lg:px-gutter-lg",
  },
} as const;

export const spacing = {
  section: {
    xs: "py-section-xs",
    sm: "py-section-sm",
    md: "py-section",
    lg: "py-section-lg",
    xl: "py-section-xl",
  },
  sectionUtility: {
    sm: "section-padding-sm",
    md: "section-padding",
    lg: "section-padding-lg",
  },
  gutter: {
    sm: "px-gutter",
    md: "px-gutter-md",
    lg: "px-gutter-lg",
  },
} as const;

export const radius = {
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
} as const;

export const shadows = {
  xs: "shadow-xs",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  card: "shadow-card",
  elevated: "shadow-elevated",
  focus: "shadow-focus",
} as const;

export const typography = {
  display: "typo-display",
  h1: "typo-h1",
  h2: "typo-h2",
  h3: "typo-h3",
  h4: "typo-h4",
  bodyLg: "typo-body-lg",
  body: "typo-body",
  bodySm: "typo-body-sm",
  caption: "typo-caption",
} as const;

export const designSystem = {
  colors,
  surfaces,
  container,
  spacing,
  radius,
  shadows,
  typography,
} as const;

export type ColorToken = keyof typeof colors;
export type ContainerSize = keyof typeof container.className;
export type RadiusToken = keyof typeof radius;
export type ShadowToken = keyof typeof shadows;
export type TypographyToken = keyof typeof typography;
