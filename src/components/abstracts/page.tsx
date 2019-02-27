import React from 'react'
import styled from '@emotion/styled'
import Header from '../modules/header'

interface Props {
  children: React.ReactNode
}

const Main = styled.main`
  margin: 64px auto 0;
  max-width: 768px;
  min-height: calc(100vh - 64px);
  padding: 0 16px;
`

function Page({ children }: Props) {
  return (
    <React.Fragment>
      <Header />
      <Main>{children}</Main>
    </React.Fragment>
  )
}

export default Page
