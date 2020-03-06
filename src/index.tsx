import '~/style.css'

import { h } from 'preact'

import { Education } from '~/components/education'
import { Personality } from '~/components/personality'
import { Profile } from '~/components/profile'
import { Skill } from '~/components/skill'
import { Social } from '~/components/social'

const Index = () => {
  return (
    <main className="container">
      <Profile />
      <Skill />
      <Education />
      <Social />
      <Personality />
    </main>
  )
}

export default Index
