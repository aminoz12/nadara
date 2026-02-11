'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const DURATION_MS = 3000;

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      aria-hidden="false"
      role="img"
      aria-label="Chargement"
    >
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="relative mb-6 h-32 w-48 sm:h-40 sm:w-56 md:h-48 md:w-64">
          <Image
            src="/logo.png"
            alt="Nadara"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, 16rem"
          />
        </div>
        <p
          className="max-w-md text-center leading-relaxed"
          style={{
            color: '#0d7133',
            fontFamily: '"Dancing Script", cursive',
            fontOpticalSizing: 'auto',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '32px',
          }}
        >
          Chaque produit, fait main avec amour pour prendre soin de vous
        </p>
      </div>
    </div>
  );
}
