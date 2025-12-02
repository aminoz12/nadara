 

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
  // Handle static export paths for i18n
};

module.exports = nextConfig;

