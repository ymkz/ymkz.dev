import '@egoist/snackbar/dist/snackbar.css'
import React from 'react'
import App from 'next/app'
import { GlobalStyle } from '~/components/abstracts/global-style'
import { PageContainer } from '~/components/abstracts/page-container'

export default class extends App {
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
