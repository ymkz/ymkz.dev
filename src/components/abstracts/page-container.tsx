import { css } from '@emotion/core'
import React from 'react'

import { AppBar } from '~/components/modules/app-bar'
import { up } from '~/helpers/breakpoints'

export const PageContainer: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <AppBar />
      <main
        css={css`
          min-height: calc(100vh - 52px);
          padding: 0 16px;
          ${up('mobile')} {
            max-width: 768px;
            min-height: calc(100vh - 64px);
            margin: 0 auto;
          }
        `}
      >
        {children}
      </main>
    </React.Fragment>
  )
}
