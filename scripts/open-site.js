/* eslint-disable @typescript-eslint/no-var-requires */
const open = require('open')
require('dotenv').config()

const openSite = () => {
  let production = process.env.PRODUCTION || 'true'
  production = production === 'true'

  if (!production) {
    open('http://localhost:3000')
  }
}

module.exports = openSite
