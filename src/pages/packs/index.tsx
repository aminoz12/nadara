import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Package, Gift, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/components/variants';
import { Pack, getLocalizedPack } from '@/types';
import packsData from '../../../data/packs.json';

interface PacksPageProps {
  packs: Pack[];
}

export default function PacksPage({ packs }: PacksPageProps) {
  const t = useTranslations('packsPage');
  const tGrid = useTranslations('packsPageGrid');
  const locale = useLocale() as 'fr' | 'en' | 'ar';
  return (
    <>
      <Head>
        <title>{t('title')} | Nadara</title>
        <meta name="description" content={t('metaDescription')} />
      </Head>

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-gradient-to-b from-olive-50 to-cream-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-sm font-sans tracking-[0.2em] uppercase text-olive-600 mb-4"
            >
              <Gift className="w-4 h-4" />
              {t('subtitle')}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="heading-xl text-charcoal-900 mb-6"
            >
              {t('heading')}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="body-lg text-charcoal-600"
            >
              {t('description')} <span className="font-bold font-price text-olive-700">{t('fromPrice')}</span> !
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Packs Grid */}
      <section className="py-12 md:py-20 bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {packs.map((pack, index) => {
              const loc = getLocalizedPack(pack, locale);
              return (
                <motion.div
                  key={pack.id}
                  variants={fadeInUp}
                  custom={index}
                  className="group h-full flex flex-col"
                >
                  <Link href={`/packs/${pack.slug}`} className="h-full flex flex-col block">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex-1 flex flex-col min-h-0">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={pack.images[0]}
                          alt={loc.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 right-4 bg-olive-600 text-white px-4 py-2 rounded-full font-price text-lg font-bold shadow-lg">
                          {pack.price} MAD
                        </div>
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                          <Package className="w-4 h-4 text-olive-600" />
                          <span className="text-sm font-medium text-charcoal-800">
                            {loc.items.length} {tGrid('products')}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col min-h-0">
                        <h2 className="font-serif text-2xl text-charcoal-900 mb-2 group-hover:text-olive-600 transition-colors">
                          {loc.name}
                        </h2>
                        <p className="text-charcoal-600 mb-4 flex-1 min-h-0">
                          {loc.shortDescription}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {loc.items.slice(0, 3).map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2 text-sm text-charcoal-700">
                              <span className="w-1.5 h-1.5 bg-olive-500 rounded-full" />
                              {item}
                            </li>
                          ))}
                          {loc.items.length > 3 && (
                            <li className="text-sm text-olive-600 font-medium">
                              + {loc.items.length - 3} {tGrid('otherProducts')}
                            </li>
                          )}
                        </ul>
                        <div className="pt-4 border-t border-beige-200 mt-auto space-y-3">
                          <p className="font-price text-xl text-olive-700 font-bold">
                            {pack.price} MAD
                          </p>
                          <span className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 bg-olive-600 text-white font-sans text-xs font-medium rounded-lg hover:bg-olive-700 transition-colors duration-300 whitespace-nowrap">
                            {tGrid('choosePack')}
                            <ArrowRight className="w-4 h-4 flex-shrink-0" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* bienfaits Section */}
      <section className="py-12 md:py-16 bg-olive-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={fadeInUp} className="p-6">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-olive-600" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-2">
                {tGrid('uniquePrice')}
              </h3>
              <p className="text-charcoal-600">
                {tGrid('uniquePriceDesc')}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-olive-600" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-2">
                {tGrid('perfectCombos')}
              </h3>
              <p className="text-charcoal-600">
                {tGrid('perfectCombosDesc')}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-2">
                {tGrid('allNatural')}
              </h3>
              <p className="text-charcoal-600">
                {tGrid('allNaturalDesc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<PacksPageProps> = async () => {
  const packs = packsData as Pack[];

  return {
    props: {
      packs,
    },
  };
};





