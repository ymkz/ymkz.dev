import '@egoist/snackbar/dist/snackbar.css'
import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
// @ts-ignore
import { register, unregister } from 'next-offline/runtime'
import GlobalStyle from 'components/abstracts/global-style'
import Page from 'components/abstracts/page'

export default class extends App {
  componentDidMount() {
    register()
  }

  componentWillUnmount() {
    unregister()
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <React.StrictMode>
        <GlobalStyle />
        <Container>
          <Head>
            <title>ymkz</title>
          </Head>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Container>
      </React.StrictMode>
    )
  }
}
