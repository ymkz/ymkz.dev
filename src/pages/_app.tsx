import type { AppProps } from 'next/app'
import Head from 'next/head'
import '~/styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="A website about ymkz" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="ymkz.co" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#212121" />
        <title>ymkz.co</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
