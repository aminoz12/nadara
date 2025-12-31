'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './variants';

const packs = [
  {
    id: 1,
    name: 'Pack Découverte Savons',
    description: '4 types de savons artisanaux',
    items: [
      'Savon Charbon Actif',
      'Savon Miel & Avoine', 
      'Savon Nigelle & Argile',
      'Savon Café'
    ],
    image: '/pack1.jpg' // Placeholder - replace with actual pack image
  },
  {
    id: 2,
    name: 'Pack Routine Cheveux',
    description: 'Savon + 2 shampoings solides + leave in coconut',
    items: [
      '1 Savon au choix',
      '2 Shampoings solides',
      'Leave-in Coconut'
    ],
    image: '/pack2.jpg' // Placeholder - replace with actual pack image
  },
  {
    id: 3,
    name: 'Pack Complet Visage',
    description: 'Savon + shampoing + leave in + sérum + eau de rose gratuit',
    items: [
      '1 Savon au choix',
      '1 Shampoing solide',
      'Leave-in Coconut',
      'Sérum Acide Hyaluronique & Collagène',
      'Eau de Rose OFFERT'
    ],
    image: '/pack3.jpg' // Placeholder - replace with actual pack image
  },
  {
    id: 4,
    name: 'Pack Soin Profond',
    description: 'Baume + sérum + eau de rose gratuit',
    items: [
      '1 Baume capillaire',
      'Sérum Acide Hyaluronique & Collagène',
      'Eau de Rose OFFERT'
    ],
    image: '/pack4.jpg' // Placeholder - replace with actual pack image
  },
  {
    id: 5,
    name: 'Pack Essentiel Cheveux',
    description: 'Shampoing solide + leave in',
    items: [
      '1 Shampoing solide au choix',
      'Leave-in Coconut'
    ],
    image: '/pack5.jpg' // Placeholder - replace with actual pack image
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
            Des combinaisons parfaites pour prendre soin de vous avec des produits naturels et efficaces
          </motion.p>
        </motion.div>

        {/* Packs Grid - Image with text underneath */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
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

              {/* Pack Text Content */}
              <div className="text-center flex-1 flex flex-col">
                <motion.h3
                  className="font-serif text-lg md:text-xl text-charcoal-900 mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {pack.name}
                </motion.h3>
                <motion.p
                  className="text-sm text-charcoal-600 mb-3 font-sans"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {pack.description}
                </motion.p>
                
                {/* Items List */}
                <ul className="space-y-1 mb-4 flex-1">
                  {pack.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs text-charcoal-500 font-sans">
                      • {item}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 px-3 bg-olive-600 text-white font-sans text-xs font-medium rounded-lg hover:bg-olive-700 transition-colors duration-300 mt-auto"
                >
                  Choisir ce pack
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
