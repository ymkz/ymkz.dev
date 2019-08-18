import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { up } from '~/helpers/breakpoints'

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home | ymkz.co</title>
      </Head>
      <Container>
        <H1>Hi, I&apos;m ymkz</H1>
        <H2>―Play games, seriously with fun.</H2>
      </Container>
    </React.Fragment>
  )
}

export default Home

const Container = styled.div`
  width: min-content;
  ${up('mobile')} {
    position: fixed;
    top: 50%;
    left: 50%;
    width: fit-content;
    transform: translate(-50%, -50%);
  }
`

const H1 = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 6.6rem;
  font-weight: 900;
  line-height: 1;
  color: var(--base-text);
  background-color: var(--base-background);
  ${up('mobile')} {
    font-size: 7.7rem;
  }
`

const H2 = styled.h2`
  margin-top: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 300;
  ${up('mobile')} {
    width: fit-content;
    margin-top: 0.5rem;
  }
`
