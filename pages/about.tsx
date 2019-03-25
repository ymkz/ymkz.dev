import React from 'react'
import Profile from '../components/modules/profile'
import Skills from '../components/modules/skills'
import Games from '../components/modules/games'
import Socials from '../components/modules/socials'
import Contact from '../components/modules/contact'

function About() {
  return (
    <React.Fragment>
      <Profile />
      <Skills />
      <Games />
      <Socials />
      <Contact />
    </React.Fragment>
  )
}

export default About
