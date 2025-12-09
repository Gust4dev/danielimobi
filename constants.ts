import { Property, Testimonial, ProjectDetailsType } from './types';

export const WHATSAPP_LINK = 'https://wa.me/5562992746409';

// === VITRINE DE VENDAS (GRID MENOR) ===
export const PROPERTIES: Property[] = [
  {
    id: 1, // mapped to 'opcao1'
    title: "Residência no Jundiaí",
    price: "R$ 2.250.000",
    features: "4 Suítes • Acabamento Premium",
    type: 'live',
    image: "/images/Vendas/opcao1/opcao1-2.jpeg",
    tag: "ALTO PADRÃO"
  },
  {
    id: 2, // mapped to 'opcao2'
    title: "Galpão Comercial DAIA",
    price: "R$ 2.000.000",
    features: "Logística • Alta Rentabilidade",
    type: 'invest',
    image: "/images/Vendas/opcao2/opcao2-7.jpeg",
    tag: "OPORTUNIDADE"
  },
  {
    id: 3, // mapped to 'opcao3'
    title: "Casa Parque Brasília",
    price: "R$ 430.000",
    features: "3 Quartos • Lazer Completo",
    type: 'invest',
    image: "/images/Vendas/opcao3/opcao3-18.jpeg",
    tag: "VENDA RÁPIDA"
  }
];

// === PROVA SOCIAL ===
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "O Daniel tem uma visão de mercado cirúrgica. Me direcionou para um lançamento que valorizou 40% antes mesmo da entrega das chaves.",
    author: "Dr. Carlos",
    role: "Médico"
  },
  {
    id: 2,
    text: "Segurança jurídica total. Foi a transação imobiliária mais transparente que já fiz. O Daniel cuida de cada detalhe do contrato.",
    author: "Ana Paula",
    role: "Empresária"
  },
  {
    id: 3,
    text: "Não é apenas um corretor, é um consultor de patrimônio. Entendeu meu perfil conservador e montou uma carteira de renda passiva sólida.",
    author: "Ricardo",
    role: "Investidor"
  }
];

