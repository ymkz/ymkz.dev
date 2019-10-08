import styled from '@emotion/styled'
import { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'

import { up } from '~/helpers/breakpoints'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <NextHead>
        <title>Home | ymkz.co</title>
      </NextHead>
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
    margin-top: 0.5rem;
  }
`
