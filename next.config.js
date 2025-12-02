const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // React Strict Mode
  reactStrictMode: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Trailing slashes for static exports
  trailingSlash: true,
  
  // Disable image optimization for static exports
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  
  // i18n configuration
  i18n: {
    locales: ['fr', 'en', 'ar'],
    defaultLocale: 'fr',
    localeDetection: true,
  },
  
  // Handle static export paths for i18n
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const paths = {
      '/': { page: '/[locale]' },
      '/fr': { page: '/[locale]' },
      '/en': { page: '/[locale]' },
      '/ar': { page: '/[locale]' },
    };

    // Add other pages for each locale
    const pages = ['/about', '/contact', '/products'];
    
    pages.forEach((page) => {
      paths[`/fr${page}`] = { page: '/[locale]', query: { __nextDefaultLocale: 'fr' } };
      paths[`/en${page}`] = { page: '/[locale]', query: { __nextDefaultLocale: 'en' } };
      paths[`/ar${page}`] = { page: '/[locale]', query: { __nextDefaultLocale: 'ar' } };
    });

    return paths;
  },
};

module.exports = withNextIntl(nextConfig);

