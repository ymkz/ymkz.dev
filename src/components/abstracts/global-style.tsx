import React from 'react'
import { css, Global } from '@emotion/core'
import colors from '../../constants/colors'

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
    background-color: ${colors.nord6};
    color: ${colors.nord0};
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', '游ゴシック Medium', YuGothic,
      YuGothicM, 'Hiragino Kaku Gothic ProN', メイリオ, Meiryo, sans-serif;
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl,
  pre,
  table {
    margin: 0;
  }
  a,
  area,
  button,
  [role='button'],
  input:not([type='range']),
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
    -ms-touch-action: manipulation;
  }
`

function GlobalStyle() {
  return <Global styles={globalStyle} />
}

export default GlobalStyle
