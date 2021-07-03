import { createGlobalStyles } from 'solid-styled-components'
import { color } from '../constants/color'
import { font } from '../constants/font'

export const GlobalStyle = () => {
  const Style = createGlobalStyles`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: ${font.base};
    background-color: ${color.baseBlack};
    color: ${color.baseWhite};
  }
  ::selection {
    background-color: ${color.baseAccent};
  }
  `
  return <Style />
}
