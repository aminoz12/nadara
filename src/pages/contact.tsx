import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';
import { WhatsAppButton } from '@/components';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/components/variants';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat with us directly for orders and inquiries',
    action: 'Start Chat',
    color: 'bg-[#25D366]',
    hoverColor: 'hover:bg-[#128C7E]',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'hello@nadara.com',
    action: 'Send Email',
    href: 'mailto:hello@nadara.com',
    color: 'bg-terracotta-500',
    hoverColor: 'hover:bg-terracotta-600',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: '@nadara.beauty',
    action: 'Follow Us',
    href: 'https://instagram.com/nadara.beauty',
    color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
    hoverColor: 'hover:opacity-90',
  },
];

const faqs = [
  {
    question: 'How do I place an order?',
    answer:
      'Simply browse our products, find what you love, and click the "Order via WhatsApp" button. Our team will guide you through the checkout process personally.',
  },
  {
    question: 'What are your shipping options?',
    answer:
      'We offer worldwide shipping. Standard delivery takes 5-10 business days, while express shipping arrives in 2-4 business days. All orders are carefully packaged to ensure safe delivery.',
  },
  {
    question: 'Can I return a product?',
    answer:
      'Yes! We accept returns within 30 days of delivery for unopened products in their original packaging. Please contact us via WhatsApp to initiate a return.',
  },
  {
    question: 'Are your products suitable for sensitive skin?',
    answer:
      'Our products are made with pure, natural ingredients and are suitable for most skin types. However, we always recommend patch testing before full application. Consult our team for personalized advice.',
  },
  {
    question: 'Where are your products made?',
    answer:
      'All Nadara products are handcrafted in Morocco using traditional methods. We work directly with local cooperatives to ensure fair trade and authentic ingredients.',
  },
];

export default function ContactPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';

  return (
    <>
      <Head>
        <title>Contact Us | Nadara</title>
        <meta
          name="description"
          content="Get in touch with Nadara. Contact us via WhatsApp, email, or social media for orders and inquiries."
        />
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
              Get in Touch
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="heading-xl text-charcoal-900 mb-6"
            >
              We&apos;d Love to <span className="italic">Hear from You</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="body-lg text-charcoal-600">
              Have questions about our products, need skincare advice, or ready
              to place an order? Our team is here to help.
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
                key={method.title}
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
                {method.title === 'WhatsApp' ? (
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
                Location
              </h4>
              <p className="text-charcoal-600 font-sans text-sm">
                Marrakech, Morocco
                <br />
                Shipping Worldwide
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
                Response Time
              </h4>
              <p className="text-charcoal-600 font-sans text-sm">
                WhatsApp: Usually within 1 hour
                <br />
                Email: Within 24 hours
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
                Languages
              </h4>
              <p className="text-charcoal-600 font-sans text-sm">
                English, French
                <br />
                Arabic
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
                Wholesale
              </h4>
              <p className="text-charcoal-600 font-sans text-sm">
                wholesale@nadara.com
                <br />
                Minimum orders apply
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-cream-100">
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
              FAQ
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-charcoal-900"
            >
              Frequently Asked <span className="italic">Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 lg:p-8 rounded-sm"
              >
                <h3 className="font-serif text-lg text-charcoal-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-charcoal-600 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Experience <span className="italic">Nadara?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-md text-cream-200 mb-8"
            >
              Start a conversation with us on WhatsApp and let us help you find
              the perfect products for your skincare journey.
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

