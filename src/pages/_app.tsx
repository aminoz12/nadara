import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '@/components';
import { CartProvider } from '@/contexts/CartContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = (router.locale || router.defaultLocale || 'fr') as 'fr' | 'en' | 'ar';
  
  // Load messages based on locale
  const messages = pageProps.messages || require(`../../messages/${locale}.json`);

  // Update document direction and lang for RTL support
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </NextIntlClientProvider>
  );
}
