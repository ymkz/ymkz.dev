import { css, Global } from '@emotion/core'
import React from 'react'

import { nord } from '~/helpers/colors'

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        :root {
          --base-text: ${nord.nord0};
          --base-background: ${nord.nord6};
          --logo-fill-front: ${nord.nord3};
          --logo-fill-back: ${nord.nord0};
          --input-background: ${nord.nord4};
          --input-border: ${nord.nord6};
          --input-shadow: ${nord.nord5};
          --input-placeholder-text: ${nord.nord3};
          --input-error-text: ${nord.nord11};
          --button-background: ${nord.nord4};
          --button-shadow: ${nord.nord5};
          --button-disable-text: ${nord.nord3};
          --image-border: ${nord.nord4};
          --scrollbar-background: ${nord.nord5};
          --scrollbar-thumb: ${nord.nord4};
          --visible-icon-light: none;
          --visible-icon-dark: block;
        }
        :root[data-theme='dark'] {
          --base-text: ${nord.nord6};
          --base-background: ${nord.nord0};
          --logo-fill-front: ${nord.nord4};
          --logo-fill-back: ${nord.nord6};
          --input-background: ${nord.nord1};
          --input-border: ${nord.nord3};
          --input-shadow: ${nord.nord2};
          --input-placeholder-text: ${nord.nord3};
          --input-error-text: ${nord.nord11};
          --button-background: ${nord.nord1};
          --button-shadow: ${nord.nord2};
          --button-disable-text: ${nord.nord3};
          --image-border: ${nord.nord2};
          --scrollbar-background: ${nord.nord1};
          --scrollbar-thumb: ${nord.nord3};
          --visible-icon-light: block;
          --visible-icon-dark: none;
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
          margin: 0;
          overflow-y: scroll;
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', '游ゴシック Medium',
            YuGothic, 'Hiragino Kaku Gothic ProN', メイリオ, Meiryo, sans-serif;
          color: var(--base-text);
          user-select: none;
          background-color: var(--base-background);
          -webkit-overflow-scrolling: touch;
          &::-webkit-scrollbar {
            width: 6px;
          }
          &::-webkit-scrollbar-track {
            background-color: var(--scrollbar-background);
          }
          &::-webkit-scrollbar-thumb {
            background-color: var(--scrollbar-thumb);
          }
        }
        h1,
        h2,
        p,
        ul {
          margin: 0;
        }
        a,
        button,
        label,
        textarea {
          -ms-touch-action: manipulation;
          touch-action: manipulation;
        }
        input,
        textarea {
          -webkit-appearance: none;
          -moz-appearance: none;
        }
        button,
        input,
        textarea {
          font-family: inherit;
          font-size: 100%;
        }
      `}
    />
  )
}
