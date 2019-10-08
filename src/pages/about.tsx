import { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'

import { Contact } from '~/components/modules/contact'
import { Game } from '~/components/modules/game'
import { Profile } from '~/components/modules/profile'
import { Skill } from '~/components/modules/skill'
import { Social } from '~/components/modules/social'

const About: NextPage = () => {
  return (
    <React.Fragment>
      <NextHead>
        <title>About | ymkz.co</title>
      </NextHead>
      <Profile />
      <Skill />
      <Game />
      <Social />
      <Contact />
    </React.Fragment>
  )
}

export default About
