import { css } from '@emotion/core'
import React from 'react'

export const SectionTitle: React.FC = ({ children }) => {
  return (
    <h1
      css={css`
        margin: 0;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 3rem;
        font-weight: 900;
        line-height: 1;
      `}
    >
      {children}
    </h1>
  )
}
