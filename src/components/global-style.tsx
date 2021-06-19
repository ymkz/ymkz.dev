import { css, Global } from '@emotion/react'
import { color } from '../constants/color'
import { font } from '../constants/font'

const globalStyle = css`
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
`

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />
}
