/**
 * Configuração de marketing / analytics.
 * Preenche as variáveis de ambiente no deploy — o site fica pronto sem alterar código.
 */
export const marketingConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
} as const;

export const hasGtm = Boolean(marketingConfig.gtmId);
export const hasGa = Boolean(marketingConfig.gaId);
export const hasMetaPixel = Boolean(marketingConfig.metaPixelId);
