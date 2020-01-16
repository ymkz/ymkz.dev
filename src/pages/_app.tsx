import '@snackbar/core/dist/snackbar.css'

import NextApp from 'next/app'
import React from 'react'

import { Header } from '~/components/organisms/header'
import { GlobalStyle } from '~/components/templates/global-style'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default App
