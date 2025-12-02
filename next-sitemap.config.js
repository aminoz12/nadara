/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || 'https://nadara.netlify.app';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: 'out',
  trailingSlash: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
