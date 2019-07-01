import React from 'react'
import { css, Global } from '@emotion/core'

const styles = css`
  :root {
    --base-text: #2e3440;
    --base-background: #eceff4;
    --logo-fill-front: #4c566a;
    --logo-fill-back: #2e3440;
    --input-background: #d8dee9;
    --input-border: #eceff4;
    --input-shadow: #e5e9f0;
    --input-placeholder-text: #4c566a;
    --input-error-text: #bf616a;
    --input-error-border: rgba(191, 97, 106, 0.85);
    --input-error-shadow: rgba(191, 97, 106, 0.25);
    --button-background: #d8dee9;
    --button-shadow: #e5e9f0;
    --button-disable-text: #4c566a;
    --image-border: #d8dee9;
  }
  :root[theme='dark'] {
    --base-text: #eceff4;
    --base-background: #2e3440;
    --logo-fill-front: #d8dee9;
    --logo-fill-back: #eceff4;
    --input-background: #3b4252;
    --input-border: #4c566a;
    --input-shadow: #434c5e;
    --input-placeholder-text: #4c566a;
    --input-error-text: #bf616a;
    --input-error-border: rgba(191, 97, 106, 0.85);
    --input-error-shadow: rgba(191, 97, 106, 0.25);
    --button-background: #3b4252;
    --button-shadow: #434c5e;
    --button-disable-text: #4c566a;
    --image-border: #434c5e;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
  }
  body {
    background-color: var(--base-background);
    color: var(--base-text);
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', '游ゴシック Medium', YuGothic,
      'Hiragino Kaku Gothic ProN', メイリオ, Meiryo, sans-serif;
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
  input,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }
`

export function GlobalStyle() {
  return <Global styles={styles} />
}
