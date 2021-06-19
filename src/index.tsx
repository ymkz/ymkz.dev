import { StrictMode } from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './components/global-style'
import { IndexPage } from './pages/index'

render(
  <StrictMode>
    <GlobalStyle />
    <IndexPage />
  </StrictMode>,
  document.querySelector('#root')
)
