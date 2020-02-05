import { css, Global } from '@emotion/core'
import React from 'react'

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-weight: 100;
          font-family: 'Original Yu Gothic';
          src: local('Yu Gothic Medium');
        }
        @font-face {
          font-weight: 200;
          font-family: 'Original Yu Gothic';
          src: local('Yu Gothic Medium');
        }
        @font-face {
          font-weight: 300;
          font-family: 'Original Yu Gothic';
          src: local('Yu Gothic Medium');
        }
        @font-face {
          font-weight: 400;
          font-family: 'Original Yu Gothic';
          src: local('Yu Gothic Medium');
        }
        @font-face {
          font-weight: bold;
          font-family: 'Original Yu Gothic';
          src: local('Yu Gothic Bold');
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans', 'Noto Sans CJK JP',
            'Original Yu Gothic', 'Yu Gothic', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Sans Emoji';
          line-height: 1;
          scroll-behavior: smooth;
          text-rendering: optimizeSpeed;
          -webkit-overflow-scrolling: touch;
        }
        h1,
        h2,
        h3,
        h4,
        p,
        ul,
        ol,
        li,
        figure,
        figcaption,
        blockquote {
          margin: 0;
        }
        ul,
        ol {
          padding: 0;
        }
        li {
          list-style: none;
        }
        a:not([class]) {
          text-decoration-skip-ink: auto;
        }
        img {
          display: block;
          max-width: 100%;
        }
        input,
        button,
        textarea,
        select {
          font: inherit;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}
    />
  )
}
