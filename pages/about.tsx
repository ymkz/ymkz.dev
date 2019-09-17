import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { Profile } from '~/components/modules/profile'
import { Skill } from '~/components/modules/skill'
import { Game } from '~/components/modules/game'
import { Social } from '~/components/modules/social'
import { Contact } from '~/components/modules/contact'

const About: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About | ymkz.co</title>
      </Head>
      <Profile />
      <Skill />
      <Game />
      <Social />
      <Contact />
    </React.Fragment>
  )
}

export default About
