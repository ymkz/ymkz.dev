import NextDocument, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="theme-color" content="#eceff4" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="ymkz's portfolio site" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,900&font-display=swap"
          />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/assets/icon-96x96.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/assets/icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/static/assets/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="180x180"
            href="/static/assets/icon-180x180.png"
          />
          <link rel="manifest" href="/static/assets/manifest.json" />
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
