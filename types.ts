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
export interface ProjectDetailsType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  location: string;
  specs: { label: string; value: string; icon?: any }[];
  featureCategories?: {
    title: string;
    items: string[];
    icon?: string; // Icon name from Lucide
  }[];
  features: string[]; // Keep for backward compatibility or simple list
  mainImage: string;
  gallery: string[];
  price?: string; // Added optional price
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Deprecated alias to maintain backward compatibility if needed, or just replace usages
export type FeaturedProject = ProjectDetailsType;
