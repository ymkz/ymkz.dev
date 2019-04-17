import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import breakpoints from '../constants/breakpoints'

const Container = styled.div`
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  @media ${breakpoints.mobile} {
    left: auto;
    overflow: hidden;
    position: static;
    top: auto;
    transform: none;
    width: min-content;
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
  margin-top: 0.5rem;
  @media ${breakpoints.mobile} {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - ymkz</title>
      </Head>
      <Container>
        <H1>Hi, I&apos;m ymkz</H1>
        <H2>―Play games, seriously</H2>
      </Container>
    </React.Fragment>
  )
}

export default Home
