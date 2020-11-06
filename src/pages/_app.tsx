import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import '~/styles/reset.css'
import '~/styles/style.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate="%s - ymkz.co" description="ymkz's website" />
      <Component {...pageProps} />
    </>
  )
}

export default App
