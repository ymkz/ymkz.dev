import '../styles/index.css'

import NextApp from 'next/app'
import React from 'react'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default App
