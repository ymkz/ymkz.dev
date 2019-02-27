import React from 'react'
import styled from '@emotion/styled'
import Page from '../components/abstracts/page'

const Container = styled.div`
  padding-bottom: 64px;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`

function Home() {
  return (
    <Page>
      <Container>Home</Container>
    </Page>
  )
}

export default Home
