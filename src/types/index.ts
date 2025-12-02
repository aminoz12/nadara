export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  images: string[];
  shortDescription: string;
  category: string;
  benefits: string[];
  ingredients: string;
  popular: boolean;
}

export interface Collection {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  product: string;
  avatar: string;
}

