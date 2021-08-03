import { render } from 'solid-js/web'
import { GlobalStyle } from '~/components/global-style'
import { IndexPage } from '~/pages'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <IndexPage />
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.querySelector('#root')!)
