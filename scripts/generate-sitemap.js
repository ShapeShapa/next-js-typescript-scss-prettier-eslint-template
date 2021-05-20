/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const globby = require('globby')

const generateSitemap = async () => {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby(['pages/**/*.tsx', '!pages/_*.tsx', '!pages/api'])

  const formatted = {
    routes: pages.map((page) => {
      const path = page
        .replace('pages', '')
        .replace('.tsx', '')
        .replace('.mdx', '')
        .replace('/index', '/')
      return path
    }),
  }

  fs.writeFileSync('public/routes.json', JSON.stringify(formatted))
}

module.exports = generateSitemap
