import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="theme-color" content="#2e3440" />
          <meta
            name="description"
            content="A serverless example application with next.js for now.sh"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,shrink-to-fit=no"
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
