import '@egoist/snackbar/dist/snackbar.css'
import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import App, { Container } from 'next/app'
import analytics from '~/helpers/analytics'
import GlobalStyle from '~/components/abstracts/global-style'
import Page from '~/components/abstracts/page'

export default class extends App {
  componentDidMount() {
    analytics.requestAuthorization()
    analytics.initialize()
    analytics.pageview(location.pathname)
    Router.onRouteChangeComplete = analytics.pageview
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
