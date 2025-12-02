'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShieldCheck, Truck, Leaf } from 'lucide-react';
import { fadeInUp, staggerContainer } from './variants';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations();

  const faqs = [
    {
      icon: ShieldCheck,
      question: t('faq.sensitiveSkin'),
      answer: t('faq.sensitiveSkinAnswer'),
    },
    {
      icon: Truck,
      question: t('faq.deliveryReturns'),
      answer: t('faq.deliveryReturnsAnswer'),
    },
    {
      icon: Leaf,
      question: t('faq.ingredientsTransparency'),
      answer: t('faq.ingredientsTransparencyAnswer'),
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            {t('faq.subtitle')}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900 mb-3 md:mb-4"
          >
            {t('faq.title')}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base lg:text-lg text-charcoal-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
          >
            {t('faq.description')}
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-3 md:space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border border-beige-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-6 text-left bg-cream-50 hover:bg-cream-100 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-olive-100 text-olive-600 rounded-full flex-shrink-0">
                  <faq.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="flex-1 font-serif text-base md:text-lg lg:text-xl text-charcoal-900 pr-2">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-olive-600 text-cream-50 rounded-full flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-3 h-3 md:w-4 md:h-4" />
                  ) : (
                    <Plus className="w-3 h-3 md:w-4 md:h-4" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 pt-0 bg-cream-50">
                      <div className="pl-0 sm:pl-14 md:pl-16">
                        <p className="text-charcoal-600 font-sans leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-charcoal-600 font-sans mb-3 md:mb-4 text-sm md:text-base">
            {t('faq.contactCTA')}
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'}?text=Hello, I have a question about your products`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-olive-600 font-sans font-medium hover:text-olive-700 transition-colors text-sm md:text-base"
          >
            {t('faq.chatWhatsApp')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
