import NextDocument, { DocumentContext, Head, Main, NextScript } from 'next/document'
import React from 'react'

import { nord } from '~/helpers/colors'
import { getTheme, initializeTheme, Theme } from '~/helpers/theme'

type DocumentProps = {
  theme: Theme
}

class Document extends NextDocument<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    const theme = getTheme(ctx)
    return { ...initialProps, theme }
  }

  render() {
    return (
      <html lang="ja" data-theme={this.props.theme}>
        <Head>
          <meta name="description" content="ymkz's portfolio website" />
          <meta
            name="theme-color"
            content={this.props.theme === 'dark' ? nord.nord0 : nord.nord6}
          />
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
          <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Document