// === LANÇAMENTOS (OS DESTAQUES ZIG-ZAG) ===
export const FEATURED_PROJECTS: Record<string, ProjectDetailsType> = {
  'HIT': {
    id: 'HIT',
    title: 'HIT',
    subtitle: '"Onde sua vida acontece agora"',
    location: 'Cidade Universitária',
    description: 'Modernidade e valorização no metro quadrado mais desejado de Anápolis.',
    // TEXTO ENCURTADO E DIRETO
    fullDescription: `É Moderno. É Prático. É Rentável. Localizado no coração da Cidade Universitária, o HIT é a escolha definitiva para quem busca liquidez imediata e valorização patrimonial constante.`,
    specs: [
      { label: 'Tipologia', value: 'Studios e 2Q' },
      { label: 'Metragem', value: '38m² a 69m²' },
      { label: 'Rentabilidade', value: 'Alta Liquidez' },
    ],
    featureCategories: [
      {
        title: "Tecnologia (Smart Living)",
        items: [
          "Fechadura eletrônica",
          "Smart Locker",
          "Vaga para carros elétricos",
          "Wi-Fi nas áreas comuns",
          "Abertura via TAG"
        ],
        icon: "Smartphone"
      },
      {
        title: "Sustentabilidade",
        items: [
          "Energia fotovoltaica (Comum)",
          "Reúso de água",
          "Bicicletário compartilhado",
          "Torneiras temporizadoras",
          "Coleta seletiva"
        ],
        icon: "Leaf"
      },
      {
        title: "Segurança",
        items: [
          "Guarita blindada",
          "Pulmão de segurança",
          "Sensor de presença",
          "Gerador de energia",
          "CFTV HD"
        ],
        icon: "ShieldCheck"
      },
      {
        title: "Conforto",
        items: [
          "Infraestrutura Ar-Condicionado",
          "Tomadas USB",
          "Áreas comuns mobiliadas",
          "Acabamento by FC",
          "Projeto Lumínico/Térmico"
        ],
        icon: "Sofa"
      }
    ],
    features: [
      'Smart Locker',
      'Vaga Elétrica',
      'Guarita Blindada',
      'Rentabilidade',
      'Wi-Fi Zone',
      'Acabamento Premium'
    ],
    mainImage: '/images/HIT/HITzigzag_main.jpg',
    gallery: [
      '/images/HIT/HIT (1).jpeg',
      '/images/HIT/HIT (2).jpeg',
      '/images/HIT/HIT (3).jpeg',
      '/images/HIT/HIT (4).jpeg',
      '/images/HIT/HIT (5).jpeg',
      '/images/HIT/HIT (6).jpeg',
      '/images/HIT/HIT (7).jpeg',
      '/images/HIT/HIT (8).jpeg',
      '/images/HIT/HIT (9).jpeg',
    ]
  },
  'DOMUS': {
    id: 'DOMUS',
    title: 'DOMUS BLACK',
    subtitle: '"Um novo conceito de sofisticação urbana"',
    location: 'Ao lado da UniEVANGÉLICA',
    description: 'Privacidade absoluta e design assinado pelo Estúdio LF.',
    // TEXTO ENCURTADO E DIRETO (Baseado no PDF)
    fullDescription: `Privacidade absoluta em uma localização estratégica. Com design assinado e apenas 38 unidades, o Domus Black une sofisticação, conforto acústico e a conveniência de ter a cidade aos seus pés.`,
    specs: [
      { label: 'Exclusividade', value: '38 Unidades' },
      { label: 'Metragem', value: '22m² a 37m²' },
      { label: 'Assinatura', value: 'Estúdio LF' },
    ],
    featureCategories: [
      {
        title: "Black Edition",
        items: [
          "Fachada Imponente",
          "Isolamento Acústico Superior",
          "Varanda Gourmet Integrada",
          "Design Assinado (Estúdio LF)",
          "Ergonomia Inteligente"
        ],
        icon: "Sofa"
      },
      {
        title: "Lazer & Convivência",
        items: [
          "Piscina Aquecida",
          "Salão de Festas Gourmet",
          "Brinquedoteca Segura",
          "Lounge Externo",
          "Espaços Decorados"
        ],
        icon: "Leaf"
      },
      {
        title: "Localização Premium",
        items: [
          "Ao lado da UniEVANGÉLICA",
          "Próximo ao Hospital do Câncer",
          "Acesso rápido ao Shopping",
          "Região de alta valorização",
          "Conveniência total"
        ],
        icon: "MapPin"
      },
      {
        title: "Diferenciais",
        items: [
          "2 Vagas de Garagem (Opcional)",
          "Hobby Box Privativo",
          "Infraestrutura de Serviço",
          "Baixo custo de condomínio",
          "Alta demanda"
        ],
        icon: "Smartphone"
      }
    ],
    features: [
      'Design Assinado',
      'Piscina Aquecida',
      'Isolamento Acústico',
      'Varanda Gourmet',
      'Poucas Unidades',
      'Localização Nobre'
    ],
    mainImage: '/images/DOMUS/domuszigzag_main.png',
    gallery: [
      '/images/DOMUS/Domus (7).jpeg',
      '/images/DOMUS/Domus (3).jpeg',
      '/images/DOMUS/Domus (4).jpeg',
      '/images/DOMUS/Domus (5).jpeg',
      '/images/DOMUS/Domus (2).jpeg',
      '/images/DOMUS/Domus (6).jpeg',
      '/images/DOMUS/Domus (8).jpeg',
      '/images/DOMUS/Domus (9).jpeg',
      '/images/DOMUS/Domus (10).jpeg',
      '/images/DOMUS/Domus (11).jpeg',
      '/images/DOMUS/Domus (12).jpeg',
      '/images/DOMUS/Domus (13).jpeg',
      '/images/DOMUS/Domus (14).jpeg',
      '/images/DOMUS/Domus (1).jpeg',
    ]
  }
};

