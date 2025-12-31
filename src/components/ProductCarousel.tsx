'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { fadeInUp, staggerContainer } from './variants';
import { useTranslations } from 'next-intl';
import { useCart } from '@/contexts/CartContext';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

function CarouselProductCard({ product, index, isVisible }: { product: Product; index: number; isVisible: boolean }) {
  const { addToCart } = useCart();
  const t = useTranslations();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50, rotateY: -15 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            rotateY: 0,
            transition: {
              duration: 0.7,
              ease: [0.25, 0.4, 0.25, 1],
            }
          }}
          className="flex-shrink-0 w-[240px] sm:w-[260px] md:w-[300px] lg:w-[320px]"
          style={{ scrollSnapAlign: 'start' }}
        >
          <Link href={`/products/${product.slug}`}>
            <motion.article
              className="group relative bg-white rounded-lg overflow-hidden h-full flex flex-col"
              whileHover={{ 
                y: -10,
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.15)',
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-100">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 320px"
                  />
                </motion.div>

                {/* Popular Badge */}
                {product.popular && (
                  <motion.span
                    className="absolute top-3 left-3 md:top-4 md:left-4 bg-terracotta-500 text-white text-[10px] md:text-xs font-sans tracking-wider uppercase px-2 py-1 md:px-3 md:py-1.5 rounded-full"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {t('products.bestseller')}
                  </motion.span>
                )}

                {/* Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* View Button */}
                <motion.div
                  className="absolute inset-x-3 md:inset-x-4 bottom-3 md:bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="block w-full text-center py-2 md:py-3 bg-cream-50 text-charcoal-900 font-sans text-xs md:text-sm tracking-wide uppercase rounded-sm hover:bg-olive-600 hover:text-white transition-colors">
                    {t('products.viewDetails')}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-3 md:p-5 flex-1 flex flex-col">
                <span className="text-[10px] md:text-xs font-sans tracking-wider uppercase text-olive-600 mb-1 md:mb-2 block">
                  {product.category}
                </span>
                <h3 className="font-serif text-base md:text-lg lg:text-xl text-charcoal-900 mb-1 md:mb-2 group-hover:text-olive-700 transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-charcoal-500 line-clamp-2 mb-2 md:mb-3 hidden sm:block flex-1">
                  {product.shortDescription}
                </p>
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <p className="font-serif text-lg md:text-xl text-charcoal-900">
                    {product.price} MAD
                  </p>
                </div>
                
                {/* Add to Cart Button */}
                <motion.button
                  onClick={handleAddToCart}
                  className="w-full py-2 md:py-2.5 bg-olive-600 text-cream-50 font-sans text-xs tracking-wide uppercase rounded-sm hover:bg-olive-700 transition-colors flex items-center justify-center gap-2 mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingBag className="w-3 h-3 md:w-4 md:h-4" />
                  {t('products.addToCart')}
                </motion.button>
              </div>
            </motion.article>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProductCarousel({
  title,
  subtitle,
  products,
}: ProductCarouselProps) {
  const t = useTranslations();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer to start animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  // Staggered animation - show one product every 400ms
  useEffect(() => {
    if (!isInView) return;

    if (visibleCount < products.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setAnimationComplete(true);
    }
  }, [visibleCount, products.length, isInView]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-28 bg-cream-100 overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-12"
        >
          <div>
            {subtitle && (
              <motion.span
                variants={fadeInUp}
                className="text-xs md:text-sm font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase text-olive-600 mb-2 md:mb-4 block"
              >
                {t(subtitle)}
              </motion.span>
            )}
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900"
            >
              {t(title)}
            </motion.h2>
          </div>

          {/* Navigation Arrows - Only show after animation complete */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: animationComplete ? 1 : 0, 
              y: animationComplete ? 0 : 20 
            }}
            transition={{ duration: 0.5 }}
            className="hidden sm:flex items-center gap-2 md:gap-3 mt-4 sm:mt-0"
          >
            <motion.button
              onClick={() => scroll('left')}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-charcoal-300 text-charcoal-600 hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 transition-all rounded-full"
              aria-label="Scroll left"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-charcoal-300 text-charcoal-600 hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 transition-all rounded-full"
              aria-label="Scroll right"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-[calc((100vw-1280px)/2+1rem)] pb-4"
          style={{ scrollSnapType: animationComplete ? 'x mandatory' : 'none' }}
        >
          {products.map((product, index) => (
            <CarouselProductCard
              key={product.id}
              product={product}
              index={index}
              isVisible={index < visibleCount}
            />
          ))}
        </div>

        {/* Gradient Masks - Only show after animation complete */}
        <motion.div 
          className="absolute left-0 top-0 bottom-4 w-10 md:w-20 bg-gradient-to-r from-cream-100 to-transparent pointer-events-none hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute right-0 top-0 bottom-4 w-10 md:w-20 bg-gradient-to-l from-cream-100 to-transparent pointer-events-none hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Progress Indicator */}
        {!animationComplete && isInView && (
          <motion.div 
            className="flex justify-center mt-4 md:mt-6 gap-1.5 md:gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {products.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                  index < visibleCount 
                    ? 'w-5 md:w-8 bg-olive-600' 
                    : 'w-1 md:w-1.5 bg-beige-300'
                }`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
