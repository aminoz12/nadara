'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShieldCheck, Truck, Leaf, Clock, Package, Heart, Award, Globe, RefreshCw } from 'lucide-react';
import { fadeInUp, staggerContainer } from './variants';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations();

  const faqs = [
    {
      icon: ShieldCheck,
      question: 'Vos produits sont-ils adaptés aux peaux sensibles ?',
      answer: 'Oui, tous nos produits sont formulés avec des ingrédients naturels doux et sans agents irritants. Cependant, nous recommandons toujours de faire un test cutané sur une petite zone avant la première utilisation.',
    },
    {
      icon: Truck,
      question: 'Quels sont vos délais de livraison et conditions de retour ?',
      answer: 'Nous expédions sous 24-48h. La livraison prend 2-5 jours ouvrables. Les retours sont acceptés sous 14 jours si les produits sont non utilisés et dans leur emballage d\'origine.',
    },
    {
      icon: Leaf,
      question: 'Utilisez-vous des ingrédients naturels et bio ?',
      answer: 'Oui, nous privilégions les ingrédients naturels, bio et locaux lorsque c\'est possible. Tous nos produits sont sans parabènes, sans sulfates, sans huile de palme et sans colorants synthétiques.',
    },
    {
      icon: Clock,
      question: 'Combien de temps durent vos produits ?',
      answer: 'Nos savons durent 4-6 semaines en cure, puis 12-24 mois d\'utilisation. Les crèmes et sérums ont une durée de conservation de 6-12 mois après ouverture. Stockez-les à l\'abri de la chaleur et de l\'humidité.',
    },
    {
      icon: Package,
      question: 'Vos emballages sont-ils écologiques ?',
      answer: 'Oui, nous utilisons des emballages recyclables, biodégradables ou réutilisables. Nos pots sont en verre ou en plastique recyclé, et nous minimisons les emballages superflus.',
    },
    {
      icon: Heart,
      question: 'Vos produits sont-ils testés dermatologiquement ?',
      answer: 'Oui, tous nos produits sont testés dermatologiquement sous contrôle médical pour garantir leur sécurité et leur tolérance. Nous ne testons jamais sur les animaux et nos formules sont validées par des volontaires.',
    },
    {
      icon: Award,
      question: 'Vos produits sont-ils certifiés bio ?',
      answer: 'Nous utilisons majoritairement des ingrédients certifiés bio et nous sommes en processus de certification Ecocert pour notre gamme complète. Tous nos produits respectent les normes cosmétiques bio.',
    },
    {
      icon: Globe,
      question: 'Expédiez-vous à l\'international ?',
      answer: 'Oui, nous expédions dans toute l\'Europe et dans de nombreux pays internationaux. Les frais de port varient selon la destination. Contactez-nous pour les envois hors Europe.',
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
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900 mb-3 md:mb-4"
          >
            Questions Fréquemment Posées
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base lg:text-lg text-charcoal-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
          >
            Retrouvez les réponses aux questions les plus courantes sur nos produits et notre démarche
          </motion.p>
        </motion.div>

        {/* FAQ Items - Grid Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
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
            Vous ne trouvez pas votre réponse ? Contactez-nous directement !
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'}?text=Hello, I have a question about your products`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-olive-600 font-sans font-medium hover:text-olive-700 transition-colors text-sm md:text-base"
          >
            Discuter sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
