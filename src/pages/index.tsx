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
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
  }
`

const H1 = styled.h1`
  background-color: var(--base-background);
  color: var(--base-text);
  font-family: 'Nunito Sans', sans-serif;
  font-size: 6.6rem;
  font-weight: 900;
  line-height: 1;
  ${up('mobile')} {
    font-size: 7.7rem;
  }
`

const H2 = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 300;
  margin-top: 1rem;
  ${up('mobile')} {
    margin-top: 0.5rem;
  }
`
