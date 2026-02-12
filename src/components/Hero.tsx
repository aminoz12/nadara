'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const letterAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(' ');
  
  return (
    <motion.span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              custom={wordIndex * 5 + charIndex}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/cover1.jpg',
    '/serumcover.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background with Slideshow */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Animated Particles - Hidden on mobile for performance */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cream-200/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hero image navigation */}
      <div className="absolute inset-y-0 left-0 z-20 flex items-center justify-start px-2 sm:px-4">
        <motion.button
          type="button"
          aria-label="Image précédente"
          onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-cream-50 backdrop-blur-sm transition hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-cream-50/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-7 w-7" />
        </motion.button>
      </div>
      <div className="absolute inset-y-0 right-0 z-20 flex items-center justify-end px-2 sm:px-4">
        <motion.button
          type="button"
          aria-label="Image suivante"
          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-cream-50 backdrop-blur-sm transition hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-cream-50/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-7 w-7" />
        </motion.button>
      </div>

      {/* Decorative Blobs - Hidden on serum slide so second picture stays clear */}
      {currentImageIndex === 0 && (
        <>
          <motion.div
            className="absolute top-10 left-5 md:top-20 md:left-10 w-40 h-40 md:w-80 md:h-80 bg-olive-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-5 md:bottom-40 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-terracotta-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      {/* Content - first slide: pushed down on mobile; second slide: pushed down more on mobile only */}
      <motion.div
        className="relative z-10 container-custom text-center px-4 sm:px-6 pt-[calc(14rem+5px)] sm:pt-64 md:pt-0"
        style={{ opacity, y: textY }}
      >
        <motion.div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {currentImageIndex === 0 ? (
              <motion.div
                key="hero-default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="contents"
              >
                {/* Main Title with Letter Animation */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium text-cream-50 mb-2 md:mb-4 overflow-hidden leading-tight">
                  <AnimatedText text={t('hero.title1')} />
                </h1>
                <h1 className="text-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium text-cream-50 mb-8 md:mb-14 overflow-hidden leading-tight whitespace-nowrap sm:whitespace-normal">
                  <motion.span
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
                    className="italic inline-block"
                  >
                    {t('hero.title2')}
                  </motion.span>
                </h1>
              </motion.div>
            ) : (
              <motion.div
                key="hero-serum"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:mb-14 pt-40 sm:pt-48 md:pt-0"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium text-cream-50 leading-tight mb-2 md:mb-4">
                  {t('hero.serumTitle1')}
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-cream-50 leading-tight max-w-4xl mx-auto italic">
                  {t('hero.serumTitle2')}
                </h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <Link href="/products/" className="w-full sm:w-auto">
              <motion.button
                className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-cream-50 text-charcoal-900 font-sans font-medium text-sm tracking-wide uppercase overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-olive-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover:text-cream-50 transition-colors duration-300">
                  {t('hero.explore')}
                </span>
              </motion.button>
            </Link>
            <Link href="/about/" className="w-full sm:w-auto">
              <motion.button
                className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border-2 border-cream-50 text-cream-50 font-sans font-medium text-sm tracking-wide uppercase overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-cream-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover:text-charcoal-900 transition-colors duration-300">
                  {t('hero.story')}
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
