import React from 'react'
import { css, Global } from '@emotion/core'

const globalStyle = css`
  @font-face {
    font-family: YuGothicM;
    src: local('Yu Gothic Medium');
  }
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
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', '游ゴシック Medium', YuGothic,
      YuGothicM, 'Hiragino Kaku Gothic ProN', メイリオ, Meiryo, sans-serif;
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }
`

function GlobalStyle() {
  return <Global styles={globalStyle} />
}

export default GlobalStyle
