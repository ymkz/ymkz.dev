import { css, Global } from '@emotion/core'
import React from 'react'

import { primary } from '~/helpers/colors'

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
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
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', '游ゴシック Medium',
            YuGothic, 'Hiragino Kaku Gothic ProN', メイリオ, Meiryo, sans-serif;
          line-height: 1;
          margin: 0;
          -webkit-overflow-scrolling: touch;
          overflow-y: scroll;
          overscroll-behavior-y: none;
          &::-webkit-scrollbar {
            width: 4px;
          }
          &::-webkit-scrollbar-track {
            background-color: ${primary[50]};
          }
          &::-webkit-scrollbar-thumb {
            background-color: ${primary[100]};
          }
        }
        h1,
        h2,
        h3,
        p,
        ul {
          margin: 0;
        }
        a,
        button,
        label,
        textarea {
          touch-action: manipulation;
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
