/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

require('dotenv').config()
const robotstxt = require('generate-robotstxt')

const generateRobots = async () => {
  let production = process.env.PRODUCTION || 'true'
  production = production === 'true'

  const sitemap = production
    ? 'https://next-shapa.vercel.app/api/sitemap'
    : 'http://localhost:3000/api/sitemap'

  const host = production
    ? 'https://next-shapa.vercel.app'
    : 'http://localhost:3000'

  const content = await robotstxt({
    policy: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap,
    host,
  })

  fs.writeFileSync('public/robots.txt', content)
}
generateRobots()
module.exports = generateRobots
