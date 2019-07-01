import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { injectscript } from '~/helpers/theming'

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="The portfolio site about ymkz" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,900&font-display=swap"
          />
          <meta name="theme-color" content="#eceff4" />
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
          <script dangerouslySetInnerHTML={{ __html: injectscript }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
