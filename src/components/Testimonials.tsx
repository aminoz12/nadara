'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Testimonial } from '@/types';
import { useTranslations } from 'next-intl';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const t = useTranslations();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const next = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-olive-50 overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span 
            className="text-xs md:text-sm font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase text-olive-600 mb-3 md:mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('testimonials.title')}
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('testimonials.subtitle')}
          </motion.h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <motion.div
            className="absolute -top-4 md:-top-8 left-1/2 -translate-x-1/2 text-olive-200"
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <Quote className="w-10 h-10 md:w-16 md:h-16" />
          </motion.div>

          {/* Testimonial Slider */}
          <div className="relative py-6 md:py-8 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center px-2 sm:px-4 w-full"
              >
                {/* Stars */}
                <motion.div 
                  className="flex items-center justify-center gap-0.5 md:gap-1 mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                    >
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-terracotta-400 text-terracotta-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Text */}
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif text-charcoal-800 leading-relaxed mb-6 md:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </motion.p>

                {/* Author */}
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div 
                    className="relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 md:mb-4 ring-2 md:ring-4 ring-olive-200 ring-offset-2 md:ring-offset-4 ring-offset-olive-50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring' }}
                  >
                    <Image
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <p className="font-serif text-lg md:text-xl text-charcoal-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs md:text-sm text-charcoal-500">
                    {testimonials[current].location}
                  </p>
                  <motion.p 
                    className="text-xs md:text-sm text-olive-600 mt-1 px-3 py-1 bg-olive-100 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonials[current].product}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prev}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.2, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>
          <motion.button
            onClick={next}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goTo(index)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
                  index === current
                    ? 'w-6 md:w-10 bg-olive-600'
                    : 'w-1.5 md:w-2 bg-olive-300 hover:bg-olive-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
