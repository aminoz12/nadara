'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from './variants';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+212649327825';

  const footerLinks = {
    shop: [
      { label: t('footer.allProducts'), href: '/products' },
      { label: t('footer.soaps'), href: '/products?category=Soaps' },
      { label: t('footer.oils'), href: '/products?category=Oils' },
      { label: t('footer.creams'), href: '/products?category=Creams' },
      { label: t('footer.hairCare'), href: '/products?category=Hair+Care' },
    ],
    company: [
      { label: t('footer.ourStory'), href: '/about' },
      { label: t('footer.ingredients'), href: '/about#ingredients' },
      { label: t('footer.sustainability'), href: '/about#sustainability' },
      { label: t('footer.contactUs'), href: '/contact' },
    ],
    support: [
      { label: t('footer.shippingInfo'), href: '/contact' },
      { label: t('footer.returns'), href: '/contact' },
      { label: t('footer.faq'), href: '/contact' },
    ],
  };

  return (
    <footer className="bg-charcoal-950 text-cream-100">
      {/* Main Footer */}
      <div className="container-custom py-10 md:py-16 lg:py-20 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/">
              <span className="font-serif text-2xl md:text-3xl text-cream-50">Nadara</span>
            </Link>
            <p className="mt-4 md:mt-6 text-cream-300 font-sans leading-relaxed max-w-sm text-sm md:text-base">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-charcoal-700 text-cream-300 hover:bg-olive-600 hover:border-olive-600 hover:text-cream-50 transition-all rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
              <motion.a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-charcoal-700 text-cream-300 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@nadara.com"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-charcoal-700 text-cream-300 hover:bg-terracotta-600 hover:border-terracotta-600 hover:text-cream-50 transition-all rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-sans text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase text-cream-50 mb-4 md:mb-6">
              {t('footer.shop')}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-400 hover:text-cream-50 font-sans text-xs md:text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="font-sans text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase text-cream-50 mb-4 md:mb-6">
              {t('footer.company')}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-400 hover:text-cream-50 font-sans text-xs md:text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="hidden md:block">
            <h4 className="font-sans text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase text-cream-50 mb-4 md:mb-6">
              {t('footer.support')}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-400 hover:text-cream-50 font-sans text-xs md:text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="container-custom py-4 md:py-6 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-charcoal-500 font-sans text-center sm:text-left">
              © {new Date().getFullYear()} Nadara. {t('footer.copyright')}.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/contact"
                className="text-xs md:text-sm text-charcoal-500 hover:text-cream-300 font-sans transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                href="/contact"
                className="text-xs md:text-sm text-charcoal-500 hover:text-cream-300 font-sans transition-colors"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
