'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from './variants';
import { useTranslations } from 'next-intl';

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const t = useTranslations();

  const stats = [
    { number: 50000, suffix: '+', label: t('stats.happyCustomers') },
    { number: 100, suffix: '%', label: t('stats.naturalIngredients') },
    { number: 15, suffix: '+', label: t('stats.yearsHeritage') },
    { number: 30, suffix: '+', label: t('stats.countriesShipped') },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-olive-700 relative overflow-hidden">
      {/* Background Pattern - Hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Blobs - Smaller on mobile */}
      <motion.div
        className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-32 h-32 md:w-60 md:h-60 bg-olive-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 w-40 h-40 md:w-80 md:h-80 bg-olive-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              custom={index}
              className="text-center"
            >
              <motion.div
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-1 md:mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </motion.div>
              <p className="text-cream-200 font-sans text-xs sm:text-sm md:text-base tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
