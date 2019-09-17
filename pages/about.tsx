import React from 'react'
import { NextPage } from 'next'
import { Head } from '~/components/abstracts/head'
import { Profile } from '~/components/modules/profile'
import { Skill } from '~/components/modules/skill'
import { Game } from '~/components/modules/game'
import { Social } from '~/components/modules/social'
import { Contact } from '~/components/modules/contact'

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
