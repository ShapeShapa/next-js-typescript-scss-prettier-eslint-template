/* eslint-disable @typescript-eslint/no-var-requires */
const generateSitemap = require('./scripts/generate-sitemap')
const generateRobots = require('./scripts/generate-robots')

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap()
      generateRobots()
    }
    return config
  },
}
