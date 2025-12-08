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
export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  location: string;
  specs: { label: string; value: string; icon?: any }[];
  features: string[];
  mainImage: string;
  gallery: string[];
}
