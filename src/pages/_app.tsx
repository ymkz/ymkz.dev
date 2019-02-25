import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>YMKZ.NOW.SH</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
