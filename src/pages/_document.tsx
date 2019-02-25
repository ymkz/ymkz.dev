import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="theme-color" content="#2e3440" />
          <meta name="description" content="A example now-serverless application with next.js" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,shrink-to-fit=no"
          />
          {/* <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="/static/assets/icon-144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="152x152"
            href="/static/assets/icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/assets/icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="384x384"
            href="/static/assets/icon-384x384.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/static/assets/icon-512x512.png"
          />
          <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" />
          <link rel="manifest" href="/static/manifest.json" /> */}
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
