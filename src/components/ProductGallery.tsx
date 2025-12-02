'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
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
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > selectedIndex ? 1 : -1);
    setSelectedIndex(index);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden bg-cream-100 rounded-sm">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={selectedIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={images[selectedIndex]}
              alt={`${productName} - Image ${selectedIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Zoom Indicator */}
        <motion.div
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-xs font-sans text-charcoal-600">
            {selectedIndex + 1} / {images.length}
          </span>
        </motion.div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-sm border-2 transition-colors ${
              index === selectedIndex
                ? 'border-olive-600'
                : 'border-transparent hover:border-beige-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="100px"
            />
            {index === selectedIndex && (
              <motion.div
                className="absolute inset-0 bg-olive-600/10"
                layoutId="thumbnailHighlight"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

