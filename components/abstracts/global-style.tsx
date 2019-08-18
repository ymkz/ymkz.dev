import React from 'react'
import { css, Global } from '@emotion/core'

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
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
          --scrollbar-background: #e5e9f0;
          --scrollbar-thumb: #d8dee9;
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
          --scrollbar-background: #3b4252;
          --scrollbar-thumb: #4c566a;
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
            width: 8px;
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
