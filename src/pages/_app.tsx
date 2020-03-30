import '../styles/index.css'

import NextApp from 'next/app'
import NextHead from 'next/head'
import React from 'react'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <NextHead>
          <title>ymkz.co</title>
        </NextHead>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default App
