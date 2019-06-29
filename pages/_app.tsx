import '@egoist/snackbar/dist/snackbar.css'
import React from 'react'
import Router from 'next/router'
import App, { Container } from 'next/app'
import { GlobalStyle } from '~/components/abstracts/global-style'
import { Page } from '~/components/abstracts/page'
import { analytics } from '~/helpers/analytics'

export default class extends App {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      analytics.requestAuthorization()
      analytics.initialize()
      analytics.pageview(location.pathname)
      Router.onRouteChangeComplete = analytics.pageview
    }
  }

  render() {
    return (
      <React.StrictMode>
        <GlobalStyle />
        <Container>
          <Page>
            <this.props.Component {...this.props.pageProps} />
          </Page>
        </Container>
      </React.StrictMode>
    )
  }
}
