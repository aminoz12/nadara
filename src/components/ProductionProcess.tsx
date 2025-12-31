'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Droplets, Hand, Package, CheckCircle, Box } from 'lucide-react';
import { fadeInUp, staggerContainer } from './variants';
import { useTranslations } from 'next-intl';

export default function ProductionProcess() {
  const t = useTranslations();

  const steps = [
    {
      number: '01',
      icon: Leaf,
      title: 'Sélection des Matières Premières',
      description: 'Choix d\'ingrédients naturels de qualité premium. Sélection d\'huiles végétales vierges, beurres bio, hydrolats purs, fragrances autorisées.',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
      color: 'from-green-400 to-olive-600',
    },
    {
      number: '02',
      icon: Droplets,
      title: 'Préparation & Pesée',
      description: 'Désinfection du laboratoire, matériel et contenants. Pesée précise des matières premières selon la formule certifiée. Mise en bain-marie des phases grasses et préparation de la phase aqueuse.',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80',
      color: 'from-blue-400 to-cyan-600',
    },
    {
      number: '03',
      icon: Hand,
      title: 'Fabrication / Mélange',
      description: 'Selon le type de produit : ✔ Savons SAF - Fonte des huiles et beurres, Préparation de la solution de soude, Mélange, trace, ajout des actifs, Coulage dans les moules, Démoulage et cure 4–6 semaines. ✔ Shampoings & Baumes sans eau - Fusion à faible température, Incorporation des actifs sensibles à froid, Mise en moule, Refroidissement et solidification. ✔ Crèmes & Sérums - Émulsion chaude ou à froid, Homogénéisation, Ajustement du pH, Ajout du conservateur.',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
      color: 'from-terracotta-400 to-orange-600',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Contrôle Qualité',
      description: 'Chaque lot est contrôlé : pH (idéal 5.0–5.5 pour soins visage/corps), Texture, couleur, parfum.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
      color: 'from-purple-400 to-indigo-600',
    },
    {
      number: '05',
      icon: Package,
      title: 'Conditionnement',
      description: 'Choix d\'emballages adaptés : pots, flacons, sticks, sachets. Nettoyage et désinfection des contenants. Remplissage manuel ou semi-automatique. Étiquetage conforme : INCI, lot, MHD, précautions, utilisation.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
      color: 'from-yellow-400 to-amber-600',
    },
    {
      number: '06',
      icon: Box,
      title: 'Stockage',
      description: 'Produits conservés à l\'abri de l\'humidité, chaleur, et lumière. Vérification régulière : texture, odeur, stabilité.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
      color: 'from-teal-400 to-cyan-600',
    },
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-12 md:py-20 lg:py-28 bg-cream-100 overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-10 md:mb-16 lg:mb-24"
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs md:text-sm font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase text-olive-600 mb-3 md:mb-4 block"
          >
            Processus de production
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900 mb-3 md:mb-4"
          >
            Processus de production
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base lg:text-lg text-charcoal-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
          >
            Notre processus de fabrication artisanale garantit des produits de la plus haute qualité
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-beige-300 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-olive-400 via-olive-500 to-olive-600 origin-top rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:text-right' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? 'lg:order-2 lg:text-left lg:pl-16' : 'lg:pr-16'
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <motion.div
                      className={`w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 flex items-center justify-center bg-gradient-to-br ${step.color} text-white rounded-xl md:rounded-2xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <step.icon className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7" />
                    </motion.div>
                    <motion.span 
                      className="font-serif text-3xl md:text-4xl lg:text-5xl text-beige-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {step.number}
                    </motion.span>
                  </div>
                  <motion.h3 
                    className="font-serif text-xl md:text-2xl lg:text-3xl text-charcoal-900 mb-2 md:mb-3"
                    whileHover={{ x: index % 2 === 1 ? 0 : 10 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-charcoal-600 font-sans leading-relaxed text-sm md:text-base lg:text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    className="relative aspect-video md:aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${step.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Decorative corner - Desktop only */}
                    <motion.div
                      className={`absolute w-16 h-16 md:w-20 md:h-20 border-4 border-white/30 hidden md:block ${index % 2 === 0 ? 'top-4 right-4 rounded-tr-2xl border-l-0 border-b-0' : 'bottom-4 left-4 rounded-bl-2xl border-r-0 border-t-0'}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: 'spring' }}
                    />
                  </motion.div>
                </div>

                {/* Center Dot (desktop only) */}
                <motion.div 
                  className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                >
                  <div className={`w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br ${step.color} rounded-full shadow-lg`} />
                  <motion.div
                    className="absolute w-10 h-10 md:w-12 md:h-12 border-2 border-olive-400 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
