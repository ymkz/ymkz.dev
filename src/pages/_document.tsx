import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="ymkz's website" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" type="image/png" sizes="96x96" href="/assets/icon-96x96.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/assets/icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/assets/icon-512x512.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/assets/icon-180x180.png" />
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
