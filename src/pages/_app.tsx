import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import '~/styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo title="ymkz.co" description="A website about ymkz" />
      <Component {...pageProps} />
    </>
  )
}

export default App
