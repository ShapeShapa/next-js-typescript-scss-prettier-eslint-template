import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const description = 'This is a next js template that i call next shapa'

const SeoMetas = () => (
  <>
    <meta name="description" content={description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Someone" />
    <meta name="twitter:creator" content="@someone" key="twhandle" />
    <meta
      property="og:image"
      content="https://assets.coderrocketfuel.com/twitter-post-with-node-js.png"
      key="ogimage"
    />
    <meta property="og:site_name" content="next shapa" key="ogsitename" />
    <meta property="og:title" content="Twitter title" key="ogtitle" />
    <meta property="og:description" content={description} key="ogdesc" />
  </>
)

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next shapa</title>
        <SeoMetas />
      </Head>

      <h1>next shapa.</h1>
    </div>
  )
}
