import React from 'react'
import { css } from '@emotion/core'

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
