import '~/style.css'

import { Fragment, h } from 'preact'

import { Education } from '~/components/education'
import { Personality } from '~/components/personality'
import { Profile } from '~/components/profile'
import { Skill } from '~/components/skill'
import { Social } from '~/components/social'

const Index = () => {
  return (
    <Fragment>
      <Profile />
      <Skill />
      <Education />
      <Social />
      <Personality />
    </Fragment>
  )
}

export default Index
