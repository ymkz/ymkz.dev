import '../styles/reset.css'
import '../styles/style.css'

import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import React from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <DefaultSeo title="ymkz" />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
