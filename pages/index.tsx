import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { breakpoints } from '~/helpers/constants'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home | ymkz.io</title>
      </Head>
      <Container>
        <H1>Hi, I&apos;m ymkz</H1>
        <H2>―Play games, seriously with fun.</H2>
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  @media ${breakpoints.mobile} {
    left: auto;
    position: static;
    top: auto;
    transform: none;
    width: min-content;
  }
`

const H1 = styled.h1`
  background-color: var(--base-text);
  color: var(--base-background);
  font-family: 'Nunito Sans', sans-serif;
  font-size: 7rem;
  font-weight: 900;
  line-height: 1;
  margin: 0;
  padding: 0 2rem;
  @media ${breakpoints.mobile} {
    background-color: var(--base-background);
    color: var(--base-text);
    font-size: 6rem;
    padding: 0;
  }
`

const H2 = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  margin-top: 0.5rem;
  width: fit-content;
  @media ${breakpoints.mobile} {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`
