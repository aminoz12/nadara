'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useCart } from '@/contexts/CartContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = router.asPath;
  const t = useTranslations();
  const locale = useLocale();
  const { totalItems, setIsOpen } = useCart();

  const navLinks = [
    { href: '/', key: 'nav.home' },
    { href: '/products', key: 'nav.shop' },
    { href: '/about', key: 'nav.about' },
    { href: '/contact', key: 'nav.contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isHomePage = pathname === '/';
  const showDarkNav = isScrolled || !isHomePage;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showDarkNav
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className={`font-serif text-2xl md:text-3xl tracking-tight transition-colors duration-300 block ${
                    showDarkNav ? 'text-charcoal-900' : 'text-cream-50'
                  }`}
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Nadara
                </motion.span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <Link key={link.href} href={link.href}>
                  <motion.span
                    className={`relative font-sans text-sm tracking-wide uppercase transition-colors duration-300 ${
                      showDarkNav
                        ? 'text-charcoal-700 hover:text-charcoal-900'
                        : 'text-cream-100 hover:text-cream-50'
                    } ${
                      pathname === link.href
                        ? showDarkNav
                          ? 'text-olive-700'
                          : 'text-cream-50'
                        : ''
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                    whileHover={{ y: -2 }}
                  >
                    {t(link.key)}
                    {pathname === link.href && (
                      <motion.span
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                          showDarkNav ? 'bg-olive-600' : 'bg-cream-50'
                        }`}
                        layoutId="navUnderline"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <motion.span
                      className={`absolute -bottom-1 left-0 h-0.5 ${
                        showDarkNav ? 'bg-olive-400' : 'bg-cream-200'
                      }`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />
              <motion.button
                className={`p-2 rounded-full transition-colors duration-300 relative ${
                  showDarkNav
                    ? 'text-charcoal-700 hover:bg-olive-100 hover:text-olive-700'
                    : 'text-cream-100 hover:bg-white/10 hover:text-cream-50'
                }`}
                aria-label="Search"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(true)}
                className={`p-2 rounded-full transition-colors duration-300 relative ${
                  showDarkNav
                    ? 'text-charcoal-700 hover:bg-olive-100 hover:text-olive-700'
                    : 'text-cream-100 hover:bg-white/10 hover:text-cream-50'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                aria-label={t('nav.cart')}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta-500 text-white text-xs font-sans rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <motion.button
                onClick={() => setIsOpen(true)}
                className={`p-2 rounded-lg transition-colors duration-300 relative ${
                  showDarkNav
                    ? 'text-charcoal-900 hover:bg-olive-100'
                    : 'text-cream-50 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={t('nav.cart')}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-terracotta-500 text-white text-[10px] font-sans rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isMobileMenuOpen
                    ? 'text-charcoal-900'
                    : showDarkNav
                    ? 'text-charcoal-900 hover:bg-olive-100'
                    : 'text-cream-50 hover:bg-white/10'
                }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: locale === 'ar' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: locale === 'ar' ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`absolute top-0 bottom-0 w-full max-w-sm bg-cream-50 shadow-2xl ${
                locale === 'ar' ? 'left-0' : 'right-0'
              }`}
              onClick={(e) => e.stopPropagation()}
              style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: locale === 'ar' ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        <Link href={link.href}>
                          <motion.span
                            className={`block py-4 font-serif text-3xl transition-colors border-b border-beige-200 ${
                              pathname === link.href
                                ? 'text-olive-700'
                                : 'text-charcoal-900 hover:text-olive-600'
                            }`}
                            whileHover={{ x: locale === 'ar' ? -10 : 10, color: '#5C6E47' }}
                          >
                            {t(link.key)}
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div 
                  className="py-8 border-t border-beige-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-charcoal-500 font-sans mb-4">
                    {t('hero.tagline')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
