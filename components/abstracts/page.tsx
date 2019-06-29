import React from 'react'
import styled from '@emotion/styled'
import { Header } from '~/components/modules/header'

type PageProps = {
  children: React.ReactNode
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 768px;
  min-height: calc(100vh - 64px);
  padding: 0 16px;
`

export function Page({ children }: PageProps) {
  return (
    <React.Fragment>
      <Header />
      <Main>{children}</Main>
    </React.Fragment>
  )
}
