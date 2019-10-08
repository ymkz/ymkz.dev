import { NextPage } from 'next'
import React from 'react'

import { Head } from '~/components/abstracts/head'
import { Contact } from '~/components/modules/contact'
import { Game } from '~/components/modules/game'
import { Profile } from '~/components/modules/profile'
import { Skill } from '~/components/modules/skill'
import { Social } from '~/components/modules/social'

const About: NextPage = () => {
  return (
    <React.Fragment>
      <Head title="About | ymkz.co" />
      <Profile />
      <Skill />
      <Game />
      <Social />
      <Contact />
    </React.Fragment>
  )
}

export default About
