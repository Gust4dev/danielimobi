import { Property, Testimonial, ProjectDetailsType } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 1, // mapped to 'opcao1'
    title: "Residência Alto Padrão",
    price: "R$ 2.250.000",
    features: "Alto Luxo • Acabamento Premium",
    type: 'live',
    image: "/images/Vendas/opcao1/opcao1-2.jpeg",
    tag: "EXCLUSIVO"
  },
  {
    id: 2, // mapped to 'opcao2'
    title: "Galpão Comercial",
    price: "R$ 2.000.000",
    features: "Localização Privilegiada • Amplo Espaço",
    type: 'invest',
    image: "/images/Vendas/opcao2/opcao2-7.jpeg",
    tag: "INVESTIMENTO"
  },
  {
    id: 3, // mapped to 'opcao3'
    title: "Casa Parque Brasília",
    price: "R$ 430.000",
    features: "Ótimo para Renda • Prático",
    type: 'invest',
    image: "/images/Vendas/opcao3/opcao3-18.jpeg",
    tag: "OPORTUNIDADE"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "O Daniel tem uma visão de mercado diferenciada. Me ajudou a encontrar um apartamento que valorizou 40% em 18 meses.",
    author: "Dr. Carlos",
    role: "Médico"
  },
  {
    id: 2,
    text: "Segurança total na documentação. Foi a compra de imóvel mais tranquila que já fiz. Recomendo de olhos fechados.",
    author: "Ana Paula",
    role: "Empresária"
  },
  {
    id: 3,
    text: "Atendimento consultivo de verdade. Ele não tentou me empurrar qualquer imóvel, achou exatamente o que eu precisava.",
    author: "Ricardo",
    role: "Investidor"
  }
];

