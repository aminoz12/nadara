'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Droplets, Sparkles, Heart, Leaf } from 'lucide-react';
import { fadeInUp, staggerContainer } from './variants';
import { useTranslations } from 'next-intl';

const ingredients = [
  {
    name: 'Huiles végétales',
    origin: 'Naturel',
    description: 'Nadara utilise des huiles végétales 100 % naturelles et certifiées par l\'ONSSA, pressées à froid afin de préserver toutes leurs propriétés nutritives et actives. Ces huiles apportent hydratation, réparation et protection à la peau et aux cheveux, tout en respectant l\'environnement et la pureté des ingrédients.',
    advantagesLabel: 'Huiles utilisées par Nadara',
    advantages: [
      'Huile d\'argan – régénérante, anti-âge, cheveux brillants',
      'Huile de ricin – fortifiante, pousse des cheveux et cils',
      'Huile d\'amande douce – adoucissante, nourrissante, idéale pour peaux sensibles',
      'Huile de coco – protectrice, nourrissante, rend la peau souple',
      'Huile de tournesol – riche en vitamine E, hydratante et protectrice',
      'Huile de nigelle – régénérante, stimule la pousse des cheveux, apaise les irritations, anti-inflammatoire et cicatrisante',
    ],
    image: '/ing1.png',
  },
  {
    name: 'Beurres végétaux',
    origin: 'Naturel',
    description: 'Nadara utilise des beurres végétaux 100 % naturels, riches en acides gras essentiels, vitamines et antioxydants. Ces beurres apportent nutrition, protection et douceur à la peau et aux cheveux, tout en étant adaptés à toutes les peaux, même sensibles.',
    advantagesLabel: 'Beurres utilisés par Nadara',
    advantages: [
      'Beurre de karité – Nourrit, régénère, protège, idéal pour les peaux sèches et cheveux abîmés',
      'Beurre de cacao – Hydrate, adoucit, antioxydant, parfum naturel chocolaté',
    ],
    image: '/ing2.png',
  },
  {
    name: 'Poudres naturelles',
    origin: 'Naturel',
    description: 'Nadara sélectionne des poudres naturelles marocaines et indiennes de haute qualité, riches en minéraux et actifs végétaux. Ces poudres sont utilisées pour nourrir, purifier, éclaircir et sublimer la peau et les cheveux, dans des formulations naturelles et artisanales.',
    advantagesLabel: 'Poudres utilisées par Nadara',
    advantagesEmoji: '🌿',
    advantages: [
      'Poudre de Shikakai – Nettoyant naturel doux, facilite le démêlage, cheveux brillants et souples',
      'Poudre de Kapoor Kachli – Stimule la pousse des cheveux, renforce la racine, cheveux plus épais',
      'Poudre de Neem – Antibactérien et apaisant, lutte contre les pellicules, protège le cuir chevelu',
      'Poudre de Reetha (Soapnut) – Nettoie naturellement, mousse légère, cheveux doux et propres, purifiant',
      'Poudre d\'Hibiscus – Nourrit et colore légèrement, cheveux doux et brillants',
      'Poudre d\'Argile rose – Nettoie en douceur, purifie, adoucit, illumine le teint, idéale peaux sensibles et mixtes',
      'Poudre du Ghassoul (Rhassoul) – Absorbe l\'excès de sébum, purifie, reminéralise, rend la peau et les cheveux doux et souples',
    ],
    image: '/ing4.png',
  },
  {
    name: 'Actifs cosmétiques',
    origin: 'Naturel',
    description: 'Nadara sélectionne des actifs cosmétiques naturels et performants pour enrichir ses soins visage, corps et cheveux. Ces ingrédients ciblés apportent nutrition, hydratation, réparation et protection tout en respectant la peau et l\'environnement.',
    advantagesLabel: 'Actifs utilisés par Nadara',
    advantagesEmoji: '🌿',
    advantages: [
      'Vitamine B5 (Panthénol) – Hydrate, répare, apaise irritations et rougeurs',
      'Vitamine E – Antioxydante, protège contre le vieillissement cutané, nourrit la peau',
      'Acide hyaluronique – Hydratation intense, repulpe la peau, réduit l\'apparence des ridules',
      'Collagène & Elastine – Améliore l\'élasticité, fermeté et tonicité de la peau',
    ],
    image: '/ing3.png',
  },
];

export default function Ingredients() {
  const t = useTranslations();

  const bienfaits = [
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

        {/* Ingredients Grid - Reduced spacing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/30 to-transparent" />
                  
                  {/* Visible Title Badge */}
                  <div className="absolute top-3 left-3 right-3">
                    <span className="inline-block px-3 py-1.5 bg-olive-600/95 backdrop-blur-sm text-white font-serif text-xs md:text-sm font-bold rounded-full shadow-lg">
                      {ingredient.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ingredients Advantages - FAQ Style Alignment */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-20"
        >
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={`${ingredient.name}-advantages`}
              variants={fadeInUp}
              custom={index}
              className="border border-beige-200 rounded-lg overflow-hidden bg-cream-50"
            >
              {/* Question/Title Section */}
              <div className="p-4 md:p-6 bg-cream-50">
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-charcoal-900 mb-3">
                  {ingredient.name}
                </h3>
                <p className="text-charcoal-600 font-sans text-sm md:text-base leading-relaxed mb-4">
                  {ingredient.description}
                </p>
              </div>

              {/* Answer/Advantages Section */}
              <div className="p-4 md:p-6 pt-0 bg-cream-50">
                {'advantagesLabel' in ingredient && ingredient.advantagesLabel && (
                  <p className="text-sm font-sans font-medium text-olive-700 mb-3">{'advantagesEmoji' in ingredient && ingredient.advantagesEmoji ? ingredient.advantagesEmoji : '🌱'} {ingredient.advantagesLabel}</p>
                )}
                <ul className="space-y-2">
                  {ingredient.advantages.map((advantage, advIndex) => (
                    <li key={advIndex} className="flex items-start gap-2 text-sm md:text-base text-charcoal-700 font-sans">
                      <span className="text-olive-600 mt-1 font-bold">✓</span>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* bienfaits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {bienfaits.map((benefit, index) => (
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
