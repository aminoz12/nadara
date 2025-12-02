'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

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
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
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
      <MessageCircle className="w-5 h-5" />
      <span>Order via WhatsApp</span>
    </motion.a>
  );
}

