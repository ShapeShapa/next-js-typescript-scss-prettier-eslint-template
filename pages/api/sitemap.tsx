import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { NextApiRequest, NextApiResponse } from 'next'

interface siteLinks {
  url: string
  changefreq?: string
  priority: number
}

// eslint-disable-next-line no-underscore-dangle
const _defaults = {
  priority: 0.3,
}

const config: siteLinks[] = [
  { url: '/', priority: 0.8 },
  { url: '/fake', priority: 0 },
]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { host } = req.headers

  const response = await fetch(`http://${host}/routes.json`)
  const routes = await response.json()

  const links: siteLinks[] = routes.routes.map((path: string) => {
    const good: siteLinks = { url: path, priority: _defaults.priority }
    return good
  })

  links.forEach((el, ind) => {
    const fig: siteLinks = config.filter((con) => con.url === el.url)[0]
    if (fig) {
      links[ind].priority = fig.priority
    }
  })

  const stream = new SitemapStream({ hostname: `https://${host}` })

  res.writeHead(200, { 'Content-Type': 'application/xml' })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data) => data.toString())

  res.end(xmlString)
}
