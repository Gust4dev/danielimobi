import { Property, Testimonial, ProjectDetailsType } from './types';

export const WHATSAPP_LINK = 'https://wa.me/5562992746409';


export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Casa Grand Trianon",
    price: "R$ 2.250.000",
    features: "3 Suítes • Alto Padrão",
    type: 'live',
    image: "/images/Vendas/opcao1/opcao1-2.webp",
    tag: "ALTO PADRÃO"
  },
  {
    id: 2,
    title: "Galpão Comercial",
    price: "R$ 2.000.000",
    features: "1000m² • Logística e Comércio",
    type: 'invest',
    image: "/images/Vendas/opcao2/opcao2-7.webp",
    tag: "OPORTUNIDADE"
  },
  {
    id: 3,
    title: "Casa no Parque Brasília",
    price: "R$ 430.000",
    features: "3 Quartos • Lazer Completo",
    type: 'live',
    image: "/images/Vendas/opcao3/opcao3-18.webp",
    tag: "VENDA RÁPIDA"
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Não tentou me empurrar nada. Entendeu meu perfil e achou exatamente o que eu precisava para investir.",
    author: "Ricardo",
    role: "Investidor"
  },
  {
    id: 2,
    text: "A segurança jurídica que ele passa é surreal. Cuidou de toda a papelada e eu não tive dor de cabeça nenhuma.",
    author: "Ana Paula",
    role: "Empresária"
  },
  {
    id: 3,
    text: "Visão de mercado impressionante. O imóvel que ele me indicou valorizou muito antes mesmo da entrega.",
    author: "Dr. Carlos",
    role: "Médico"
  },
  {
    id: 4,
    text: "Economizou meu tempo. Filtrou só o que realmente tinha o padrão que minha família buscava.",
    author: "Fernanda",
    role: "Arquiteta"
  },
  {
    id: 5,
    text: "Transparência total. Me mostrou os prós e contras de cada opção sem rodeios. Profissional raro.",
    author: "Roberto",
    role: "Advogado"
  }
];


