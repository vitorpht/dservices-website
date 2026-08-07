import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { JsonLd } from "@/components/seo/json-ld";
import { company, getFullAddress } from "@/data/company";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Termos e Condições",
  description: `Termos e Condições de utilização do website da ${company.legalName}.`,
  path: "/termos-e-condicoes/",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos e Condições"
      description="Condições de utilização deste website e informação geral sobre os serviços."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Termos e Condições", path: "/termos-e-condicoes/" },
        ])}
      />

      <p>
        Ao aceder e utilizar este website, concorda com os presentes Termos e
        Condições. O website é propriedade da <strong>{company.legalName}</strong>
        , com sede em {getFullAddress()}.
      </p>

      <h2>1. Objeto</h2>
      <p>
        Este website tem carácter informativo e comercial, destinado a apresentar
        os serviços de limpeza da {company.brandName} e a facilitar pedidos de
        contacto ou orçamento.
      </p>

      <h2>2. Serviços</h2>
      <p>
        A descrição dos serviços neste website é geral. Orçamentos, condições
        comerciais e prazos são confirmados caso a caso, após contacto e, quando
        aplicável, visita ao local.
      </p>

      <h2>3. Propriedade intelectual</h2>
      <p>
        Os conteúdos do website (textos, logótipo, imagens e estrutura) estão
        protegidos. Não é permitida a reprodução sem autorização prévia, salvo
        uso pessoal e não comercial.
      </p>

      <h2>4. Limitação de responsabilidade</h2>
      <p>
        Envidamos esforços para manter a informação atualizada, mas não
        garantimos a ausência total de imprecisões. O website pode estar
        temporariamente indisponível por motivos técnicos ou de manutenção.
      </p>

      <h2>5. Lei aplicável</h2>
      <p>
        Estes termos regem-se pela lei portuguesa. Para questões relacionadas com
        os conteúdos deste website, pode contactar-nos através dos meios
        disponibilizados na página.
      </p>

      <p className="typo-body-sm text-muted">
        Última atualização: agosto de 2026. Recomenda-se revisão jurídica antes da
        publicação definitiva.
      </p>
    </LegalPage>
  );
}
