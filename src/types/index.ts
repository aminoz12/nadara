export type Locale = 'fr' | 'en' | 'ar';

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  images: string[];
  shortDescription: string;
  category: string;
  bienfaits: string[];
  ingredients: string;
  popular: boolean;
  usageInstructions?: string[];
  equivalence?: string;
  // Localized fields (fr = default name/shortDescription/category/bienfaits/ingredients/usageInstructions)
  name_en?: string;
  name_ar?: string;
  shortDescription_en?: string;
  shortDescription_ar?: string;
  category_en?: string;
  category_ar?: string;
  bienfaits_en?: string[];
  bienfaits_ar?: string[];
  ingredients_en?: string;
  ingredients_ar?: string;
  usageInstructions_en?: string[];
  usageInstructions_ar?: string[];
  equivalence_en?: string;
  equivalence_ar?: string;
}

/** Returns localized product fields for display. Falls back to default (French) when locale translation is missing. */
export function getLocalizedProduct(product: Product, locale: Locale): {
  name: string;
  shortDescription: string;
  category: string;
  bienfaits: string[];
  ingredients: string;
  usageInstructions: string[];
  equivalence?: string;
} {
  const isEn = locale === 'en';
  const isAr = locale === 'ar';
  return {
    name: (isEn && product.name_en) || (isAr && product.name_ar) || product.name,
    shortDescription: (isEn && product.shortDescription_en) || (isAr && product.shortDescription_ar) || product.shortDescription,
    category: (isEn && product.category_en) || (isAr && product.category_ar) || product.category,
    bienfaits: (isEn && product.bienfaits_en) || (isAr && product.bienfaits_ar) || product.bienfaits,
    ingredients: (isEn && product.ingredients_en) || (isAr && product.ingredients_ar) || product.ingredients,
    usageInstructions: (isEn && product.usageInstructions_en) || (isAr && product.usageInstructions_ar) || product.usageInstructions || [],
    equivalence: (isEn && product.equivalence_en) || (isAr && product.equivalence_ar) || product.equivalence,
  };
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

export interface Pack {
  id: number;
  name: string;
  slug: string;
  price: number;
  images: string[];
  shortDescription: string;
  category: string;
  items: string[];
  bienfaits: string[];
  ingredients: string;
  popular: boolean;
  usageInstructions?: string[];
  name_en?: string;
  name_ar?: string;
  shortDescription_en?: string;
  shortDescription_ar?: string;
  category_en?: string;
  category_ar?: string;
  items_en?: string[];
  items_ar?: string[];
  bienfaits_en?: string[];
  bienfaits_ar?: string[];
  ingredients_en?: string;
  ingredients_ar?: string;
  usageInstructions_en?: string[];
  usageInstructions_ar?: string[];
}

/** Returns localized pack fields. Falls back to default (French) when locale translation is missing. */
export function getLocalizedPack(pack: Pack, locale: Locale): {
  name: string;
  shortDescription: string;
  category: string;
  items: string[];
  bienfaits: string[];
  ingredients: string;
  usageInstructions: string[];
} {
  const isEn = locale === 'en';
  const isAr = locale === 'ar';
  return {
    name: (isEn && pack.name_en) || (isAr && pack.name_ar) || pack.name,
    shortDescription: (isEn && pack.shortDescription_en) || (isAr && pack.shortDescription_ar) || pack.shortDescription,
    category: (isEn && pack.category_en) || (isAr && pack.category_ar) || pack.category,
    items: (isEn && pack.items_en) || (isAr && pack.items_ar) || pack.items,
    bienfaits: (isEn && pack.bienfaits_en) || (isAr && pack.bienfaits_ar) || pack.bienfaits,
    ingredients: (isEn && pack.ingredients_en) || (isAr && pack.ingredients_ar) || pack.ingredients,
    usageInstructions: (isEn && pack.usageInstructions_en) || (isAr && pack.usageInstructions_ar) || pack.usageInstructions || [],
  };
}
