export const landingContent = {
  brand: {
    name: "Certificados Kyndo",
    slogan: "Certificação digital com confiança, velocidade e suporte humano.",
    email: "contato@certificadoskyndo.com.br",
    whatsapp: "+55 62 9477-8197",
  },
  navigation: [
    { label: "Planos", href: "#planos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "FAQ", href: "#faq" },
  ],
  labels: {
    supportCta: "Atendimento",
    trustStats: "Indicadores de confiança",
    certifierLabel: "Certificadora parceira",
    certifierName: "Soluti Certificadora Digital",
    rightsReserved: "Todos os direitos reservados.",
    stepPrefix: "Etapa",
    requestPlan: "Solicitar",
  },
  hero: {
    eyebrow: "Autoridade de Registro Parceira",
    title: "Emissão de Certificado Digital para empresas e profissionais de todo o Brasil",
    description:
      "Atendimento consultivo, validação guiada e emissão com segurança ponta a ponta para certificados Soluti e-CPF, e-CNPJ e em nuvem.",
    primaryCta: { label: "Falar com especialista", href: "#contato" },
    secondaryCta: { label: "Ver planos", href: "#planos" },
    highlights: [
      "Suporte humano de verdade",
      "Emissão ágil com acompanhamento",
      "Processo seguro e em conformidade ICP-Brasil",
    ],
  },
  stats: [
    { label: "Emissões concluídas", value: "+12.000" },
    { label: "Tempo médio de ativação", value: "< 24h" },
    { label: "Satisfação no atendimento", value: "98%" },
  ],
  plans: {
    title: "Planos para diferentes perfis",
    subtitle:
      "Selecione o formato ideal para sua rotina. Todos com suporte especializado do início ao fim.",
    items: [
      {
        name: "Soluti e-CPF A1",
        description: "Ideal para profissionais liberais e assinaturas em desktop.",
        price: "a partir de R$ 169",
      },
      {
        name: "Soluti e-CNPJ A1",
        description: "Perfeito para operações fiscais e assinatura da empresa.",
        price: "a partir de R$ 239",
      },
      {
        name: "Soluti Certificado em Nuvem",
        description: "Mobilidade e segurança para assinar de qualquer lugar.",
        price: "a partir de R$ 299",
      },
    ],
  },
  process: {
    title: "Como funciona",
    steps: [
      {
        title: "Diagnóstico rápido",
        description: "Entendemos seu cenário e indicamos o tipo de certificado correto.",
      },
      {
        title: "Validação assistida",
        description: "Orientamos documentos, agenda e validação com acompanhamento próximo.",
      },
      {
        title: "Emissão e suporte contínuo",
        description: "Você recebe o certificado pronto para uso com suporte pós-emissão.",
      },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "Quanto tempo leva para emitir?",
        answer:
          "Na maioria dos casos, a emissão acontece no mesmo dia da validação, com prazo médio inferior a 24 horas.",
      },
      {
        question: "Vocês atendem pessoa física e jurídica?",
        answer:
          "Sim. Oferecemos certificados Soluti para e-CPF, e-CNPJ e soluções voltadas a diferentes necessidades de assinatura.",
      },
      {
        question: "Quais certificados da Soluti vocês emitem?",
        answer:
          "Atendemos emissão e renovação dos principais certificados Soluti, incluindo e-CPF A1, e-CNPJ A1 e opções em nuvem.",
      },
      {
        question: "Posso renovar com vocês mesmo tendo emitido em outro lugar?",
        answer:
          "Pode sim. Fazemos o processo de renovação com migração orientada para reduzir riscos e indisponibilidade.",
      },
    ],
  },
  contact: {
    title: "Pronto para emitir seu certificado?",
    description:
      "Fale com nosso time e receba uma recomendação objetiva para o seu caso em poucos minutos.",
    cta: {
      label: "Iniciar atendimento",
      href:
        "https://wa.me/556294778197?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Certificados%20Kyndo%20e%20quero%20emitir%20ou%20renovar%20meu%20certificado%20digital.%20Podem%20me%20ajudar%3F",
    },
  },
};

export type LandingContent = typeof landingContent;
