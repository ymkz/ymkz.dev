import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Manifest from '../components/abstracts/manifest'

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
          <Manifest />
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
