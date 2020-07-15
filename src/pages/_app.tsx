import '../styles/reset.css'
import '../styles/style.css'

import { DefaultSeo } from 'next-seo'
import withDarkMode, { useDarkMode } from 'next-dark-mode'
import { AppProps } from 'next/app'
import React from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  const { darkModeActive } = useDarkMode()
  return (
    <React.Fragment>
      <DefaultSeo title="ymkz" />
      <div className={`root ${darkModeActive ? 'dark' : 'light'}`}>
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  )
}

export default withDarkMode(App)
