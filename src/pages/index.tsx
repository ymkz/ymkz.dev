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
  padding-left: 8px;
  color: ${primary[50]};
  font-weight: 700;
  font-size: 110px;
  line-height: 0.85;
  ${up('mobile')} {
    padding-left: 20px;
    font-size: 330px;
  }
`

const Iam = styled.div`
  margin: 20px 0;
  padding-left: 10px;
  color: ${primary[700]};
  font-weight: 900;
  font-size: 50px;
  font-family: 'Nunito Sans', sans-serif;
  line-height: 1.15;
  ${up('mobile')} {
    padding-left: 20px;
    font-size: 100px;
    line-height: 1;
  }
`

const AboutMe = styled.div`
  padding-left: 10px;
  color: ${primary[700]};
  font-weight: 300;
  font-size: 20px;
  font-family: 'Nunito Sans', sans-serif;
  line-height: 1.25;
  ${up('mobile')} {
    padding-left: 20px;
    font-size: 25px;
  }
`
