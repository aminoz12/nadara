import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/components/variants';
import { ArrowRight } from 'lucide-react';

const STORY_YEARS = ['2021', '2022', '2024', '2026'] as const;

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const heroRef = useRef<HTMLDivElement>(null);

  const story = useMemo(
    () =>
      STORY_YEARS.map((year, i) => ({
        year,
        title: t(`story${i + 1}Title`),
        description: t(`story${i + 1}Desc`),
      })),
    [t]
  );
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
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
            {t('heroLabel')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-xl text-cream-50 mb-6"
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="body-lg text-cream-200 max-w-2xl mx-auto"
          >
            {t('heroSubtitle')}
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
            <motion.p variants={fadeInUp}>{t('intro1')}</motion.p>
            <motion.p variants={fadeInUp}>{t('intro2')}</motion.p>
            <motion.p variants={fadeInUp}>{t('intro3')}</motion.p>
            <motion.p variants={fadeInUp}>{t('intro4')}</motion.p>
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
              {t('missionTitle')}
            </p>
            <p className="text-charcoal-600 font-sans italic mb-2">
              {t('missionLine1')}
            </p>
            <p className="text-charcoal-600 font-sans italic">
              {t('missionLine2')}
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
              {t('timelineLabel')}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-charcoal-900"
            >
              {t('timelineTitle')}
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
            {t('relationText')}
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
              {t('ctaTitle')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-md text-charcoal-600 mb-8"
            >
              {t('ctaSubtitle')}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/products/">
                <motion.span
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('ctaButton')}
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
