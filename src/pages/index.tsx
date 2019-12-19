import styled from '@emotion/styled'
import { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'

import { down, up } from '~/helpers/breakpoints'
import { primary } from '~/helpers/colors'

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <NextHead>
        <title>ymkz.co</title>
      </NextHead>
      <Container>
        <CatchTheWind aria-hidden>
          Catch the
          <br />
          Wind.
        </CatchTheWind>
        <Iam>I&apos;m Kazuya &quot;ymkz&quot; Yamashita.</Iam>
        <AboutMe>
          23y/o, based in Matsue. Major in computer science. Work as a Frontend engineer.
          <br />
          I like Padding, Typography, Sci-Fi and FPS Game.
          <br />
          Play games, seriously with fun.
        </AboutMe>
      </Container>
    </React.Fragment>
  )
}

export default Index

const Container = styled.main`
  min-height: calc(100vh - 50px);
  ${down('mobile')} {
    padding-top: 4px;
  }
`

const CatchTheWind = styled.div`
  color: ${primary[50]};
  font-size: 110px;
  font-weight: 700;
  line-height: 0.85;
  padding-left: 8px;
  ${up('mobile')} {
    font-size: 330px;
    padding-left: 20px;
  }
`

const Iam = styled.div`
  color: ${primary[700]};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 50px;
  font-weight: 900;
  line-height: 1.15;
  margin: 20px 0;
  padding-left: 10px;
  ${up('mobile')} {
    font-size: 100px;
    line-height: 1;
    padding-left: 20px;
  }
`

const AboutMe = styled.div`
  color: ${primary[700]};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.25;
  padding-left: 10px;
  ${up('mobile')} {
    font-size: 25px;
    padding-left: 20px;
  }
`
