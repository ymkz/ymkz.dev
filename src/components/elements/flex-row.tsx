import { css } from '@emotion/core'
import React from 'react'

type BaseRowProps = {
  space?: number
}

export const FlexRow: React.FC<BaseRowProps> = ({ children, space }) => {
  return (
    <div
      css={css`
        align-items: center;
        display: flex;
        flex-flow: row wrap;
        > *:not(:last-child) {
          margin-right: ${space ? space : 0}px;
        }
      `}
    >
      {children}
    </div>
  )
}
