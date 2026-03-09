'use client';

import { useLocale } from 'next-intl';
import { Pack, Locale, getLocalizedPack } from '@/types';

export function useLocalizedPack(pack: Pack) {
  const locale = useLocale() as Locale;
  return getLocalizedPack(pack, locale);
}
