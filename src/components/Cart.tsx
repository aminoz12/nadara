'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart();
  const t = useTranslations();
  const locale = useLocale();

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+212649327825';

  const generateWhatsAppMessage = () => {
    let message = t('whatsapp.orderMessage');

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   ${t('cart.quantity')}: ${item.quantity}\n`;
      message += `   ${t('cart.unitPrice')}: ${item.product.price} MAD\n`;
      message += `   ${t('cart.subtotal')}: ${item.product.price * item.quantity} MAD\n\n`;
    });

    message += `---\n`;
    message += `${t('cart.total')}: ${totalPrice.toFixed(2)} MAD\n\n`;
    message += t('whatsapp.thankYou');

    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    clearCart();
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-charcoal-950/50 z-40"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: locale === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: locale === 'ar' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className={`fixed top-0 bottom-0 w-full max-w-md bg-cream-50 shadow-2xl z-50 flex flex-col ${
              locale === 'ar' ? 'left-0' : 'right-0'
            }`}
            style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-beige-200">
              <h2 className="font-serif text-2xl text-charcoal-900">
                {t('cart.title')}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-cream-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-charcoal-700" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-beige-300 mb-4" />
                  <p className="text-charcoal-600 font-sans">
                    {t('cart.empty')}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 bg-white p-4 rounded-lg"
                    >
                      <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-sm text-charcoal-900 mb-1 truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-charcoal-500 mb-2">
                          {item.product.price} MAD
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 border border-beige-200 rounded">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="p-1 hover:bg-cream-100"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-sm font-sans">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="p-1 hover:bg-cream-100"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-xs text-terracotta-600 hover:text-terracotta-700"
                          >
                            {t('cart.remove')}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-beige-200 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-charcoal-600">
                    {t('cart.total')}:
                  </span>
                  <span className="font-serif text-2xl text-charcoal-900">
                    {totalPrice.toFixed(2)} MAD
                  </span>
                </div>
                <motion.button
                  onClick={handleCheckout}
                  className="w-full btn-whatsapp flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('cart.checkout')}
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

