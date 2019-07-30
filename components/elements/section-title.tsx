import React from 'react'
import { css } from '@emotion/core'

export const SectionTitle: React.FC = ({ children }) => {
  return (
    <h1
      css={css`
        font-family: 'Nunito Sans', sans-serif;
        font-size: 3rem;
        font-weight: 900;
        margin: 0;
      `}
    >
      {children}
    </h1>
  )
}
