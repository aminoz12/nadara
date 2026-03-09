'use client';

import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useTranslations } from 'next-intl';
import { useLocalizedProduct } from '@/hooks/useLocalizedProduct';
import WhatsAppButton from './WhatsAppButton';

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();
  const t = useTranslations();
  const localized = useLocalizedProduct(product);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <motion.button
        onClick={() => addToCart(product)}
        className="flex-1 btn-primary flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <ShoppingBag className="w-5 h-5" />
        {t('products.addToCart')}
      </motion.button>
      <WhatsAppButton productName={localized.name} className="flex-1" />
    </div>
  );
}

