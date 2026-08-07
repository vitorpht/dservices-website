import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { colors } from "@/lib/design-system";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: colors.background,
    theme_color: colors.primary,
    lang: "pt-PT",
    icons: [
      {
        src: "/images/brand/logo_horizontal.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
