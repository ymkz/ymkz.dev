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
