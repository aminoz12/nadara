import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { WhatsAppButton } from '@/components';
import { fadeInUp, staggerContainer } from '@/components/variants';

export default function ContactPage() {
  const t = useTranslations('contact');

  const contactMethods = [
    {
      id: 'whatsapp' as const,
      icon: MessageCircle,
      title: t('whatsappTitle'),
      description: t('whatsappDesc'),
      action: t('whatsappAction'),
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#128C7E]',
    },
    {
      id: 'email' as const,
      icon: Mail,
      title: t('emailTitle'),
      description: t('emailValue'),
      action: t('emailAction'),
      href: 'mailto:hello@nadara.com',
      color: 'bg-terracotta-500',
      hoverColor: 'hover:bg-terracotta-600',
    },
    {
      id: 'instagram' as const,
      icon: Instagram,
      title: t('instagramTitle'),
      description: t('instagramValue'),
      action: t('instagramAction'),
      href: 'https://instagram.com/nadara.beauty',
      color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
      hoverColor: 'hover:opacity-90',
    },
  ];

  return (
    <>
      <Head>
        <title>{t('pageTitle')} | Nadara</title>
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
              {t('heroSubtitle')}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="heading-xl text-charcoal-900 mb-6"
            >
              {t('heroTitle')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="body-lg text-charcoal-600">
              {t('heroDescription')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                variants={fadeInUp}
                custom={index}
                className="bg-white p-8 rounded-sm text-center"
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center ${method.color} text-white rounded-full`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <method.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-charcoal-600 font-sans mb-6">
                  {method.description}
                </p>
                {method.id === 'whatsapp' ? (
                  <WhatsAppButton className="w-full" />
                ) : (
                  <motion.a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-primary ${method.color} ${method.hoverColor} border-none w-full`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {method.action}
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MapPin className="w-6 h-6 mx-auto mb-4 text-olive-600" />
              <h4 className="font-serif text-lg text-charcoal-900 mb-2">
                {t('location')}
              </h4>
              <p className="text-charcoal-600 font-sans text-sm whitespace-pre-line">
                {t('locationValue')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Clock className="w-6 h-6 mx-auto mb-4 text-olive-600" />
              <h4 className="font-serif text-lg text-charcoal-900 mb-2">
                {t('responseTime')}
              </h4>
              <p className="text-charcoal-600 font-sans text-sm whitespace-pre-line">
                {t('responseTimeValue')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <MessageCircle className="w-6 h-6 mx-auto mb-4 text-olive-600" />
              <h4 className="font-serif text-lg text-charcoal-900 mb-2">
                {t('languages')}
              </h4>
              <p className="text-charcoal-600 font-sans text-sm whitespace-pre-line">
                {t('languagesValue')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Mail className="w-6 h-6 mx-auto mb-4 text-olive-600" />
              <h4 className="font-serif text-lg text-charcoal-900 mb-2">
                {t('wholesale')}
              </h4>
              <p className="text-charcoal-600 font-sans text-sm whitespace-pre-line">
                {t('wholesaleValue')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <motion.div variants={fadeInUp}>
              <WhatsAppButton className="bg-white text-olive-700 hover:bg-cream-100" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

