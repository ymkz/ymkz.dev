import { polyfill } from 'interweave-ssr'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

polyfill()

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" />
          <meta name="description" content="ymkz's website" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
