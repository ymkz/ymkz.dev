import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import GlobalStyle from '../components/abstracts/global-style'
import Page from '../components/abstracts/page'
import pkg from '../package.json'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>{pkg.name}</title>
        </Head>
        <GlobalStyle />
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}
