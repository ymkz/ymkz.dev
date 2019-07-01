import React from 'react'
import styled from '@emotion/styled'
import { Header } from '~/components/modules/header'
import { breakpoints, constraints } from '~/helpers/constants'

type AppContainerProps = {
  children: React.ReactNode
}

export function AppContainer({ children }: AppContainerProps) {
  return (
    <React.Fragment>
      <Header />
      <Content>{children}</Content>
    </React.Fragment>
  )
}

const Content = styled.main`
  margin: 0 auto;
  max-width: 768px;
  min-height: calc(100vh - ${constraints.headerHeight.desktop});
  padding: 0 16px;
  @media ${breakpoints.mobile} {
    min-height: calc(100vh - ${constraints.headerHeight.mobile});
  }
`
