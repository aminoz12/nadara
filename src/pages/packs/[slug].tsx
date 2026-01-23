import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Package, Info, Gift } from 'lucide-react';
import { ProductGallery, ProductActions } from '@/components';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/components/variants';
import { Pack } from '@/types';
import packsData from '../../../data/packs.json';

interface PackPageProps {
  pack: Pack;
  relatedPacks: Pack[];
}

export default function PackPage({
  pack,
  relatedPacks,
}: PackPageProps) {
  return (
    <>
      <Head>
        <title>{pack.name} | Nadara</title>
        <meta name="description" content={pack.shortDescription} />
      </Head>

      {/* Breadcrumb */}
      <div className="pt-28 md:pt-32 bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/packs"
              className="inline-flex items-center gap-2 text-sm font-sans text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux Packs
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Pack Section */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Gallery */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <ProductGallery
                images={pack.images}
                productName={pack.name}
              />
            </motion.div>

            {/* Pack Info */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="lg:pt-8"
            >
              <span className="text-sm font-sans tracking-[0.2em] uppercase text-olive-600 mb-3 block">
                {pack.category}
              </span>

              <h1 className="heading-lg text-charcoal-900 mb-4">
                {pack.name}
              </h1>

              <p className="font-price text-3xl text-olive-700 mb-6">
                {pack.price} MAD
              </p>

              <p className="body-md text-charcoal-600 mb-8">
                {pack.shortDescription}
              </p>

              {/* Pack Contents */}
              <div className="border border-olive-200 bg-olive-50 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-5 h-5 text-olive-600" />
                  <h3 className="font-serif text-lg text-charcoal-900">
                    Ce pack contient
                  </h3>
                </div>
                <ul className="space-y-3">
                  {pack.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Package className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700 font-sans font-medium">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart & WhatsApp Buttons */}
              <ProductActions product={pack as any} />

              {/* Benefits */}
              <div className="border-t border-beige-200 pt-8 mb-8">
                <h3 className="font-serif text-lg text-charcoal-900 mb-4">
                  Avantages
                </h3>
                <ul className="space-y-3">
                  {pack.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700 font-sans">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Usage Instructions */}
              {pack.usageInstructions && pack.usageInstructions.length > 0 && (
                <div className="border-t border-beige-200 pt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="w-5 h-5 text-olive-600" />
                    <h3 className="font-serif text-lg text-charcoal-900">
                      Conseils d'utilisation
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {pack.usageInstructions.map((instruction, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-700 font-sans">
                          {instruction}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 p-6 bg-olive-50 rounded-sm"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="block font-serif text-lg text-olive-700">
                      100%
                    </span>
                    <span className="text-xs font-sans text-olive-600 uppercase tracking-wide">
                      Naturel
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-lg text-olive-700">
                      Économie
                    </span>
                    <span className="text-xs font-sans text-olive-600 uppercase tracking-wide">
                      Garantie
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-lg text-olive-700">
                      Eco
                    </span>
                    <span className="text-xs font-sans text-olive-600 uppercase tracking-wide">
                      Packaging
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Packs */}
      {relatedPacks.length > 0 && (
        <section className="section-padding bg-cream-100">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="heading-md text-charcoal-900"
              >
                Découvrez nos autres packs
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedPacks.map((relatedPack, index) => (
                <motion.div
                  key={relatedPack.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/packs/${relatedPack.slug}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={relatedPack.images[0]}
                          alt={relatedPack.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-lg text-charcoal-900 mb-1 group-hover:text-olive-600 transition-colors">
                          {relatedPack.name}
                        </h3>
                        <p className="font-price text-olive-700 font-bold">
                          {relatedPack.price} MAD
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const packs = packsData as Pack[];
  const paths = packs.map((pack) => ({
    params: { slug: pack.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PackPageProps> = async ({
  params,
}) => {
  const packs = packsData as Pack[];
  const pack = packs.find((p) => p.slug === params?.slug);

  if (!pack) {
    return {
      notFound: true,
    };
  }

  // Get other packs (max 4)
  const relatedPacks = packs
    .filter((p) => p.id !== pack.id)
    .slice(0, 4);

  return {
    props: {
      pack,
      relatedPacks,
    },
  };
};





