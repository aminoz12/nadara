import type { AppProps } from 'next/app';
import { IntlProvider } from 'next-intl';
import { Layout, SplashScreen } from '@/components';
import { CartProvider } from '@/contexts/CartContext';
import { LocaleProvider, useLocaleContext } from '@/contexts/LocaleContext';
import '@/styles/globals.css';

function AppContent({ Component, pageProps }: AppProps) {
  const { locale } = useLocaleContext();
  const messages = pageProps.messages || require(`../../messages/${locale}.json`);

  return (
    <IntlProvider messages={messages} locale={locale}>
      <CartProvider>
        <SplashScreen />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </IntlProvider>
  );
}

export default function App(props: AppProps) {
  return (
    <LocaleProvider>
      <AppContent {...props} />
    </LocaleProvider>
  );
}
