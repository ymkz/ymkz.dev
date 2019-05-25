import '@egoist/snackbar/dist/snackbar.css'
import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import App, { Container } from 'next/app'
// @ts-ignore
import withGA from 'next-ga'
// @ts-ignore : remove this line if types fields fixed
import { createSnackbar } from '@egoist/snackbar'
import GlobalStyle from '~/components/abstracts/global-style'
import Page from '~/components/abstracts/page'

export default withGA('UA-140852595-1', Router)(
  class extends App {
    componentDidMount() {
      const ga = localStorage.getItem('ga')
      if (!ga || ga === 'no') {
        createSnackbar('Google Analytics is enabled.', {
          position: 'right',
          actions: [
            {
              text: 'CONFIRM',
              // @ts-ignore
              callback(_, snackbar) {
                snackbar.destroy()
                localStorage.setItem('ga', 'yes')
              }
            }
          ]
        })
      }
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
)
