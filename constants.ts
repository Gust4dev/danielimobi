import { Property, Testimonial, FeaturedProject } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Imóvel de Luxo 1",
    price: "R$ 2.500.000",
    features: "4 Suítes | 600m²",
    type: 'live',
    image: "https://picsum.photos/id/10/800/600",
    tag: "Exclusividade"
  },
  {
    id: 2,
    title: "Lote Comercial",
    price: "R$ 850.000",
    features: "Terreno 450m² | Esquina",
    type: 'invest',
    image: "https://picsum.photos/id/13/800/600",
    tag: "Oportunidade"
  },
  {
    id: 3,
    title: "Penthouse Premium",
    price: "Consulte",
    features: "Vista Panorâmica | 300m²",
    type: 'live',
    image: "https://picsum.photos/id/48/800/600",
    tag: "Lançamento"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Excelente atendimento e profissionalismo. Encontrei exatamente o que procurava de forma rápida e segura.",
    author: "Cliente Satisfeito 1",
    role: "Investidor"
  },
  {
    id: 2,
    text: "A transparência na negociação foi o diferencial. Recomendo para quem busca segurança jurídica.",
    author: "Cliente Satisfeito 2",
    role: "Empresária"
  },
  {
    id: 3,
    text: "Consultoria de alto nível. Entenderam perfeitamente meu perfil e me apresentaram as melhores opções.",
    author: "Cliente Satisfeito 3",
    role: "Advogado"
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
      { label: 'Unidades', value: 'Studios e 1 Dorm' },
      { label: 'Metragem', value: '25m² a 45m²' },
      { label: 'Status', value: 'Lançamento' },
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
      { label: 'Unidades', value: '2 e 3 Suítes' },
      { label: 'Metragem', value: '110m² a 180m²' },
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