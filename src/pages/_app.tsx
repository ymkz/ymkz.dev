import '@egoist/snackbar/dist/snackbar.css'

import NextApp, { AppContext } from 'next/app'
import React from 'react'

import { GlobalStyle } from '~/components/abstracts/global-style'
import { PageContainer } from '~/components/abstracts/page-container'

class App extends NextApp {
  static async getInitialProps({ Component, ctx }: AppContext) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    }
  }

  render() {
    return (
      <React.StrictMode>
        <GlobalStyle />
        <PageContainer>
          <this.props.Component {...this.props.pageProps} />
        </PageContainer>
      </React.StrictMode>
    )
  }
}

export default App
