import '@egoist/snackbar/dist/snackbar.css'
import React from 'react'
import { Router } from 'next/router'
import App, { Container } from 'next/app'
import { AppContainer } from '~/components/abstracts/app-container'
import { GlobalStyle } from '~/components/abstracts/global-style'
import { analytics } from '~/helpers/analytics'

export default class extends App {
  componentDidMount() {
    console.info(`BUILD ID: ${process.env.BUILD_ID}`)
    if (process.env.NODE_ENV === 'production') {
      analytics.requestAuthorization()
      analytics.initialize()
      analytics.pageview(location.pathname)
      Router.events.on('routeChangeComplete', analytics.pageview)
    }
  }

  render() {
    return (
      <React.StrictMode>
        <GlobalStyle />
        <Container>
          <AppContainer>
            <this.props.Component {...this.props.pageProps} />
          </AppContainer>
        </Container>
      </React.StrictMode>
    )
  }
}
