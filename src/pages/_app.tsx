import '@snackbar/core/dist/snackbar.css'

import NextApp from 'next/app'
import React from 'react'

import { Header } from '~/components/organisms/header'
import { GlobalStyle } from '~/components/templates/global-style'

class App extends NextApp {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <this.props.Component {...this.props.pageProps} />
      </React.Fragment>
    )
  }
}

export default App
