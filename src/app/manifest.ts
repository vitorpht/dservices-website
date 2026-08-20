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
        src: "/images/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
