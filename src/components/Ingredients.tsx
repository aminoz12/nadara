'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Droplets, Sparkles, Heart, Leaf } from 'lucide-react';
import { fadeInUp, staggerContainer } from './variants';
import { useTranslations } from 'next-intl';

const ingredients = [
  {
    name: 'Argan Oil',
    origin: 'Morocco',
    description: 'Liquid gold of Morocco, rich in Vitamin E and fatty acids for deep nourishment.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=80',
  },
  {
    name: 'Prickly Pear',
    origin: 'Atlas Mountains',
    description: 'The rarest oil in the world with the highest Vitamin E content for anti-aging.',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=400&q=80',
  },
  {
    name: 'Shea Butter',
    origin: 'West Africa',
    description: 'Ultra-rich butter that melts into skin for intense moisture and protection.',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&q=80',
  },
  {
    name: 'Rose Damascena',
    origin: 'Valley of Roses',
    description: 'Queen of flowers, calming and regenerating for sensitive skin.',
    image: 'https://images.unsplash.com/photo-1518882605630-8eb392e8317b?w=400&q=80',
  },
];

export default function Ingredients() {
  const t = useTranslations();

  const benefits = [
    {
      icon: Sparkles,
      title: t('ingredients.antiAging'),
      description: t('ingredients.antiAgingDesc'),
      color: 'bg-terracotta-100 text-terracotta-600',
    },
    {
      icon: Droplets,
      title: t('ingredients.hydration'),
      description: t('ingredients.hydrationDesc'),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Heart,
      title: t('ingredients.soothing'),
      description: t('ingredients.soothingDesc'),
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Leaf,
      title: t('ingredients.organic'),
      description: t('ingredients.organicDesc'),
      color: 'bg-olive-100 text-olive-600',
    },
  ];
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
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
            {t('ingredients.subtitle')}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900 mb-3 md:mb-4"
          >
            {t('ingredients.title')}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base lg:text-lg text-charcoal-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
          >
            {t('ingredients.description')}
          </motion.p>
        </motion.div>

        {/* Ingredients Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-20"
        >
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              variants={fadeInUp}
              custom={index}
              className="group"
            >
              <motion.div
                className="relative overflow-hidden rounded-xl md:rounded-2xl bg-cream-100"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/20 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                  <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-cream-200 mb-0.5 md:mb-1 block">
                    {ingredient.origin}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base md:text-lg lg:text-xl text-cream-50 mb-1 md:mb-2">
                    {ingredient.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-cream-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                    {ingredient.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              custom={index}
              className="text-center"
            >
              <motion.div
                className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center rounded-full ${benefit.color}`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <benefit.icon className="w-5 h-5 md:w-7 md:h-7" />
              </motion.div>
              <h3 className="font-serif text-base md:text-lg text-charcoal-900 mb-1 md:mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm text-charcoal-600 font-sans hidden sm:block">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
