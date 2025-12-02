const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  i18n: {
    locales: ['fr', 'en', 'ar'],
    defaultLocale: 'fr',
    localeDetection: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  // Enable static exports for Netlify
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Enable React strict mode
  reactStrictMode: true,
  // Enable SWC minification
  swcMinify: true,
}

module.exports = withNextIntl(nextConfig);

