import React from 'react'
import { css, Global } from '@emotion/core'

const globalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    background-color: #eceff4;
    color: #2e3440;
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }
`

function GlobalStyle() {
  return <Global styles={globalStyle} />
}

export default GlobalStyle
