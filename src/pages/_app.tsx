import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import '~/styles/reset.css'
import '~/styles/style.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo title="ymkz" />
      <Component {...pageProps} />
    </>
  )
}

export default App
