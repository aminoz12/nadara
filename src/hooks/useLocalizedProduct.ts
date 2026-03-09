'use client';

import { useLocale } from 'next-intl';
import { Product, Locale, getLocalizedProduct } from '@/types';

export function useLocalizedProduct(product: Product) {
  const locale = useLocale() as Locale;
  return getLocalizedProduct(product, locale);
}
