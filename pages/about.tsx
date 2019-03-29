import React from 'react'
import Head from 'next/head'
import Profile from '../components/modules/profile'
import Skills from '../components/modules/skills'
import Games from '../components/modules/games'
import Socials from '../components/modules/socials'
import Contact from '../components/modules/contact'

function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About - ymkz</title>
      </Head>
      <Profile />
      <Skills />
      <Games />
      <Socials />
      <Contact />
    </React.Fragment>
  )
}

export default About
