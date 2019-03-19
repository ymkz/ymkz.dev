import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="theme-color" content="#eceff4" />
          <meta
            name="description"
            content="A serverless example application with next.js for now.sh"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,900"
          />
          <link rel="icon" type="image/png" sizes="72x72" href="/static/assets/icon_72x72.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="/static/assets/icon_144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/assets/icon_192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/static/assets/icon_512x512.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
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
