import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { JsonLd } from "@/components/seo/json-ld";
import { company, getFullAddress } from "@/data/company";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${company.legalName}. Saiba como tratamos os seus dados pessoais.`,
  path: "/politica-de-privacidade/",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      description="Informação sobre o tratamento de dados pessoais pela D.Services Limpezas, Lda, em conformidade com o RGPD."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Política de Privacidade", path: "/politica-de-privacidade/" },
        ])}
      />

      <p>
        A <strong>{company.legalName}</strong> (NIF {company.nif}), com sede em{" "}
        {getFullAddress()}, é a responsável pelo tratamento dos dados pessoais
        recolhidos através deste website.
      </p>

      <h2>1. Que dados recolhemos</h2>
      <p>
        Este website não recolhe dados através de formulários. Quando nos
        contacta por telefone, podemos tratar os seguintes dados, quando nos
        são fornecidos:
      </p>
      <ul>
        <li>Nome e contacto telefónico</li>
        <li>Morada ou localização do serviço</li>
        <li>Informações necessárias para elaborar orçamentos e prestar o serviço</li>
      </ul>

      <h2>2. Finalidades</h2>
      <p>Os dados são utilizados para:</p>
      <ul>
        <li>Responder a pedidos de contacto e orçamento</li>
        <li>Prestar e gerir os serviços contratados</li>
        <li>Cumprir obrigações legais aplicáveis</li>
      </ul>

      <h2>3. Fundamento legal</h2>
      <p>
        O tratamento baseia-se no seu consentimento, na execução de diligências
        pré-contratuais/contratuais ou no cumprimento de obrigações legais,
        consoante o caso.
      </p>

      <h2>4. Conservação</h2>
      <p>
        Os dados são conservados apenas pelo período necessário às finalidades
        indicadas ou pelo prazo legalmente exigido.
      </p>

      <h2>5. Os seus direitos</h2>
      <p>
        Nos termos do RGPD, pode solicitar acesso, retificação, apagamento,
        limitação, oposição e portabilidade dos seus dados, bem como apresentar
        reclamação à CNPD (
        <a
          href="https://www.cnpd.pt/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-secondary hover:underline"
        >
          www.cnpd.pt
        </a>
        ).
      </p>

      <h2>6. Contacto</h2>
      <p>
        Para questões relacionadas com privacidade, contacte-nos através dos
        meios disponibilizados neste website, indicando “Privacidade” no assunto.
      </p>

      <p className="typo-body-sm text-muted">
        Última atualização: agosto de 2026. Este texto é informativo e deve ser
        validado juridicamente antes da publicação definitiva.
      </p>
    </LegalPage>
  );
}
