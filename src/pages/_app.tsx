import '../styles/reset.css'
import '../styles/style.css'

import { glob, setPragma } from 'goober'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import React from 'react'

setPragma(React.createElement)

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <React.Fragment>
      <DefaultSeo title="ymkz" />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
