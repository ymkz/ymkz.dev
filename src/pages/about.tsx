import React from 'react'
import Page from '../components/abstracts/page'
import Profile from '../components/modules/profile'
import Skills from '../components/modules/skills'
import Games from '../components/modules/games'
import Socials from '../components/modules/socials'
import Contact from '../components/modules/contact'

function About() {
  return (
    <Page>
      <Profile />
      <Skills />
      <Games />
      <Socials />
      <Contact />
    </Page>
  )
}

export default About
