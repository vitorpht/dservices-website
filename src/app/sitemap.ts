import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/servicos/", changeFrequency: "weekly", priority: 0.9 },
    { path: "/sobre/", changeFrequency: "monthly", priority: 0.8 },
    { path: "/orcamento/", changeFrequency: "weekly", priority: 0.95 },
    { path: "/contacto/", changeFrequency: "monthly", priority: 0.85 },
    { path: "/politica-de-privacidade/", changeFrequency: "yearly", priority: 0.3 },
    { path: "/politica-de-cookies/", changeFrequency: "yearly", priority: 0.3 },
    { path: "/termos-e-condicoes/", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
