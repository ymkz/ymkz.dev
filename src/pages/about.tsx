import styled from '@emotion/styled'
import { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'

import { LinkExternal } from '~/components/atoms/link-external'
import { LinkInternal } from '~/components/atoms/link-internal'
import { IconFacebook } from '~/components/molecules/icon-facebook'
import { IconGitHub } from '~/components/molecules/icon-github'
import { IconLinkedIn } from '~/components/molecules/icon-linkedin'
import { IconTwitter } from '~/components/molecules/icon-twitter'
import { PageContainer } from '~/components/templates/page-container'
import { PageTitle } from '~/components/templates/page-title'
import { up } from '~/helpers/breakpoints'
import { primary } from '~/helpers/colors'

const About: NextPage = () => {
  return (
    <React.Fragment>
      <NextHead>
        <title>About | ymkz.co</title>
      </NextHead>
      <PageContainer>
        <PageTitle>About Me</PageTitle>
        <Content>
          <Text>
            I&apos;m Kazuya Yamashita. a.k.a ymkz.
            <br />
            23y/o, based in Matsue at Shimane prefecture.
            <br />
            Like Simple-UI, Padding, Sci-Fi, FPS Games.
          </Text>
          <List>
            <Item>ARIA(天野こずえ)</Item>
            <Item>ハーモニー(伊藤計劃)</Item>
            <Item>Overwatch</Item>
            <Item>PLAYERUNKNOWN&apos;SBATTLEGROUNDS</Item>
            <Item>Counter-Strike Global Offensive</Item>
          </List>
          <Text>
            Social account is open, and get in touch with me <ContactLink href="/contact">/contact</ContactLink>.
          </Text>
          <SocialList>
            <SocialItem>
              <IconGitHub color={primary[800]} />
              <SocialLink href="https://github.com/ymkz">GitHub</SocialLink>
            </SocialItem>
            <SocialItem>
              <IconTwitter color={primary[800]} />
              <SocialLink href="https://twitter.com/ymkz">Twitter</SocialLink>
            </SocialItem>
            <SocialItem>
              <IconFacebook color={primary[800]} />
              <SocialLink href="https://facebook.com/ymkz">Facebook</SocialLink>
            </SocialItem>
            <SocialItem>
              <IconLinkedIn color={primary[800]} />
              <SocialLink href="https://www.linkedin.com/in/ymkz">LinkedIn</SocialLink>
            </SocialItem>
          </SocialList>
          <Text>
            I&apos;m a frontend engineer. The main language used is Node.js and TypeScript.
            <br />
            Working as a junior frontend engineer, build/improve UI.
          </Text>
          <List>
            <Item>React</Item>
            <Item>TypeScript</Item>
            <Item>Node.js</Item>
            <Item>React Native</Item>
            <Item>Next.js</Item>
            <Item>Webpack</Item>
            <Item>HTML5</Item>
            <Item>CSS3</Item>
          </List>
          <Text>Majored in computer science, studying Human-Computer Interaction with face/eye tracking.</Text>
          <List>
            <Item>Shimane University</Item>
            <Item>Bachelor: 2014.4 - 2018.3</Item>
            <Item>Master: 2018.4 - 2020.3</Item>
          </List>
        </Content>
      </PageContainer>
    </React.Fragment>
  )
}

export default About

const Content = styled.section`
  > *:not(:last-child) {
    margin-bottom: 16px;
    ${up('mobile')} {
      margin-bottom: 24px;
    }
  }
`

const Text = styled.p`
  color: ${primary[800]};
  font-weight: 300;
  font-size: 20px;
  font-family: 'Nunito Sans', sans-serif;
  line-height: 1.5;
`

const ContactLink = styled(LinkInternal)`
  text-decoration: none;
  border-bottom: 1px solid ${primary[200]};
  &:hover {
    text-decoration-line: none;
  }
`

const List = styled.ul`
  padding-left: 24px;
  color: ${primary[800]};
  font-weight: 300;
  font-size: 18px;
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 1.5;
`

const Item = styled.li`
  list-style: disc;
`

const SocialList = styled.ul`
  padding: 0;
`

const SocialItem = styled.li`
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 12px;
  }
`

const SocialLink = styled(LinkExternal)`
  color: ${primary[800]};
  font-weight: 300;
  font-size: 18px;
  font-family: 'Nunito Sans', sans-serif;
  line-height: 2;
`
