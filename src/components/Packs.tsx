'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Gift } from 'lucide-react';
import { fadeInUp, staggerContainer } from './variants';

const packs = [
  {
    id: 1,
    name: 'Coffret - Rituel Beauté',
    nameLine2: 'Cheveux',
    slug: 'pack-essentiel-cheveux',
    description: '1 Shampoing solide au choix + Leave-in',
    price: 129,
    items: [
      '1 Shampoing solide au choix',
      'Leave-in'
    ],
    image: '/pack1.jpeg'
  },
  {
    id: 2,
    name: 'Pack Soin Profond',
    slug: 'pack-soin-profond',
    description: 'Baume + sérum + eau de rose gratuit',
    showGiftIcon: true,
    price: 145,
    items: [
      '1 Baume capillaire',
      'Sérum Acide Hyaluronique & Collagène',
      'Eau de Rose OFFERT'
    ],
    image: '/PACK2.jpg'
  },
  {
    id: 3,
    name: 'Coffret - Rituel',
    nameLine2: 'Purifiant',
    slug: 'pack-routine-cheveux',
    description: 'Savon au choix + 2 Shampoings solides au choix + Leave-in',
    price: 245,
    items: [
      '1 Savon au choix',
      '2 Shampoings solides au choix',
      'Leave-in'
    ],
    image: '/PACK3.jpg'
  },
  {
    id: 4,
    name: 'Coffret - Savons',
    nameLine2: 'Précieux',
    slug: 'pack-decouverte-Savons à froids',
    description: '4 Savons au choix',
    price: 199,
    items: [
      '4 Savons au choix'
    ],
    image: '/PACK4.jpg'
  },
  {
    id: 5,
    name: 'Coffret - Rituel de Bien-Être',
    slug: 'pack-complet-visage',
    description: 'Savon au choix + Shampoing solide au choix + Leave-in + Sérum + Eau de rose offert',
    showGiftIcon: true,
    price: 329,
    items: [
      '1 Savon au choix',
      '1 Shampoing solide au choix',
      'Leave-in',
      'Sérum Acide Hyaluronique & Collagène',
      'Eau de Rose offert'
    ],
    image: '/PACK5.jpg'
  }
];

export default function Packs() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-cream-100">
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
            Découvrir Nos Packs
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900 mb-3 md:mb-4"
          >
            Découvrir Nos Packs
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base lg:text-lg text-charcoal-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
          >
            Idéal pour offrir ou se faire plaisir
          </motion.p>
        </motion.div>

        {/* Packs Grid - Image with text underneath */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 items-stretch"
        >
          {packs.map((pack, index) => (
            <motion.div
              key={pack.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer h-full flex flex-col"
            >
              {/* Pack Image */}
              <div className="relative mb-4 overflow-hidden rounded-2xl flex-shrink-0">
                <motion.div
                  className="aspect-square w-full rounded-full overflow-hidden border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={pack.image}
                    alt={pack.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to colored circle if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.className += ' bg-gradient-to-br from-olive-400 to-olive-600 flex items-center justify-center';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-white text-2xl font-bold">${pack.id}</span>`;
                    }}
                  />
                </motion.div>
                
                {/* Pack Number Badge */}
                <motion.div
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-sm font-bold text-olive-600">{pack.id}</span>
                </motion.div>
              </div>

              {/* Pack Text Content - flex-1 + min-h-0 so button row aligns across cards */}
              <div className="text-center flex-1 flex flex-col min-h-0">
                <motion.h3
                  className="font-serif text-lg md:text-xl text-charcoal-900 mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {pack.name}
                  {'nameLine2' in pack && pack.nameLine2 && (
                    <>
                      <br />
                      {pack.nameLine2}
                    </>
                  )}
                </motion.h3>
                <motion.p
                  className="text-sm text-charcoal-600 mb-2 font-sans flex items-center justify-center gap-1.5 flex-wrap"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {pack.description}
                  {'showGiftIcon' in pack && pack.showGiftIcon && (
                    <span className="inline-flex" aria-hidden><Gift className="w-4 h-4 text-olive-600 flex-shrink-0" /></span>
                  )}
                </motion.p>
                
                {/* Price + CTA - same line across all cards (mt-auto on wrapper) */}
                <div className="mt-auto pt-2">
                  <p className="text-xl font-price text-olive-700 font-bold mb-3">
                    {pack.price} MAD
                  </p>
                  <Link href={`/packs/${pack.slug}`} className="block w-full">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2 px-3 bg-olive-600 text-white font-sans text-xs font-medium rounded-lg hover:bg-olive-700 transition-colors duration-300 whitespace-nowrap"
                    >
                      Choisir Ce Coffret
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
