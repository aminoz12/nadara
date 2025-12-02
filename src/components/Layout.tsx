'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollProgress from './ScrollProgress';
import Cart from './Cart';
import { pageTransition } from './variants';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const pathname = router.asPath;

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <Cart />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
}
