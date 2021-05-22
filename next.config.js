/* eslint-disable @typescript-eslint/no-var-requires */
const generateSitemap = require('./scripts/generate-sitemap')
const generateRobots = require('./scripts/generate-robots')
const openSite = require('./scripts/open-site')

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap()
      generateRobots()
      openSite()
    }
    return config
  },
}
