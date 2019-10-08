import NextDocument, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="theme-color" content="#eceff4" />
          <meta name="description" content="ymkz's portfolio website" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/icon-180x180.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,900&font-display=swap"
          />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Document
