'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from './variants';

export default function ProductionProcess() {
  const skincareTips = [
    {
      title: 'Hydratation Quotidienne',
      subtitle: 'Le secret d\'une peau éclatante',
      description: 'Une peau bien hydratée est la base d\'un teint lumineux. Appliquez votre Crèmes hydratante sur peau légèrement humide pour maximiser l\'absorption. Nos sérums à base d\'huiles végétales naturelles pénètrent en profondeur pour nourrir votre peau de l\'intérieur.',
      tip: '💡 Astuce : Buvez au moins 2L d\'eau par jour ',
      image: '/blog1.png',
      accent: '#7C9A6B',
      link: '/products/serum-collagene-acide-hyaluronique-b5',
    },
    {
      title: 'Routine du Soir',
      subtitle: 'Réparez pendant la nuit',
      description: 'La nuit, votre peau se régénère naturellement. Nettoyez toujours votre visage avant de dormir pour éliminer impuretés et maquillage. Nos Savons à froids artisanaux SAF respectent le film hydrolipidique tout en purifiant en douceur.',
      tip: '💡 Astuce : Changez votre taie d\'oreiller régulièrement',
      image: '/blog2.png',
      accent: '#9B7B5E',
      link: '/products?category=Savons à froid',
    },
    {
      title: 'Protection Naturelle',
      subtitle: 'Préservez votre capital jeunesse',
      description: 'Protégez votre peau des agressions extérieures avec des soins riches en antioxydants. Nos formules à base d\'ingrédients bio créent une barrière protectrice tout en nourrissant intensément votre épiderme jour après jour.',
      tip: '💡 Astuce : Évitez l\'eau trop chaude sur le visage',
      image: '/blog3.png',
      accent: '#C4A77D',
      link: '/products/poudre-eclaircissante',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#FAF8F5] via-[#F5F1EB] to-[#FAF8F5] overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7C9A6B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C4A77D]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9B7B5E]/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12 md:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-[#7C9A6B] mb-4 px-4 py-2 bg-[#7C9A6B]/10 rounded-full"
          >
            Conseils Beauté
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C3E2D] mb-5 leading-tight"
          >
            Prenez Soin de Votre Peau
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg lg:text-xl text-[#5A6B5C] max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez nos conseils experts pour une routine skincare efficace, 
            sublimée par nos produits naturels artisanaux
          </motion.p>
        </motion.div>

        {/* Articles Grid - 3 in one row */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {skincareTips.map((tip, index) => (
            <motion.article
              key={tip.title}
              variants={fadeInUp}
              custom={index}
              className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] transition-all duration-500 h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-52 md:h-56 lg:h-64 overflow-hidden">
            <motion.div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${tip.image})` }}
                />
                <div 
                  className="absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `linear-gradient(180deg, transparent 0%, ${tip.accent}40 100%)` }}
                />

                {/* Article number */}
                <div className="absolute bottom-4 left-4">
                  <span 
                    className="font-serif text-5xl md:text-6xl font-bold opacity-20"
                    style={{ color: tip.accent }}
                  >
                    0{index + 1}
                  </span>
                </div>
          </div>

              {/* Content */}
              <div className="p-5 md:p-6 lg:p-8 flex-1 flex flex-col">
                <span 
                  className="text-xs font-medium tracking-wider uppercase mb-2 block"
                  style={{ color: tip.accent }}
                >
                  {tip.subtitle}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-[#2C3E2D] mb-3 group-hover:text-[#7C9A6B] transition-colors duration-300">
                  {tip.title}
                </h3>
                <p className="text-sm md:text-base text-[#6B7B6D] leading-relaxed mb-4">
                  {tip.description}
                </p>
                
                {/* Tip Box */}
                <div 
                  className="p-3 md:p-4 rounded-xl mb-4"
                  style={{ backgroundColor: `${tip.accent}10` }}
                >
                  <p className="text-xs md:text-sm font-medium" style={{ color: tip.accent }}>
                    {tip.tip}
                  </p>
                </div>

                {/* CTA Link */}
                <Link href={tip.link} className="mt-auto">
                  <motion.span
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#7C9A6B] group/link cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Profitez de l'Offre
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </motion.span>
                </Link>
              </div>

              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: tip.accent }}
              />
            </motion.article>
          ))}
                  </motion.div>

        {/* Bottom CTA */}
                <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-[#6B7B6D] mb-6 text-sm md:text-base">
            Tous nos produits sont formulés avec des ingrédients naturels pour accompagner votre routine beauté
          </p>
          <Link href="/products">
            <motion.span
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#7C9A6B] text-white font-medium rounded-full hover:bg-[#6B8A5A] transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Découvrir nos produits
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
              </motion.div>
      </div>
    </section>
  );
}
