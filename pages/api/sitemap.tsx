import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { NextApiRequest, NextApiResponse } from 'next'

interface siteLinks {
  url: string
  changefreq: string
  priority: number
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const links: siteLinks[] = [{ url: '/', changefreq: 'daily', priority: 0.8 }]

  const { host } = req.headers

  const stream = new SitemapStream({ hostname: `https://${host}` })

  res.writeHead(200, { 'Content-Type': 'application/xml' })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data) => data.toString())

  res.end(xmlString)
}
