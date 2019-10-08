import { css } from '@emotion/core'
import React from 'react'

export const TextItem: React.FC = ({ children }) => {
  return (
    <span
      css={css`
        line-height: 2;
      `}
    >
      {children}
    </span>
  )
}
