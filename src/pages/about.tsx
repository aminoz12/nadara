import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/components/variants';
import { ArrowRight } from 'lucide-react';

const story = [
  {
    year: '2021',
    title: 'Naissance de l\'idée',
    description:
      'Au départ, ce n\'était pas un projet commercial, mais une passion sincère pour le naturel, la beauté et la création artisanale. L\'envie de comprendre, d\'apprendre et de fabriquer des soins simples, sains et efficaces a été le premier pas vers cette aventure. Et face aux difficultés souvent rencontrées avec les produits industriels, des compositions complexes, des promesses marketing parfois exagérées, des prix parfois très élevés ou bien des produits trop agressifs surtout pour les peaux sensibles, la réflexion s\'est imposée.',
  },
  {
    year: '2022',
    title: 'Commencement',
    description:
      'Les premiers mois ont été consacrés à la recherche et à l\'expérimentation. Tester des recettes, découvrir les bienfaits des poudres végétales, des huiles naturelles et des actifs doux pour la peau et les cheveux. Chaque formule était préparée avec patience, souvent recommencée, améliorée, ajustée jusqu\'à obtenir une qualité satisfaisante.',
  },
  {
    year: '2024',
    title: 'Création de la coopérative Nadara',
    description:
      'Le choix du nom Nadara est inspiré de la pureté, la nature, la douceur et l\'authenticité. Et voilà, les produits Nadara entre les mains des clients, la gamme s\'est élargie avec l\'arrivée de nouveaux soins : sérums, poudres naturelles, shampoings solides, crèmes pour le corps et les cheveux. La qualité est devenue une priorité absolue, avec des fabrications en petites quantités pour garantir la fraîcheur et la pureté des produits.',
  },
  {
    year: '2026',
    title: 'Présence en ligne',
    description:
      'Puis est venu le moment de franchir un nouveau cap : la présence en ligne. La création du site a donné à Nadara une vitrine, un espace pour raconter son histoire, présenter ses produits et partager sa vision d\'une beauté plus naturelle et plus consciente.',
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
            src="/cover1.jpg"
            alt="Nadara - Notre Histoire"
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
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6 text-charcoal-600 font-sans leading-relaxed"
          >
            <motion.p variants={fadeInUp}>
              Depuis toujours, je crois que la vraie beauté ne se cache pas dans les produits compliqués, mais dans la simplicité, la pureté et les trésors que la nature nous offre. Au fil des années, j'ai découvert la richesse des traditions marocaines : les poudres végétales, les huiles pressées à froid, les plantes utilisées par nos mères et nos grands-mères pour prendre soin de leur peau et de leurs cheveux. Alors ces rituels anciens, transmis avec amour, sont devenus une source d'inspiration.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Mais Nadara n'est pas seulement une marque, c'est une histoire de cœur, de patience, d'apprentissage et de création faite à la main, produit par produit, avec l'envie sincère d'offrir des soins sains, doux et efficaces.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Chaque savon, chaque sérum, chaque soin est fabriqué en petite quantité, avec attention et respect, pour préserver la qualité et la pureté des ingrédients. Derrière chaque formule, il y a une intention : aider chaque femme à se sentir belle, confiante et bien dans sa peau, naturellement.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Nadara signifie le retour à l'essentiel, le retour à une beauté vraie, une beauté qui respire, qui soigne et qui révèle l'éclat naturel de chaque peau.
            </motion.p>
          </motion.div>

          {/* Mission block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 pt-12 border-t border-beige-300 text-center"
          >
            <p className="font-serif text-xl text-charcoal-900 mb-6">
              Nadara est née pour accompagner chaque femme dans sa beauté naturelle.
            </p>
            <p className="text-charcoal-600 font-sans italic mb-2">
              Pas pour transformer, mais pour révéler.
            </p>
            <p className="text-charcoal-600 font-sans italic">
              Pas pour masquer, mais pour sublimer.
            </p>
          </motion.div>
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

      {/* Relation clients */}
      <section className="section-padding bg-olive-50">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-charcoal-700 font-sans leading-relaxed text-center"
          >
            La relation avec nos clients ne se limite pas à la vente d'un produit. Elle repose sur la confiance, la transparence, la communication honnête et l'engagement durable.
          </motion.p>
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
