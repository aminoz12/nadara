'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface WhatsAppButtonProps {
  productName?: string;
  className?: string;
  variant?: 'primary' | 'floating';
}

export default function WhatsAppButton({
  productName,
  className = '',
  variant = 'primary',
}: WhatsAppButtonProps) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';
  
  const message = productName
    ? `Hello, I want to order: ${productName}`
    : 'Hello, I would like to know more about your products';
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  if (variant === 'floating') {
    return (
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{ 
          delay: 1, 
          duration: 0.3, 
          type: 'spring',
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }
        }}
        whileHover={{ 
          scale: 1.15,
          y: -10,
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact on WhatsApp"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={20}
        height={20}
        className="w-5 h-5 object-contain"
      />
      <span>Order via WhatsApp</span>
    </motion.a>
  );
}

