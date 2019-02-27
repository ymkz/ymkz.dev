import React from 'react'
import styled from '@emotion/styled'
import Page from '../components/abstracts/page'

const Container = styled.div`
  flex-flow: column;
  display: flex;
  height: calc(100vh - 64px);
  justify-content: center;
  padding-bottom: 64px;
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 64px;
  }
`

const H1 = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 7rem;
  font-weight: 900;
  line-height: 1;
  margin: 0;
`

const H2 = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  margin: 0.5rem 0 0 0;
`

function Home() {
  return (
    <Page>
      <Container>
        <H1>Hi, I&apos;m ymkz</H1>
        <H2>―Play games, seriously</H2>
      </Container>
    </Page>
  )
}

export default Home
