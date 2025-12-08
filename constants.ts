import { Property, Testimonial } from './types';

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