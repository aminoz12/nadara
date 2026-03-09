import Head from 'next/head';
import { motion } from 'framer-motion';
import { Truck, Package, Clock, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/components/variants';

export default function ShippingReturnsPage() {
  const t = useTranslations('shippingPage');
  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream-100">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-sans tracking-[0.3em] uppercase text-olive-600 mb-4 block"
            >
              {t('heroLabel')}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="heading-xl text-charcoal-900 mb-6"
            >
              {t('heroTitle')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="body-lg text-charcoal-600">
              {t('heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-olive-100 rounded-full flex items-center justify-center">
                  <Truck className="w-7 h-7 text-olive-600" />
                </div>
                <h2 className="font-serif text-3xl text-charcoal-900">
                  {t('shippingTitle')}
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-olive-600" />
                    {t('deliveryTimesTitle')}
                  </h3>
                  <p className="text-charcoal-600 font-sans leading-relaxed mb-4">
                    {t('deliveryTimesIntro')}
                  </p>
                  <ul className="space-y-2 text-charcoal-600 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-olive-600 mt-1">•</span>
                      <span>{t('morocco')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-600 mt-1">•</span>
                      <span>{t('international')}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-olive-600" />
                    {t('zonesTitle')}
                  </h3>
                  <p className="text-charcoal-600 font-sans leading-relaxed">
                    {t('zonesBody')}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5 text-olive-600" />
                    {t('packagingTitle')}
                  </h3>
                  <p className="text-charcoal-600 font-sans leading-relaxed">
                    {t('packagingBody')}
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-700 text-cream-50">
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
              className="heading-md text-cream-50 mb-6"
            >
              {t('ctaTitle')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-md text-cream-200 mb-8"
            >
              {t('ctaSubtitle')}
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+212649327825'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-olive-700 font-medium rounded-full hover:bg-cream-100 transition-colors"
            >
              {t('ctaButton')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}


