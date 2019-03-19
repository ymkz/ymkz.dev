import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import GlobalStyle from '../components/abstracts/global-style'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>YMKZ.NOW.SH</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}
