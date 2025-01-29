// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://hirelatamdevs.com/',
  generateRobotsTxt: true,
  sitemapSize: 7000, // Split large sitemaps into multiple files
  exclude: [], // Exclude specific pages
  changefreq: 'daily',
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path, // URL of the page
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(), // Add last modified date
    };
  },
};