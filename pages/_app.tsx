import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import GlobalStyle from '../components/abstracts/global-style'
import Page from '../components/abstracts/page'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Head>
            <title>ymkz</title>
          </Head>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Container>
      </React.Fragment>
    )
  }
}