export const FEATURED_PROJECTS: Record<string, ProjectDetailsType> = {
  'HIT': {
    id: 'HIT',
    title: 'HIT',
    subtitle: '"Onde sua vida acontece agora"',
    location: 'Cidade Universitária',
    description: 'Modernidade e valorização no metro quadrado mais desejado de Anápolis.',

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
    mainImage: '/images/HIT/HITzigzag_main.webp',
    gallery: [
      '/images/HIT/HIT (1).webp',
      '/images/HIT/HIT (2).webp',
      '/images/HIT/HIT (3).webp',
      '/images/HIT/HIT (4).webp',
      '/images/HIT/HIT (5).webp',
      '/images/HIT/HIT (6).webp',
      '/images/HIT/HIT (7).webp',
      '/images/HIT/HIT (8).webp',
      '/images/HIT/HIT (9).webp',
    ],
    coordinates: {
      lat: -16.3235,
      lng: -48.9512
    }
  },
  'ARES': {
    id: 'ARES',
    title: 'ARES JUNDIAÍ',
    subtitle: '"Viver novos ares no bairro mais nobre"',
    location: 'Bairro Jundiaí',
    description: 'O novo marco urbano com 30 andares e vista 360º.',
    fullDescription: `O Bairro Jundiaí, um dos mais tradicionais e valorizados de Anápolis, ganha um novo marco na paisagem urbana: o Ares Jundiaí. Com 30 andares e vista panorâmica em 360 graus, ele redefine o horizonte da cidade.
    
    Assinado pela EMISA Incorporadora (48 anos de história), o empreendimento aposta na verticalização inteligente e no conceito de "viver novos ares". O lazer é distribuído estrategicamente em dois pavimentos: Rooftop e Sub Living, além de espaços planejados para trabalho, convivência e bem-estar.
    
    Localizado próximo ao Parque Ipiranga, colégios tradicionais e clínicas médicas, o Ares consolida posicionamento de alta qualidade e valorização urbana.`,
    specs: [
      { label: 'Tipologia', value: '2 e 3 Quartos' },
      { label: 'Metragem', value: '62m² e 82m²' },
      { label: 'Lazer', value: 'Rooftop + Sub Living' },
    ],
    featureCategories: [
      {
        title: "Lazer Premium",
        items: [
          "Gourmet Rooftop",
          "Piscina Climatizada",
          "Spa & Sauna",
          "Pub Exclusivo",
          "Mirante 360º"
        ],
        icon: "Sofa"
      },
      {
        title: "Facilidades",
        items: [
          "Coworking",
          "Espaço Delivery",
          "Portaria 24h",
          "Lobby Imponente",
          "Bicicletário"
        ],
        icon: "Smartphone"
      },
      {
        title: "Bem-estar",
        items: [
          "Academia (Fitness Rooftop)",
          "Sala de Massagem",
          "Espaço Beleza",
          "Praça de Convivência",
          "Pet Place"
        ],
        icon: "Leaf"
      },
      {
        title: "Família",
        items: [
          "Brinquedoteca",
          "Playground",
          "Piscina Infantil",
          "Salão de Festas",
          "Salão de Jogos"
        ],
        icon: "ShieldCheck"
      }
    ],
    features: [
      'Vista Panorâmica',
      '30 Andares',
      'Rooftop Completo',
      'Localização Nobre',
      'Piscina Climatizada',
      'Design Imponente'
    ],
    mainImage: '/images/Ares/ares-1.webp',
    gallery: [
      '/images/Ares/ares-3.webp',
      '/images/Ares/ares-5.webp',
      '/images/Ares/ares-7.webp',
      '/images/Ares/ares-10.webp',
      '/images/Ares/ares-11.webp',
      '/images/Ares/ares-14.webp',
      '/images/Ares/ares-15.webp',
      '/images/Ares/ares-18.webp',
      '/images/Ares/ares-20.webp',
    ],
    coordinates: {
      lat: -16.3190,
      lng: -48.9600
    }
  },
  'DOMUS': {
    id: 'DOMUS',
    title: 'DOMUS BLACK',
    subtitle: '"Um novo conceito de sofisticação urbana"',
    location: 'Ao lado da UniEVANGÉLICA',
    description: 'Privacidade absoluta e design assinado pelo Estúdio LF.',

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
    mainImage: '/images/DOMUS/domuszigzag_main.webp',
    gallery: [
      '/images/DOMUS/Domus (7).webp',
      '/images/DOMUS/Domus (3).webp',
      '/images/DOMUS/Domus (4).webp',
      '/images/DOMUS/Domus (5).webp',
      '/images/DOMUS/Domus (2).webp',
      '/images/DOMUS/Domus (6).webp',
      '/images/DOMUS/Domus (8).webp',
      '/images/DOMUS/Domus (9).webp',
      '/images/DOMUS/Domus (10).webp',
      '/images/DOMUS/Domus (11).webp',
      '/images/DOMUS/Domus (12).webp',
      '/images/DOMUS/Domus (13).webp',
      '/images/DOMUS/Domus (14).webp',
      '/images/DOMUS/Domus (1).webp',
    ],
    coordinates: {
      lat: -16.3322,
      lng: -48.9382
    }
  }
};


