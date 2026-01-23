import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/components/variants';
import { Leaf, Heart, Globe, Sparkles, ArrowRight } from 'lucide-react';

const story = [
  {
    year: '2018',
    title: 'Le Commencement',
    description:
      'Fondée au cœur de Marrakech, Nadara est née d\'un profond amour pour les traditions botaniques marocaines et d\'une vision de les partager avec le monde.',
  },
  {
    year: '2019',
    title: 'Première Collection',
    description:
      'Lancement de nos collections signature Argan et Rose, en partenariat direct avec des coopératives dirigées par des femmes dans les montagnes de l\'Atlas.',
  },
  {
    year: '2021',
    title: 'Portée Mondiale',
    description:
      'Expansion pour servir les clients à travers l\'Europe, l\'Amérique du Nord et le Moyen-Orient, en restant fidèles à nos racines artisanales.',
  },
  {
    year: '2024',
    title: 'Engagement Qualité',
    description:
      'Renforcement de notre engagement envers la qualité et l\'authenticité, en préservant les méthodes traditionnelles de fabrication.',
  },
];

const values = [
  {
    icon: Leaf,
    title: 'Ingrédients Purs',
    description:
      'Nous ne transigeons jamais sur la qualité. Chaque ingrédient est soigneusement sélectionné, biologique et traçable jusqu\'à son origine.',
  },
  {
    icon: Heart,
    title: 'Communauté d\'Abord',
    description:
      'Nous soutenons les communautés marocaines locales, en payant des salaires équitables et en investissant dans l\'éducation et les infrastructures.',
  },
  {
    icon: Globe,
    title: 'Planète Positive',
    description:
      'Des formules biodégradables aux emballages écologiques, la durabilité guide chaque décision que nous prenons.',
  },
  {
    icon: Sparkles,
    title: 'Sagesse Intemporelle',
    description:
      'Nous honorons des siècles de connaissances en beauté, en mélangeant les recettes ancestrales avec la science moderne des soins de la peau.',
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Head>
        <title>Notre Histoire | Nadara</title>
        <meta
          name="description"
          content="Découvrez l'histoire de Nadara - soins de la peau marocains premium enracinés dans la tradition et fabriqués avec soin."
        />
      </Head>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src="https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=1920&q=80"
            alt="Paysage marocain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-charcoal-950/30 to-cream-50" />
        </motion.div>

        <motion.div
          className="relative z-10 container-custom text-center"
          style={{ opacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-sans tracking-[0.3em] uppercase text-cream-100 mb-4 block"
          >
            Notre Histoire
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-xl text-cream-50 mb-6"
          >
            Enracinés dans la <span className="italic">Tradition</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="body-lg text-cream-200 max-w-2xl mx-auto"
          >
            Un voyage des rituels de beauté ancestraux du Maroc à votre sanctuaire de soins quotidiens.
          </motion.p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <span className="text-sm font-sans tracking-[0.3em] uppercase text-olive-600 mb-4 block">
                La Promesse Nadara
              </span>
              <h2 className="heading-lg text-charcoal-900 mb-6">
                Où la Sagesse Ancienne Rencontre la{' '}
                <span className="italic">Beauté Moderne</span>
              </h2>
              <div className="space-y-4 text-charcoal-600 font-sans leading-relaxed">
                <p>
                  Nadara a été fondée sur une croyance simple : que les soins de la peau les plus efficaces
                  proviennent de la nature elle-même. Notre voyage a commencé dans les
                  vallées ensoleillées du Maroc, où des générations de femmes ont
                  gardé les secrets de la beauté botanique.
                </p>
                <p>
                  Nous travaillons directement avec des coopératives dirigées par des femmes, garantissant des pratiques de
                  commerce équitable tout en préservant les méthodes d'extraction traditionnelles
                  qui ont été perfectionnées au fil des siècles. Chaque goutte de nos huiles,
                  chaque gramme de nos masques d'argile, porte l'essence de ce
                  patrimoine.
                </p>
                <p>
                  Aujourd'hui, Nadara apporte ces trésors à des clients exigeants
                  dans le monde entier, sans jamais compromettre la pureté, la puissance ou notre
                  engagement envers la planète.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80"
                  alt="Ingrédients de beauté marocains"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-8 -left-8 w-48 h-48 bg-olive-100 rounded-sm -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-sans tracking-[0.3em] uppercase text-olive-600 mb-4 block"
            >
              Notre Parcours
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-charcoal-900"
            >
              Jalons le Long du <span className="italic">Chemin</span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-beige-300 hidden lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {story.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${
                    index % 2 === 1 ? 'lg:text-right' : ''
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 1 ? 'lg:order-2 lg:text-left' : ''
                    }`}
                  >
                    <span className="text-4xl font-serif text-olive-600 mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-600 font-sans">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className={`hidden lg:block ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  />

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 bg-olive-600 rounded-full hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="ingredients" className="section-padding bg-olive-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-sans tracking-[0.3em] uppercase text-olive-600 mb-4 block"
            >
              Ce Pour Quoi Nous Nous Battons
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-charcoal-900"
            >
              Nos Valeurs <span className="italic">Fondamentales</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-white p-8 lg:p-10 rounded-sm"
              >
                <motion.div
                  className="w-14 h-14 flex items-center justify-center bg-olive-100 text-olive-700 rounded-full mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <value.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-600 font-sans leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-charcoal-900 mb-6"
            >
              Prêt à Commencer Votre{' '}
              <span className="italic">Voyage Beauté ?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-md text-charcoal-600 mb-8"
            >
              Explorez notre collection de soins de la peau marocains premium et découvrez
              le pouvoir transformateur d'ingrédients purs et naturels.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/products">
                <motion.span
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Découvrir Nos Produits
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
