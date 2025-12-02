import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/components/variants';
import { Leaf, Heart, Globe, Sparkles, ArrowRight } from 'lucide-react';

const story = [
  {
    year: '2018',
    title: 'The Beginning',
    description:
      'Founded in the heart of Marrakech, Nadara was born from a deep love for Moroccan botanical traditions and a vision to share them with the world.',
  },
  {
    year: '2019',
    title: 'First Collection',
    description:
      'Launched our signature Argan and Rose collections, partnering directly with women-led cooperatives in the Atlas Mountains.',
  },
  {
    year: '2021',
    title: 'Global Reach',
    description:
      'Expanded to serve customers across Europe, North America, and the Middle East, staying true to our artisanal roots.',
  },
  {
    year: '2024',
    title: 'Sustainability Pledge',
    description:
      'Achieved 100% recyclable packaging and carbon-neutral shipping, reinforcing our commitment to the planet.',
  },
];

const values = [
  {
    icon: Leaf,
    title: 'Pure Ingredients',
    description:
      'We never compromise on quality. Every ingredient is carefully sourced, organic, and traceable to its origin.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description:
      'We support local Moroccan communities, paying fair wages and investing in education and infrastructure.',
  },
  {
    icon: Globe,
    title: 'Planet Positive',
    description:
      'From biodegradable formulas to carbon-neutral shipping, sustainability guides every decision we make.',
  },
  {
    icon: Sparkles,
    title: 'Timeless Wisdom',
    description:
      'We honor centuries of beauty knowledge, blending ancient recipes with modern skincare science.',
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Head>
        <title>Our Story | Nadara</title>
        <meta
          name="description"
          content="Discover the story behind Nadara - premium Moroccan skincare rooted in tradition and crafted with care."
        />
      </Head>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src="https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=1920&q=80"
            alt="Moroccan landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-charcoal-950/30 to-cream-50" />
        </motion.div>

        <motion.div
          className="relative z-10 container-custom text-center"
          style={{ opacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-sans tracking-[0.3em] uppercase text-cream-100 mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-xl text-cream-50 mb-6"
          >
            Rooted in <span className="italic">Tradition</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="body-lg text-cream-200 max-w-2xl mx-auto"
          >
            A journey from the ancient beauty rituals of Morocco to your daily
            skincare sanctuary.
          </motion.p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <span className="text-sm font-sans tracking-[0.3em] uppercase text-olive-600 mb-4 block">
                The Nadara Promise
              </span>
              <h2 className="heading-lg text-charcoal-900 mb-6">
                Where Ancient Wisdom Meets{' '}
                <span className="italic">Modern Beauty</span>
              </h2>
              <div className="space-y-4 text-charcoal-600 font-sans leading-relaxed">
                <p>
                  Nadara was founded on a simple belief: that the most effective
                  skincare comes from nature itself. Our journey began in the
                  sun-drenched valleys of Morocco, where generations of women have
                  guarded the secrets of botanical beauty.
                </p>
                <p>
                  We partner directly with women-led cooperatives, ensuring fair
                  trade practices while preserving traditional extraction methods
                  that have been perfected over centuries. Every drop of our oils,
                  every gram of our clay masks, carries the essence of this
                  heritage.
                </p>
                <p>
                  Today, Nadara brings these treasures to discerning customers
                  worldwide, never compromising on purity, potency, or our
                  commitment to the planet.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80"
                  alt="Moroccan beauty ingredients"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-8 -left-8 w-48 h-48 bg-olive-100 rounded-sm -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
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
              Our Journey
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-charcoal-900"
            >
              Milestones Along <span className="italic">the Way</span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-beige-300 hidden lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {story.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${
                    index % 2 === 1 ? 'lg:text-right' : ''
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 1 ? 'lg:order-2 lg:text-left' : ''
                    }`}
                  >
                    <span className="text-4xl font-serif text-olive-600 mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-600 font-sans">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className={`hidden lg:block ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  />

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 bg-olive-600 rounded-full hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="ingredients" className="section-padding bg-olive-50">
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
              What We Stand For
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-charcoal-900"
            >
              Our Core <span className="italic">Values</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-white p-8 lg:p-10 rounded-sm"
              >
                <motion.div
                  className="w-14 h-14 flex items-center justify-center bg-olive-100 text-olive-700 rounded-full mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <value.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-600 font-sans leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability */}
      <section
        id="sustainability"
        className="section-padding bg-charcoal-950 text-cream-50"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="relative aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Sustainable practices"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <span className="text-sm font-sans tracking-[0.3em] uppercase text-olive-400 mb-4 block">
                Sustainability
              </span>
              <h2 className="heading-lg text-cream-50 mb-6">
                Beauty That Cares for{' '}
                <span className="italic">Our Planet</span>
              </h2>
              <div className="space-y-4 text-cream-300 font-sans leading-relaxed mb-8">
                <p>
                  Sustainability isn&apos;t an afterthought—it&apos;s woven into
                  every aspect of what we do. From sourcing to shipping, we
                  minimize our environmental footprint without compromising on
                  quality.
                </p>
                <p>
                  Our packaging is made from recycled and recyclable materials.
                  We use glass bottles, biodegradable labels, and plastic-free
                  shipping materials. Our formulas are biodegradable and never
                  tested on animals.
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  '100% recyclable packaging',
                  'Carbon-neutral shipping',
                  'Cruelty-free certified',
                  'Biodegradable formulas',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-cream-200"
                  >
                    <div className="w-2 h-2 bg-olive-400 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-100">
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
              className="heading-lg text-charcoal-900 mb-6"
            >
              Ready to Begin Your{' '}
              <span className="italic">Beauty Journey?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-md text-charcoal-600 mb-8"
            >
              Explore our collection of premium Moroccan skincare and discover
              the transformative power of pure, natural ingredients.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/products">
                <motion.span
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

