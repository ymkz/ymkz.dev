import NextApp from 'next/app'
import React from 'react'

import { GlobalStyle } from '~/components/global-style'
import { PageContainer } from '~/components/page-container'
import { PageParticles } from '~/components/page-particles'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <GlobalStyle />
        <PageParticles />
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </React.Fragment>
    )
  }
}

export default App