// === DETALHES DAS VENDAS AVULSAS ===
export const SALES_DETAILS: Record<string, ProjectDetailsType> = {
  'OPCAO1': {
    id: 'opcao1',
    title: 'Residência Premium Jundiaí',
    subtitle: 'R$ 2.250.000',
    location: 'Bairro Jundiaí - Área Nobre',
    description: 'Luxo clássico e conforto moderno em 450m².',
    fullDescription: `Esta residência oferece o ápice do conforto. Acabamentos em Mármore e Porcelanato de grandes formatos, com projeto que privilegia a luz natural.
    
    Área de lazer privativa com piscina aquecida e espaço gourmet integrado. O cenário perfeito para sua família.`,
    price: 'R$ 2.250.000',
    specs: [
      { label: 'Valor', value: 'R$ 2.250.000' },
      { label: 'Área', value: '450m²' },
      { label: 'Suítes', value: '4 Plenas' }
    ],
    features: [
      'Acabamento em Mármore',
      'Piscina Aquecida com Hidro',
      'Área Gourmet Integrada',
      'Home Cinema',
      'Sistema de Segurança'
    ],
    mainImage: '/images/Vendas/opcao1/opcao1-2.jpeg',
    gallery: [
      '/images/Vendas/opcao1/opcao1-1.jpeg',
      '/images/Vendas/opcao1/opcao1-2.jpeg',
      '/images/Vendas/opcao1/opcao1-3.jpeg',
      '/images/Vendas/opcao1/opcao1-4.jpeg',
      '/images/Vendas/opcao1/opcao1-5.jpeg',
      // VÍDEOS MANTIDOS CONFORME SOLICITADO
      '/images/Vendas/opcao1/opcao-1.mp4',
      '/images/Vendas/opcao1/opcao1-1.mp4',
      '/images/Vendas/opcao1/opcao1-2.mp4',
    ]
  },
  'OPCAO2': {
    id: 'opcao2',
    title: 'Galpão Logístico DAIA',
    subtitle: 'R$ 2.000.000',
    location: 'Distrito Agroindustrial',
    description: 'Estrutura pronta para operação de alta performance.',
    fullDescription: `Imóvel comercial em região de alto fluxo logístico. Pé direito de 8 metros, piso de alta tonelagem e docas para carga e descarga.
    
    Escritório administrativo no mezanino. Ideal para investidores de renda passiva ou expansão empresarial.`,
    price: 'R$ 2.000.000',
    specs: [
      { label: 'Valor', value: 'R$ 2.000.000' },
      { label: 'Área Total', value: '1.000m²' },
      { label: 'Pé Direito', value: '8 Metros' }
    ],
    features: [
      'Piso Alta Resistência',
      'Docas de Carregamento',
      'Área Administrativa',
      'Pátio de Manobra',
      'Transformador Próprio'
    ],
    mainImage: '/images/Vendas/opcao2/opcao2-7.jpeg',
    gallery: [
      '/images/Vendas/opcao2/opcao2-1.jpeg',
      '/images/Vendas/opcao2/opcao2-6.jpeg',
      '/images/Vendas/opcao2/opcao2-7.jpeg',
      '/images/Vendas/opcao2/opcao2-8.jpeg',
      '/images/Vendas/opcao2/opcao2-9.jpeg',
    ]
  },
  'OPCAO3': {
    id: 'opcao3',
    title: 'Casa Parque Brasília',
    subtitle: 'R$ 430.000',
    location: 'Região em Expansão',
    description: 'A oportunidade perfeita para primeiro imóvel ou renda.',
    fullDescription: `Unidade funcional e bem localizada. Casa térrea com excelente aproveitamento de terreno, possibilitando ampliações futuras.
    
    Próxima a escolas e vias de acesso rápido. Documentação 100% pronta para financiamento.`,
    price: 'R$ 430.000',
    specs: [
      { label: 'Valor', value: 'R$ 430.000' },
      { label: 'Quartos', value: '3 Quartos' },
      { label: 'Garagem', value: '2 Vagas' }
    ],
    features: [
      'Quintal Espaçoso',
      'Cozinha Americana',
      'Área de Serviço Coberta',
      'Muro Alto / Concertina',
      'Aceita Financiamento'
    ],
    mainImage: '/images/Vendas/opcao3/opcao3-18.jpeg',
    gallery: [
      '/images/Vendas/opcao3/opcao3-1.jpeg',
      '/images/Vendas/opcao3/opcao3-2.jpeg',
      '/images/Vendas/opcao3/opcao3-3.jpeg',
      '/images/Vendas/opcao3/opcao3-4.jpeg',
      '/images/Vendas/opcao3/opcao3-5.jpeg',
      '/images/Vendas/opcao3/opcao3-6.jpeg',
      '/images/Vendas/opcao3/opcao3-7.jpeg',
      '/images/Vendas/opcao3/opcao3-8.jpeg',
      '/images/Vendas/opcao3/opcao3-9.jpeg',
      '/images/Vendas/opcao3/opcao3-10.jpeg',
      '/images/Vendas/opcao3/opcao3-11.jpeg',
      '/images/Vendas/opcao3/opcao3-12.jpeg',
      '/images/Vendas/opcao3/opcao3-13.jpeg',
      '/images/Vendas/opcao3/opcao3-14.jpeg',
      '/images/Vendas/opcao3/opcao3-15.jpeg',
      '/images/Vendas/opcao3/opcao3-16.jpeg',
      '/images/Vendas/opcao3/opcao3-17.jpeg',
      '/images/Vendas/opcao3/opcao3-18.jpeg',
      '/images/Vendas/opcao3/opcao3-19.jpeg',
      '/images/Vendas/opcao3/opcao3-20.jpeg',
      '/images/Vendas/opcao3/opcao3-21.jpeg',
      '/images/Vendas/opcao3/opcao3-22.jpeg',
    ]
  }
};