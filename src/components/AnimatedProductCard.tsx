'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTranslations } from 'next-intl';

interface AnimatedProductCardProps {
  product: Product;
  index?: number;
}

export default function AnimatedProductCard({
  product,
  index = 0,
}: AnimatedProductCardProps) {
  const { addToCart } = useCart();
  const t = useTranslations();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <Link href={`/products/${product.slug}`}>
        <motion.article
          className="group relative bg-white rounded-lg overflow-hidden perspective-1000"
          initial={{ rotateY: 0 }}
          whileHover={{ 
            y: -10,
            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.15)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-cream-100">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Popular Badge */}
            {product.popular && (
              <motion.span
                className="absolute top-4 left-4 bg-terracotta-500 text-white text-xs font-sans tracking-wider uppercase px-3 py-1.5 rounded-full"
                initial={{ opacity: 0, x: -20, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ delay: 0.3, type: 'spring' }}
                whileHover={{ scale: 1.1 }}
              >
                {t('products.bestseller')}
              </motion.span>
            )}

            {/* Quick Actions */}
            <motion.div
              className="absolute right-4 top-4 flex flex-col gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              <motion.button
                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal-700 hover:bg-olive-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Eye className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal-700 hover:bg-olive-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.15, rotate: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* View Details Button */}
            <motion.div
              className="absolute inset-x-4 bottom-4"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="block w-full text-center py-3 bg-cream-50 text-charcoal-900 font-sans text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"
                whileHover={{ backgroundColor: '#768B5A', color: '#FEFDFB' }}
              >
                {t('products.viewDetails')}
              </motion.span>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div 
            className="p-5"
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="text-xs font-sans tracking-wider uppercase text-olive-600 mb-2 block"
              whileHover={{ letterSpacing: '0.15em' }}
            >
              {product.category}
            </motion.span>
            <h3 className="font-serif text-lg md:text-xl text-charcoal-900 mb-2 group-hover:text-olive-700 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-sm text-charcoal-500 line-clamp-2 mb-3">
              {product.shortDescription}
            </p>
            <div className="flex items-center justify-between mb-3">
              <motion.p 
                className="font-serif text-xl text-charcoal-900"
                whileHover={{ scale: 1.1, x: 5 }}
              >
                ${product.price}
              </motion.p>
              <motion.div
                className="flex gap-1"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-terracotta-400"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ delay: i * 0.05 }}
                  />
                ))}
              </motion.div>
            </div>
            
            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              className="w-full py-2.5 bg-olive-600 text-cream-50 font-sans text-xs tracking-wide uppercase rounded-sm hover:bg-olive-700 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag className="w-4 h-4" />
              {t('products.addToCart')}
            </motion.button>
          </motion.div>

          {/* Border Animation */}
          <motion.div
            className="absolute inset-0 border-2 border-olive-500 rounded-lg pointer-events-none"
            initial={{ opacity: 0, scale: 1.05 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.article>
      </Link>
    </motion.div>
  );
}
