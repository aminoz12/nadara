'use client';

import { motion } from 'framer-motion';
import { Leaf, Heart, Sparkles, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from './variants';
import { useTranslations } from 'next-intl';

export default function Values() {
  const t = useTranslations();

  const values = [
    {
      icon: Leaf,
      title: t('values.pureIngredients'),
      description: t('values.pureIngredientsDesc'),
      color: 'from-olive-400 to-olive-600',
    },
    {
      icon: Heart,
      title: t('values.handcrafted'),
      description: t('values.handcraftedDesc'),
      color: 'from-terracotta-400 to-terracotta-600',
    },
    {
      icon: Sparkles,
      title: t('values.ancientWisdom'),
      description: t('values.ancientWisdomDesc'),
      color: 'from-amber-400 to-amber-600',
    },
    {
      icon: Globe,
      title: t('values.sustainable'),
      description: t('values.sustainableDesc'),
      color: 'from-blue-400 to-blue-600',
    },
  ];
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white overflow-hidden">
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
            {t('values.title')}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900 max-w-2xl mx-auto"
          >
            {t('values.subtitle')}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className="group text-center perspective-1000"
            >
              <motion.div
                className="relative p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-cream-50 border border-beige-200 h-full"
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                  borderColor: 'transparent'
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 rounded-xl md:rounded-2xl`}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Icon */}
                <motion.div
                  className={`relative w-14 h-14 md:w-16 lg:w-20 md:h-16 lg:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-br ${value.color} rounded-xl md:rounded-2xl text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <value.icon className="w-6 h-6 md:w-7 lg:w-9 md:h-7 lg:h-9" />
                  
                  {/* Floating particles - Desktop only */}
                  <motion.div
                    className="absolute w-2 h-2 bg-white/50 rounded-full hidden md:block"
                    animate={{
                      y: [-10, -20, -10],
                      x: [0, 10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    style={{ top: -5, right: -5 }}
                  />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="font-serif text-lg md:text-xl text-charcoal-900 mb-2 md:mb-3"
                  whileHover={{ scale: 1.02 }}
                >
                  {value.title}
                </motion.h3>
                <p className="text-charcoal-600 font-sans leading-relaxed text-xs md:text-sm">
                  {value.description}
                </p>

                {/* Decorative Line */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r ${value.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
