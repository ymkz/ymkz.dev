import styled from '@emotion/styled'
import React from 'react'

import { AppBar } from '~/components/modules/app-bar'
import { up } from '~/helpers/breakpoints'

export const PageContainer: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <AppBar />
      <Main>{children}</Main>
    </React.Fragment>
  )
}

const Main = styled.main`
  min-height: calc(100vh - 52px);
  padding: 0 16px;
  ${up('mobile')} {
    margin: 0 auto;
    max-width: 768px;
    min-height: calc(100vh - 64px);
  }
`
