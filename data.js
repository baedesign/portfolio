/* ==========================================================
   BAEDESIGN — CONTEÚDO EDITÁVEL
   Altere textos, links, experiências e projetos AQUI.
   O HTML e o JavaScript usam estes dados automaticamente.
   ========================================================== */

window.BAE_DATA = {
  site: {
    name: "baedesign",
    person: "Bernardo Ramalho",
    role: "Designer Gráfico",
    location: "Rio de Janeiro — Brasil",
    email: "bernardofeliperamalho@gmail.com",

    // TROQUE ESTES LINKS PELOS SEUS LINKS REAIS:
    linkedin: "https://www.linkedin.com/in/bernardo-ramalho-890a29a5/",
    behance: "https://www.behance.net/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://wa.me/5521999350041",

    // Coloque o PDF do currículo em assets/docs/curriculo-bernardo-ramalho.pdf
    resume: "assets/docs/curriculo-bernardo-ramalho.pdf",

    tagline: "Design é estratégia antes de ser estética."
  },

  expertise: [
    "Branding",
    "Identidade Visual",
    "Direção de Arte",
    "Comunicação Interna",
    "Campanhas",
    "Design Editorial",
    "Social Media",
    "Digital",
    "Automação + IA"
  ],

  experience: [
    {
      company: "Subsea7",
      role: "Designer / Comunicação Interna",
      period: "2022 — 2026",
      note: "Design dentro de uma organização global me ensinou que comunicar bem é também entender pessoas, processos e negócio."
    },
    { company: "DVitaminas", role: "Designer", period: "2019 — 2023" },
    { company: "Aristo", role: "Design Editorial", period: "2022" },
    { company: "Editora Orvalho", role: "Design Editorial", period: "2021" }
  ],

  projects: [
    {
      slug: "design-hub",
      index: "01",
      client: "Design HUB / BaeDesign",
      year: "2026",
      category: "Product Design / UX/UI / Sistema Web",
      title: "Um sistema para tirar o briefing do improviso.",
      description: "Plataforma para solicitar, acompanhar e gerenciar demandas de design com briefing guiado, papéis de usuário, aprovações, arquivos e visão operacional.",
      impact: "O problema não era falta de ferramenta de design: era informação incompleta, histórico espalhado e pouca visibilidade sobre quem precisava agir.",
      cover: "assets/images/design-hub-cover.png",
      coverAlt: "Interface do Design HUB com dashboard de demandas, prioridades e status",
      format: "full",
      role: "Product Design · UX/UI · Estrutura de produto",
      disciplines: ["Product Design", "UX/UI", "Arquitetura de informação", "Design de processo", "Frontend"]
    },

    {
      slug: "sole",
      index: "02",
      client: "Sole",
      displayName: "Sole",
      year: "2026",
      category: "Identidade Visual | Direção de Arte",
      title: "Transformando estratégia em identidade.",
      description: "Construção de um sistema visual pensado para posicionar uma marca de forma contemporânea, confiável e memorável.",
      impact: "A marca já tinha um bom produto e nenhuma consistência: cada ponto de contato parecia de uma empresa diferente.",
      cover: "assets/images/sole-cover.jpg",
      coverAlt: "Sistema de identidade visual aplicado em papelaria sobre superfície escura",
      format: "left",
      role: "Designer & Direção de Arte",
      disciplines: ["Estratégia de marca", "Identidade visual", "Sistema tipográfico", "Aplicações"],
      blocks: [
        { label: "Contexto", heading: "Uma marca reconhecida pelo produto, não pela presença.", body: ["A comunicação era construída peça a peça, sem regra comum. O resultado era uma percepção difusa de qualidade."] },
        { label: "Desafio", heading: "Criar reconhecimento sem depender do logo.", body: ["A identidade precisava funcionar em formatos pequenos e digitais, mas ainda assim ter presença em aplicações grandes."] },
        { label: "Estratégia", heading: "Definir poucos elementos e usá-los com disciplina.", body: ["Um sistema enxuto: uma família tipográfica, uma paleta curta, uma lógica de composição e um repertório gráfico próprio."] },
        { label: "Processo", heading: "Exploração, redução, teste.", body: ["Moodboards, estudos tipográficos e testes de aplicação em contextos reais antes de qualquer refinamento estético."] },
        { label: "Solução", heading: "Um sistema que escala.", body: ["Marca, papelaria, aplicações digitais e diretrizes de uso reunidas em um manual objetivo, feito para ser aplicado por outras pessoas."] }
      ],
      gallery: [
        { src: "assets/images/sole-cover.jpg", alt: "Papelaria da identidade Sole", span: "full" },
        { src: "assets/images/application-01.jpg", alt: "Identidade aplicada em grande formato" },
        { src: "assets/images/process-01.jpg", alt: "Estudos e exploração visual do sistema" }
      ],
      results: [
        { label: "Resultado", value: "Sistema visual consistente entre pontos de contato digitais e impressos." },
        { label: "Autonomia", value: "Diretrizes que permitem à equipe aplicar a marca sem depender do designer." }
      ]
    },

        {
      slug: "landing-page-sole",
      index: "03",
      client: "Landing Page — Sole",
      year: "2026",
      category: "Web Design | UX/UI | Front-end",
      title: "Da identidade visual para uma experiência digital que conduz à ação.",
      description: "Landing page responsiva criada para apresentar os serviços da Sole, fortalecer sua presença digital e conduzir potenciais clientes ao contato.",
      impact: "A marca já tinha uma linguagem própria. O desafio era transformá-la em uma experiência digital clara, consistente e orientada à conversão.",
      cover: "assets/images/lp-sole-cover.png",
      coverAlt: "Hero da landing page da Sole Contabilidade",
      format: "full",
      role: "UX/UI, Web Design e Front-end",
      disciplines: ["Landing Page", "UX/UI", "HTML/CSS/JavaScript", "Responsividade"]
    },

    {
      slug: "ludmilla-neres",
      index: "04",
      client: "Ludmilla Neres",
      displayName: "Ludmilla Neres",
      year: "2026",
      category: "Identidade Visual | Direção de Arte",
      title: "Uma identidade feita para acolher.",
      description: "Desenvolvimento de identidade visual e experiência digital para uma profissional de psicologia, equilibrando acolhimento, proximidade e profissionalismo.",
      impact: "Em psicologia, a primeira impressão visual é parte do cuidado: a marca precisava gerar confiança antes da primeira conversa.",
      cover: "assets/images/ludmilla-cover.jpg",
      coverAlt: "Papelaria de identidade visual em tons quentes para consultório de psicologia",
      format: "right",
      role: "Designer & Direção de Arte",
      disciplines: ["Identidade visual", "Design digital", "Social media"],
      blocks: [
        { label: "Contexto", heading: "Uma profissional iniciando presença própria.", body: ["Não havia marca, tom de voz definido nem material digital consistente para apresentar o trabalho clínico."] },
        { label: "Desafio", heading: "Ser acolhedora sem parecer amadora.", body: ["O equilíbrio entre proximidade e credibilidade define a percepção do serviço — e é fácil errar para qualquer um dos lados."] },
        { label: "Estratégia", heading: "Calor na cor, rigor na estrutura.", body: ["Paleta quente e formas orgânicas conduzidas por uma grade tipográfica firme e silenciosa."] },
        { label: "Processo", heading: "Conversa antes de referência.", body: ["O sistema partiu do vocabulário da própria profissional sobre como ela conduz atendimentos."] },
        { label: "Solução", heading: "Marca, presença digital e conteúdo.", body: ["Identidade, templates de conteúdo e uma presença digital simples, rápida e legível."] }
      ],
      gallery: [
        { src: "assets/images/ludmilla-cover.jpg", alt: "Aplicações da identidade em papelaria", span: "full" },
        { src: "assets/images/process-01.jpg", alt: "Exploração de paleta e tipografia" },
        { src: "assets/images/application-01.jpg", alt: "Aplicação da marca em ambiente" }
      ],
      results: [
        { label: "Resultado", value: "Presença digital coerente, com linguagem própria e reconhecível." },
        { label: "Percepção", value: "Comunicação que traduz acolhimento sem abrir mão de profissionalismo." }
      ]
    },

    {
      slug: "landing-page-ludmilla",
      index: "05",
      client: "Landing Page — Ludmilla Neres",
      year: "2026",
      category: "Web Design | UX/UI | Front-end",
      title: "Uma experiência digital que acolhe antes mesmo da primeira conversa.",
      description: "Landing page responsiva criada para apresentar o atendimento psicológico de forma clara, humana e coerente com a identidade visual de Ludmilla Neres.",
      impact: "O desafio foi levar uma marca construída sobre acolhimento e escuta para uma interface funcional, organizada e preparada para conduzir ao primeiro contato.",
      cover: "assets/images/lp-ludmilla-cover.jpg",
      coverAlt: "Landing page de Ludmilla Neres, psicóloga",
      format: "full",
      role: "UX/UI, Web Design e Front-end",
      disciplines: ["Landing Page", "UX/UI", "HTML/CSS/JavaScript", "Responsividade"]
    },

    {
      slug: "pethouse",
      index: "06",
      client: "Pethouse",
      displayName: "Pethouse",
      year: "2022",
      category: "Identidade Visual | UI Design | Campanha",
      title: "Uma marca para conectar pets, tutores e serviços.",
      description: "Identidade visual, interface e campanha reunidas em uma experiência de cuidado simples, próxima e reconhecível.",
      impact: "O símbolo reúne pet, pata e localização para transformar proximidade e conveniência em uma marca simples e memorável.",
      cover: "assets/images/pethouse-cover.jpg",
      coverAlt: "Campanha Pethouse com cachorro e chamada para agendamento de banho e tosa",
      format: "left",
      role: "Design, Direção de Arte e UI",
      disciplines: ["Identidade visual", "UI Design", "Campanha", "Social media"],
      blocks: [],
      gallery: [],
      results: []
    },

    {
      slug: "cartilha-diversidade",
      index: "07",
      client: "Subsea7",
      displayName: "Cartilha de Diversidade",
      year: "2024",
      category: "Design Editorial | Comunicação Interna",
      title: "Informação que inclui também precisa ser acessível.",
      description: "Design editorial e diagramação de uma cartilha interna sobre diversidade, equidade e inclusão, transformando conteúdos técnicos em uma experiência visual clara e organizada.",
      impact: "O desafio foi dar estrutura visual a um tema amplo e sensível, facilitando a compreensão sem perder profundidade nem fugir da identidade corporativa.",
      cover: "assets/images/cartilha-diversidade-cover.png",
      coverAlt: "Capa da cartilha de Diversidade, Equidade e Inclusão desenvolvida para a Subsea7",
      format: "right",
      role: "Design Editorial · Diagramação",
      disciplines: ["Comunicação Interna", "Design Editorial", "Diagramação", "DE&I"],
      blocks: [
        { label: "Contexto", heading: "Transformar conteúdo técnico em leitura clara.", body: ["A cartilha foi desenvolvida como parte das iniciativas de Comunicação Interna da Subsea7."] },
        { label: "Objetivo", heading: "Facilitar a compreensão de conceitos de diversidade, equidade e inclusão.", body: ["Hierarquia, composição e recursos visuais foram usados para organizar informações complexas de forma acessível."] }
      ],
      gallery: [
        { src: "assets/images/cartilha-diversidade-cover.png", alt: "Capa da cartilha de Diversidade, Equidade e Inclusão", span: "full" }
      ],
      results: [
        { label: "Resultado", value: "Material editorial claro, consistente e alinhado à comunicação interna da Subsea7." }
      ]
    },

    {
      slug: "diversidade-sexual",
      index: "08",
      client: "Subsea7",
      displayName: "Diversidade Sexual",
      year: "2024",
      category: "Design Editorial | Comunicação Interna",
      title: "Comunicar diversidade também é tornar informação acessível.",
      description: "Design editorial e diagramação de uma cartilha interna sobre diversidade sexual e cidadania LGBTQIAP+, estruturada para tornar conceitos e definições mais claros e acessíveis.",
      impact: "O projeto transforma conteúdos educativos sobre orientação sexual, identidade e expressão de gênero em uma experiência de leitura organizada, didática e alinhada à comunicação da Subsea7.",
      cover: "assets/images/diversidade-sexual-cover.jpg",
      coverAlt: "Capa da cartilha Diversidade Sexual e a Cidadania LGBTQIAP+ desenvolvida para a Subsea7",
      format: "left",
      role: "Design Editorial · Diagramação",
      disciplines: ["Comunicação Interna", "Design Editorial", "Diagramação", "Diversidade & Inclusão"],
      blocks: [],
      gallery: [],
      results: []
    },

    {
      slug: "residuo-responsavel",
      index: "09",
      client: "Subsea7",
      displayName: "Resíduo Responsável",
      year: "2025",
      category: "Campanha | Identidade Visual | Comunicação Interna",
      title: "Comunicação para transformar descarte em responsabilidade coletiva.",
      description: "Planejamento e comunicação interna de uma campanha de conscientização sobre segregação correta de resíduos, conectando educação, engajamento e diferentes canais internos.",
      impact: "A iniciativa foi estruturada para ir além de uma ação pontual: educar, desmistificar, engajar e manter o tema presente na rotina dos colaboradores.",
      cover: "assets/images/residuo-responsavel-cover.jpg",
      coverAlt: "Identidade da campanha Resíduo Responsável desenvolvida para a Subsea7",
      format: "right",
      role: "Comunicação Interna · Design · Planejamento",
      disciplines: ["Comunicação Interna", "Planejamento de campanha", "Design", "Endomarketing"],
      blocks: [],
      gallery: [],
      results: []
    },

    {
      slug: "siga-via",
      index: "10",
      client: "Siga Via",
      displayName: "Siga Via",
      year: "2021",
      category: "Identidade Visual | Direção de Arte",
      title: "Uma identidade para colocar a logística em movimento.",
      description: "Construção de uma identidade visual de alto contraste para uma marca do universo logístico, conectando caminho, movimento e reconhecimento em um sistema direto e versátil.",
      impact: "Preto, branco e amarelo estruturam uma linguagem capaz de manter presença da comunicação institucional às aplicações ligadas à operação.",
      cover: "assets/images/siga-via-cover.png",
      coverAlt: "Aplicação da identidade Siga Via em veículo utilitário preto e amarelo",
      format: "left",
      role: "Branding · Design · Direção de Arte",
      disciplines: ["Identidade visual", "Branding", "Direção de Arte", "Aplicações"],
      blocks: [],
      gallery: [],
      results: []
    },

    {
      slug: "caramelo",
      index: "11",
      client: "Caramelo",
      displayName: "Caramelo",
      year: "2020",
      category: "Identidade Visual | Direção de Arte",
      title: "Uma marca feita para transformar carinho em experiência.",
      description: "Identidade visual criada para uma doceria artesanal, traduzindo proximidade, espontaneidade e afeto em um sistema visual leve, expressivo e reconhecível.",
      impact: "Lettering, cor e linguagem verbal trabalham juntos para transformar embalagem e produto em uma experiência de marca feita com amor.",
      cover: "assets/images/caramelo-cover.png",
      coverAlt: "Embalagem da Caramelo em creme e rosa com a assinatura feito com amor",
      format: "right",
      role: "Branding · Identidade Visual · Direção de Arte",
      disciplines: ["Identidade visual", "Branding", "Direção de Arte", "Packaging"],
      blocks: [],
      gallery: [],
      results: []
    },

    {
      slug: "phobos",
      index: "12",
      client: "Projeto autoral",
      displayName: "PHOBOS",
      year: "2021",
      category: "Audiovisual | Direção de Arte | Projeto Autoral",
      title: "Um curta sobre os conflitos que acontecem por dentro.",
      description: "Projeto autoral concebido para deslocar o olhar da reação social para a experiência interna do protagonista, explorando medo, disforia de gênero, autoentendimento e pertencimento.",
      impact: "Idealização, roteiro, direção de arte e edição reunidos em uma narrativa construída para aproximar o público do protagonista e gerar empatia antes de explicar.",
      cover: "assets/images/phobos-cover.png",
      coverAlt: "Pôster em preto e branco do curta-metragem PHOBOS, de 2021",
      format: "full",
      role: "Idealização · Roteiro · Direção de Arte · Edição",
      disciplines: ["Audiovisual", "Roteiro", "Direção de Arte", "Edição"],
      blocks: [],
      gallery: [],
      results: []
    },

  ]
};
