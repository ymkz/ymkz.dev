import styled from '@emotion/styled'
import Head from 'next/head'
import React from 'react'

import { Facebook, GitHub, LinkedIn, Twitter } from '~/components/social-icons'

const Index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ymkz.co</title>
      </Head>
      <Container>
        <Title>
          Catch
          <br />
          the
          <br />
          wind.
        </Title>
        <Sub>
          [&nbsp;
          <img src="/images/wind.svg" width={24} height={24} />
          &nbsp;]
        </Sub>
        <Paragraph>
          I&apos;m Kazuya Yamashita. a.k.a ymkz.
          <br />
          23y/o, based in Matsue at Shimane prefecture in Japan.
          <br />
          Working as a frontend engineer.
        </Paragraph>
        <ListRow>
          <ListRowItem>React</ListRowItem>
          <ListRowItem>TypeScript</ListRowItem>
          <ListRowItem>Node.js</ListRowItem>
          <ListRowItem>Next.js</ListRowItem>
          <ListRowItem>React Native</ListRowItem>
          <ListRowItem>Redux</ListRowItem>
          <ListRowItem>Webpack</ListRowItem>
          <ListRowItem>HTML5</ListRowItem>
          <ListRowItem>CSS3</ListRowItem>
        </ListRow>
        <Paragraph>Majored in computer science, studying Human-Computer Interaction with face/eye tracking.</Paragraph>
        <ListColumn>
          <ListColumnItem>Shimane University</ListColumnItem>
          <ListColumnItem>Bachelor: 2014.4 - 2018.3</ListColumnItem>
          <ListColumnItem>Master: 2018.4 - 2020.3</ListColumnItem>
        </ListColumn>
        <Paragraph>
          Social account is here, and get in touch with me.
          <br />
          Twitter DM is open.
        </Paragraph>
        <ListRow>
          <Anchor href="https://twitter.com/ymkzly" target="_blank" rel="noopener noreferrer">
            <Icon>
              <Twitter />
            </Icon>
            <ListRowItem>Twitter</ListRowItem>
          </Anchor>
          <Anchor href="https://facebook.com/ymkzly" target="_blank" rel="noopener noreferrer">
            <Icon>
              <Facebook />
            </Icon>
            <ListRowItem>Facebook</ListRowItem>
          </Anchor>
          <Anchor href="https://github.com/ymkz" target="_blank" rel="noopener noreferrer">
            <Icon>
              <GitHub />
            </Icon>
            <ListRowItem>GitHub</ListRowItem>
          </Anchor>
          <Anchor href="https://www.linkedin.com/in/ymkz" target="_blank" rel="noopener noreferrer">
            <Icon>
              <LinkedIn />
            </Icon>
            <ListRowItem>LinkedIn</ListRowItem>
          </Anchor>
        </ListRow>
        <Paragraph>
          I Like Padding, Sci-Fi, FPS Games.
          <br />
          Play games seriously with fun.
        </Paragraph>
        <ListColumn>
          <ListColumnItem>ARIA(天野こずえ)</ListColumnItem>
          <ListColumnItem>ハーモニー(伊藤計劃)</ListColumnItem>
          <ListColumnItem>Overwatch</ListColumnItem>
          <ListColumnItem>PUBG</ListColumnItem>
        </ListColumn>
      </Container>
    </React.Fragment>
  )
}

export default Index

const Container = styled.main`
  padding: 0 24px 144px;
  color: #ffffff;
  @media screen {
    max-width: 768px;
    margin: 0 auto;
  }
`

const Title = styled.h1`
  margin-top: 144px;
  margin-bottom: 44px;
  color: #ffffff;
  font-size: 64px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.15;
`

const Sub = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 24px;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  > *:not(:last-child) {
    margin-right: 16px;
  }
`

const Paragraph = styled.p`
  margin-bottom: 24px;
  color: #ffffff;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
`

const ListRow = styled.ul`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
  > *:not(:last-child) {
    margin-right: 8px;
  }
`

const ListRowItem = styled.li`
  display: flex;
  align-items: center;
  height: 27px;
  margin-bottom: 8px;
  padding: 0 8px;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid #ffffff;
`

const ListColumn = styled.ul`
  margin-bottom: 24px;
  padding-left: 16px;
`

const ListColumnItem = styled.li`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  list-style: disc;
`

const Anchor = styled.a`
  all: unset;
  display: flex;
  cursor: pointer;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 27px;
  background-color: #ffffff;
`
