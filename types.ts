export interface Property {
  id: number;
  title: string;
  price: string;
  features: string;
  type: 'invest' | 'live';
  image: string;
  tag?: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}
