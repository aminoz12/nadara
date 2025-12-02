import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Nadara</title>
      </Head>

      <section className="min-h-screen flex items-center justify-center bg-cream-50 pt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto"
          >
            <motion.span
              className="text-[150px] md:text-[200px] font-serif text-beige-300 leading-none block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              404
            </motion.span>

            <h1 className="heading-lg text-charcoal-900 mb-4 -mt-8">
              Page Not Found
            </h1>
            <p className="body-md text-charcoal-600 mb-10">
              The page you&apos;re looking for seems to have wandered off into
              the desert. Let us guide you back to our oasis of beauty.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <motion.span
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </motion.span>
              </Link>
              <Link href="/products">
                <motion.span
                  className="btn-secondary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Shop Products
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

