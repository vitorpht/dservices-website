import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { JsonLd } from "@/components/seo/json-ld";
import { company } from "@/data/company";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Cookies",
  description: `Política de Cookies da ${company.legalName}. Informação sobre cookies neste website.`,
  path: "/politica-de-cookies/",
});

export default function CookiesPolicyPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      description="Informação sobre a utilização de cookies neste website."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Política de Cookies", path: "/politica-de-cookies/" },
        ])}
      />

      <p>
        Este website pode utilizar cookies e tecnologias semelhantes para
        garantir o funcionamento adequado da página e, se aplicável, analisar o
        tráfego de forma agregada.
      </p>

      <h2>1. O que são cookies</h2>
      <p>
        Cookies são pequenos ficheiros guardados no seu dispositivo quando visita
        um website. Permitem reconhecer o navegador e memorizar certas
        preferências.
      </p>

      <h2>2. Tipos de cookies</h2>
      <ul>
        <li>
          <strong>Essenciais</strong> — necessários ao funcionamento do site
        </li>
        <li>
          <strong>Analíticos</strong> — ajudam a compreender a utilização do site
          (apenas se forem ativados)
        </li>
        <li>
          <strong>Preferências</strong> — memorizam escolhas do utilizador
        </li>
      </ul>

      <h2>3. Gestão de cookies</h2>
      <p>
        Pode configurar ou eliminar cookies nas definições do seu navegador. A
        desativação de cookies essenciais pode afetar algumas funcionalidades do
        site.
      </p>

      <h2>4. Atualizações</h2>
      <p>
        Esta política pode ser atualizada sempre que existirem alterações
        relevantes na utilização de cookies.
      </p>

      <p className="typo-body-sm text-muted">
        Última atualização: agosto de 2026. Se forem adicionadas ferramentas de
        analytics ou marketing, esta página e o banner de consentimento devem ser
        atualizados.
      </p>
    </LegalPage>
  );
}
