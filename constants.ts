import { Property, Testimonial, FeaturedProject } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Mansão Jundiaí",
    price: "R$ 2.500.000",
    features: "4 Suítes • 450m² • Piscina Aquecida",
    type: 'live',
    image: "https://images.unsplash.com/photo-1600596542815-6ad4c7213aa?q=80&w=2075&auto=format&fit=crop",
    tag: "OPORTUNIDADE"
  },
  {
    id: 2,
    title: "Lote Alphaville",
    price: "R$ 850.000",
    features: "Esquina • 600m² • Vista Livre",
    type: 'invest',
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop",
    tag: "INVESTIMENTO"
  },
  {
    id: 3,
    title: "Penthouse Centro",
    price: "Sob Consulta",
    features: "3 Suítes • Vista 360º • Acabamento Mármore",
    type: 'live',
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    tag: "EXCLUSIVO"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "O Daniel tem uma visão de mercado diferenciada. Me ajudou a encontrar um lote que valorizou 40% em menos de um ano.",
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

export const FEATURED_PROJECTS: Record<string, FeaturedProject> = {
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
      'Lavanderia OMO',
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