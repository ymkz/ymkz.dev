import { render } from 'solid-js/web'
import { GlobalStyle } from './components/global-style'
import { IndexPage } from './pages/index'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <IndexPage />
    </>
  )
}

render(() => <App />, document.querySelector('#root')!)
