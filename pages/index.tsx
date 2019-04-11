import React from 'react'
import styled from '@emotion/styled'
import breakpoints from '../constants/breakpoints'

const Container = styled.div`
  flex-flow: column;
  display: flex;
  height: calc(100vh - 64px);
  justify-content: center;
  padding-bottom: 64px;
  @media ${breakpoints.mobile} {
    justify-content: flex-start;
    padding-top: 32px;
  }
`

const H1 = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 7rem;
  font-weight: 900;
  line-height: 1;
  margin: 0;
  @media ${breakpoints.mobile} {
    font-size: 6rem;
  }
`

const H2 = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  margin: 0.5rem 0 0 0;
  @media ${breakpoints.mobile} {
    font-size: 1.4rem;
  }
`

const BR = styled.br`
  display: none;
  @media ${breakpoints.mobile} {
    display: inline;
  }
`

function Home() {
  return (
    <React.Fragment>
      <Container>
        <H1>
          Hi, <BR />
          I&apos;m <BR />
          ymkz
        </H1>
        <H2>―Play games, seriously</H2>
      </Container>
    </React.Fragment>
  )
}

export default Home