export const SALES_DETAILS: Record<string, ProjectDetailsType> = {
  'OPCAO1': {
    id: 'opcao1',
    title: 'Casa Alto Padrão - Condomínio Grand Trianon',
    subtitle: 'R$ 2.250.000,00',
    location: 'Condomínio Grand Trianon, Anápolis',
    description: 'Casa de Alto Padrão com 3 suítes, piscina aquecida e energia solar.',
    fullDescription: `Casa de Alto Padrão localizada no Condomínio Grand Trianon.
    
    Detalhes do Imóvel:
    - 3 suítes (Sendo 1 Suíte Master com Closet)
    - 1 Quarto sem Banheiro
    - Sala ampla com pé direito alto
    - Cozinha Gourmet integrada com Deck e Piscina
    - Piscina Aquecida com Ofurô
    - Garagem Subterrânea com Móveis Planejados
    
    Diferenciais:
    - Box nos banheiros
    - Cortinas de Tecido Automatizadas
    - Cortinas na Cozinha Blackout Autorizadas
    - Portas Toda em PVC Brancas
    - Poço Artesiano
    - Boiler de Água Quente 600 Litros
    - Aquecimento Solar (Produzindo até R$1.100,00/mês)
    - Automatização nas Janelas
    - Porta com fechadura digital`,
    price: 'R$ 2.250.000,00',
    specs: [
      { label: 'Valor', value: 'R$ 2.250.000' },
      { label: 'Terreno', value: '420 m²' },
      { label: 'Construção', value: '245 m²' }
    ],
    features: [
      '3 Suítes + 1 Quarto',
      'Piscina Aquecida + Ofurô',
      'Energia Solar',
      'Poço Artesiano',
      'Automação Residencial',
      'Garagem Subterrânea'
    ],
    mainImage: '/images/Vendas/opcao1/opcao1-6.webp',
    gallery: [
      '/images/Vendas/opcao1/opcao1-1.webp',
      '/images/Vendas/opcao1/opcao1-2.webp',
      '/images/Vendas/opcao1/opcao1-video-5.mp4',
      '/images/Vendas/opcao1/opcao1-3.webp',
      '/images/Vendas/opcao1/opcao1-4.webp',
      '/images/Vendas/opcao1/opcao1-5.webp',
      '/images/Vendas/opcao1/opcao1-6.webp',
      '/images/Vendas/opcao1/opcao1-7.webp',
      '/images/Vendas/opcao1/opcao1-8.webp',
      '/images/Vendas/opcao1/opcao1-9.webp',
      '/images/Vendas/opcao1/opcao1-10.webp',
      '/images/Vendas/opcao1/opcao1-11.webp',
      '/images/Vendas/opcao1/opcao1-12.webp',
      '/images/Vendas/opcao1/opcao1-13.webp',
      '/images/Vendas/opcao1/opcao1-14.webp',
      '/images/Vendas/opcao1/opcao1-15.webp',
      '/images/Vendas/opcao1/opcao1-16.webp',
      '/images/Vendas/opcao1/opcao1-17.webp',
      '/images/Vendas/opcao1/opcao1-18.webp',
      '/images/Vendas/opcao1/opcao1-19.webp',
      '/images/Vendas/opcao1/opcao1-20.webp',
      '/images/Vendas/opcao1/opcao1-video-4.mp4',
      '/images/Vendas/opcao1/opcao1-21.webp',
      '/images/Vendas/opcao1/opcao1-22.webp',
      '/images/Vendas/opcao1/opcao1-23.webp',
      '/images/Vendas/opcao1/opcao1-24.webp',
      '/images/Vendas/opcao1/opcao1-25.webp',
      '/images/Vendas/opcao1/opcao1-26.webp',
      '/images/Vendas/opcao1/opcao1-27.webp',
      '/images/Vendas/opcao1/opcao1-28.webp',
      '/images/Vendas/opcao1/opcao1-29.webp',
      '/images/Vendas/opcao1/opcao1-30.webp',
      '/images/Vendas/opcao1/opcao1-31.webp',
      '/images/Vendas/opcao1/opcao1-32.webp',
      '/images/Vendas/opcao1/opcao1-33.webp',
      '/images/Vendas/opcao1/opcao1-34.webp',
      '/images/Vendas/opcao1/opcao1-35.webp',
      '/images/Vendas/opcao1/opcao1-36.webp',
      '/images/Vendas/opcao1/opcao1-37.webp',
      '/images/Vendas/opcao1/opcao1-38.webp',
      '/images/Vendas/opcao1/opcao1-39.webp',
      '/images/Vendas/opcao1/opcao1-40.webp',
      '/images/Vendas/opcao1/opcao1-41.webp',
      '/images/Vendas/opcao1/opcao1-42.webp',
      '/images/Vendas/opcao1/opcao1-43.webp',
      '/images/Vendas/opcao1/opcao1-44.webp',
      '/images/Vendas/opcao1/opcao1-45.webp',
      '/images/Vendas/opcao1/opcao1-46.webp',
      '/images/Vendas/opcao1/opcao1-47.webp',
      '/images/Vendas/opcao1/opcao1-48.webp',
      '/images/Vendas/opcao1/opcao1-49.webp',
      '/images/Vendas/opcao1/opcao1-50.webp',
      '/images/Vendas/opcao1/opcao1-51.webp',
    ],
    coordinates: {
      lat: -16.3052,
      lng: -48.9328
    }
  },
  'OPCAO2': {
    id: 'opcao2',
    title: 'Galpão Comercial',
    subtitle: 'Oportunidade para Seu Negócio',
    location: 'R. F - Granjas Santo Antonio - Anápolis-GO',
    description: 'Galpão Comercial com 600 m² Construídos em Terreno de 1000 m².',
    fullDescription: `Galpão Comercial com 600 m² Construídos em Terreno de 1000 m² – Oportunidade para Seu Negócio!
    
    Espaço amplo, versátil e pronto para atender às necessidades da sua empresa. Localizado em área estratégica, este galpão oferece 600 m² de construção em um terreno de 1000 m², ideal para logística, armazenamento, indústria leve ou comércio. Invista em estrutura, localização e potencial de crescimento!
    
    Características:
    - 1 banheiro
    - 1000 m² total
    - 600 m² útil
    - Construído em 2025
    - Projeto aprovado
    
    Condições de pagamento:
    - Aceita permuta
    - Aceita carro
    - Aceita imóvel`,
    price: 'R$ 2.000.000',
    specs: [
      { label: 'Valor', value: 'R$ 2.000.000' },
      { label: 'Área Total', value: '1000 m²' },
      { label: 'Área Útil', value: '600 m²' }
    ],
    features: [
      '1000m² Total',
      '600m² Útil',
      'Logística/Comércio',
      'Projeto Aprovado',
      'Aceita Permuta'
    ],
    mainImage: '/images/Vendas/opcao2/opcao2-7.webp',
    gallery: [
      '/images/Vendas/opcao2/opcao2-1.webp',
      '/images/Vendas/opcao2/opcao2-6.webp',
      '/images/Vendas/opcao2/opcao2-7.webp',
      '/images/Vendas/opcao2/opcao2-8.webp',
      '/images/Vendas/opcao2/opcao2-9.webp',
      '/images/Vendas/opcao2/opcao2-10.webp',
      '/images/Vendas/opcao2/opcao2-11.webp',
    ],
    coordinates: {
      lat: -16.3490,
      lng: -48.9037
    }
  },
  'OPCAO3': {
    id: 'opcao3',
    title: 'Casa no Parque Brasília',
    subtitle: 'R$ 430.000,00',
    location: 'Rua PB-11, Qd. 25 - Lt. 20, Pq. Brasília II Etapa',
    description: 'A oportunidade perfeita para primeiro imóvel ou renda.',
    fullDescription: `Vende-se Casa com 3 quartos no Parque Brasília
    
    - 3 quartos (sendo um suíte)
    - Sala com pé direito duplo
    - Iluminação em LED
    - Banheiros com nicho iluminado
    - Acabamentos dos banheiros: Deca, Docol e Celite
    - Cozinha ampla integrada com a sala
    - Ilha para CookTop na cozinha
    - Garagem coberta para 2 carros
    - Área de serviço
    - Janelas em Blindex
    - Porcelanato polido retificado 72x72
    - Rodapé embutido
    - Gás encanado
    - Estrutura reforçada`,
    price: 'R$ 430.000,00',
    specs: [
      { label: 'Valor', value: 'R$ 430.000' },
      { label: 'Quartos', value: '3 Quartos' },
      { label: 'Garagem', value: '2 Vagas' },
      { label: 'Área do Lote', value: '150m²' },
      { label: 'Área Construída', value: '105m²' }
    ],
    features: [
      'Sala Pé Direito Duplo',
      'Iluminação em LED',
      'Banheiros com Nicho',
      'Acabamentos Premium',
      'Cozinha com Ilha',
      'Janelas em Blindex',
      'Porcelanato Polido',
      'Gás Encanado',
      'Estrutura Reforçada'
    ],
    mainImage: '/images/Vendas/opcao3/opcao3-18.webp',
    gallery: [
      '/images/Vendas/opcao3/opcao3-1.webp',
      '/images/Vendas/opcao3/opcao3-2.webp',
      '/images/Vendas/opcao3/opcao3-3.webp',
      '/images/Vendas/opcao3/opcao3-4.webp',
      '/images/Vendas/opcao3/opcao3-5.webp',
      '/images/Vendas/opcao3/opcao3-6.webp',
      '/images/Vendas/opcao3/opcao3-7.webp',
      '/images/Vendas/opcao3/opcao3-8.webp',
      '/images/Vendas/opcao3/opcao3-9.webp',
      '/images/Vendas/opcao3/opcao3-10.webp',
      '/images/Vendas/opcao3/opcao3-11.webp',
      '/images/Vendas/opcao3/opcao3-12.webp',
      '/images/Vendas/opcao3/opcao3-13.webp',
      '/images/Vendas/opcao3/opcao3-14.webp',
      '/images/Vendas/opcao3/opcao3-15.webp',
      '/images/Vendas/opcao3/opcao3-16.webp',
      '/images/Vendas/opcao3/opcao3-17.webp',
      '/images/Vendas/opcao3/opcao3-18.webp',
      '/images/Vendas/opcao3/opcao3-19.webp',
      '/images/Vendas/opcao3/opcao3-20.webp',
      '/images/Vendas/opcao3/opcao3-21.webp',
      '/images/Vendas/opcao3/opcao3-22.webp',
    ],
    coordinates: {
      lat: -16.3115,
      lng: -48.9245
    }
  }
};