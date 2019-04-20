import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Manifest from 'components/abstracts/manifest'

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="The portfolio site about ymkz" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,900"
          />
          <Manifest />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (() => {
                  const theme = localStorage.getItem('theme')
                  document.documentElement.setAttribute('theme', theme || 'light')
                })()
              `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
