'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Collection } from '@/types';
import { fadeInUp, staggerContainer } from './variants';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface CollectionsProps {
  collections: Collection[];
}

export default function Collections({ collections }: CollectionsProps) {
  const t = useTranslations();
  
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-cream-50 overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs md:text-sm font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase text-olive-600 mb-3 md:mb-4 block"
          >
            {t('categories.title')}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900"
          >
            {t('categories.subtitle')}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8"
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1]
              }}
            >
              <Link href={`/products?category=${encodeURIComponent(collection.name)}`}>
                <motion.article
                  className="group flex flex-col items-center text-center"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {/* Circular Image with Glow */}
                  <div className="relative mb-3 md:mb-5">
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-olive-400/30 rounded-full blur-xl scale-90 hidden md:block"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Image Container */}
                    <motion.div 
                      className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-2 md:ring-4 ring-beige-200 group-hover:ring-olive-400 transition-all duration-500"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 144px, 160px"
                        />
                      </motion.div>
                      
                      {/* Shine Effect - Desktop only */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent hidden md:block"
                        initial={{ x: '-100%', opacity: 0 }}
                        whileHover={{ x: '100%', opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-olive-900/0 group-hover:bg-olive-900/10 transition-colors duration-500" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.h3 
                    className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal-900 mb-1 md:mb-2 group-hover:text-olive-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {collection.name}
                  </motion.h3>
                  <p className="text-xs md:text-sm text-charcoal-500 mb-2 md:mb-4 line-clamp-2 max-w-[150px] md:max-w-[200px] hidden sm:block">
                    {collection.description}
                  </p>
                  <motion.span
                    className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm font-sans text-olive-600 uppercase tracking-wide group-hover:text-olive-800"
                    whileHover={{ x: 5, gap: '12px' }}
                    transition={{ duration: 0.3 }}
                  >
                    {t('categories.explore')}
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </motion.span>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