export const FEATURED_PROJECTS: Record<string, ProjectDetailsType> = {
  'HIT': {
    id: 'HIT',
    title: 'HIT',
    subtitle: '"Onde sua vida acontece agora"',
    location: 'Centro - Localização Estratégica',
    description: 'Um empreendimento vibrante, localizado no coração da cidade. O HIT foi desenhado para quem busca praticidade, modernidade e um estilo de vida dinâmico.',
    fullDescription: `O HIT é a materialização do estilo de vida contemporâneo. Localizado estrategicamente no centro da cidade, este empreendimento foi concebido para conectar você ao que realmente importa. 
    
    Com um design arrojado e funcional, o HIT oferece apartamentos compactos de alto padrão, ideais para investidores que buscam alta rentabilidade em aluguéis de curta temporada (Airbnb) ou para quem deseja viver com praticidade e sofisticação.
    
    A infraestrutura conta com áreas comuns entregues equipadas e decoradas, rooftop com vista panorâmica, coworking, academia moderna e lavanderia compartilhada.`,
    specs: [
      { label: 'Unidades', value: '1 e 2 Quartos' },
      { label: 'Metragem', value: '38m² a 69m²' },
      { label: 'Vagas', value: '1 Vaga' },
    ],
    features: [
      'Coworking Integrado',
      'Rooftop Lounge',
      'Academia Equipada',
      'Lavanderia',
      'Fechadura Digital',
      'Portaria Remota'
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
    title: 'DOMUS',
    subtitle: '"A arte de viver bem"',
    location: 'Bairro Nobre',
    description: 'Sofisticação e exclusividade definem o DOMUS. Um projeto para quem não abre mão de conforto, com acabamentos de alto padrão e uma arquitetura que impressiona.',
    fullDescription: `O DOMUS redefine o conceito de morar bem. Um projeto exclusivo, com poucas unidades, garantindo privacidade e tranquilidade para sua família.
    
    Cada detalhe foi pensado para oferecer o máximo de conforto: isolamento acústico superior, plantas generosas com varanda gourmet integrada e acabamentos de elite. A fachada imponente reflete a sofisticação do interior.
    
    O empreendimento oferece lazer completo com piscina aquecida, salão de festas gourmet e brinquedoteca segura.`,
    specs: [
      { label: 'Quartos', value: '1 Quarto' },
      { label: 'Metragem', value: '23m² a 38m²' },
      { label: 'Status', value: 'Em Construção' },
    ],
    features: [
      'Varanda Gourmet',
      'Piscina Aquecida',
      'Isolamento Acústico',
      '2 Vagas de Garagem',
      'Hobby Box Privativo',
      'Personalização de Planta'
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

export const WHATSAPP_LINK = 'https://wa.me/556292746409';

export const SALES_DETAILS: Record<string, ProjectDetailsType> = {
  'OPCAO1': {
    id: 'opcao1',
    title: 'Residência Premium',
    subtitle: 'R$ 2.250.000',
    location: 'Localização Exclusiva',
    description: 'Uma oportunidade única para quem busca conforto e exclusividade.',
    fullDescription: `Esta residência de alto padrão oferece o que há de melhor em conforto e sofisticação.
    
    Com acabamentos de primeira linha e um projeto arquitetônico moderno, cada espaço foi pensado para proporcionar bem-estar.
    
    Agende uma visita e encante-se com cada detalhe desta propriedade exclusiva.`,
    price: 'R$ 2.250.000',
    specs: [
      { label: 'Valor', value: 'R$ 2.250.000' },
      { label: 'Tipo', value: 'Residencial' },
      { label: 'Padrão', value: 'Alto Luxo' }
    ],
    features: [
      'Acabamento Premium',
      'Localização Privilegiada',
      'Ampla Área de Lazer',
      'Segurança 24h',
      'Design Moderno'
    ],
    mainImage: '/images/Vendas/opcao1/opcao1-2.jpeg',
    gallery: [
      '/images/Vendas/opcao1/opcao1-1.jpeg',
      '/images/Vendas/opcao1/opcao1-2.jpeg',
      '/images/Vendas/opcao1/opcao1-3.jpeg',
      '/images/Vendas/opcao1/opcao1-4.jpeg',
      '/images/Vendas/opcao1/opcao1-5.jpeg',
      '/images/Vendas/opcao1/opcao-1.mp4',
      '/images/Vendas/opcao1/opcao1-1.mp4',
      '/images/Vendas/opcao1/opcao1-2.mp4',
    ]
  },
  'OPCAO2': {
    id: 'opcao2',
    title: 'Oportunidade de Investimento',
    subtitle: 'R$ 2.000.000',
    location: 'Região Valorizada',
    description: 'Excelente opção para quem busca valorização e segurança no investimento.',
    fullDescription: `Imóvel situado em uma das regiões mais valorizadas da cidade.
    
    Ideal tanto para moradia quanto para investimento, com alto potencial de rentabilidade.
    
    Não perca essa oportunidade de realizar um grande negócio.`,
    price: 'R$ 2.000.000',
    specs: [
      { label: 'Valor', value: 'R$ 2.000.000' },
      { label: 'Tipo', value: 'Investimento' },
      { label: 'Potencial', value: 'Alta Valorização' }
    ],
    features: [
      'Localização Estratégica',
      'Documentação OK',
      'Pronto para Operação',
      'Bairro Planejado'
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
    title: 'Smart Investment',
    subtitle: 'R$ 430.000',
    location: 'Centro Expandido',
    description: 'A porta de entrada para o mercado imobiliário com segurança.',
    fullDescription: `Unidade compacta e funcional, perfeita para rentabilidade com locação ou primeira moradia.
    
    Localizado próximo a serviços essenciais e com fácil acesso às principais vias.
    
    Investimento inteligente com baixo custo de manutenção.`,
    price: 'R$ 430.000',
    specs: [
      { label: 'Valor', value: 'R$ 430.000' },
      { label: 'Tipo', value: 'Compacto' },
      { label: 'Rentabilidade', value: 'Imediata' }
    ],
    features: [
      'Baixo Condomínio',
      'Alta Procura',
      'Perto de Tudos',
      'Portaria 24h'
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