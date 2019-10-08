import React from 'react'

import { SectionContainer } from '~/components/abstracts/section-container'
import { SectionTitle } from '~/components/elements/section-title'
import { Sentence } from '~/components/elements/sentence'

export const Profile = () => {
  return (
    <SectionContainer id="profile">
      <SectionTitle>Profile</SectionTitle>
      <Sentence>I&apos;m Kazuya Yamashita a.k.a ymkz.</Sentence>
      <Sentence>Work as a Frontend engineer nearby UI/UX engineering.</Sentence>
      <Sentence>
        Major in computer science, studying Human-Computer Interaction with face/eye-tracking.
      </Sentence>
      <Sentence>23y/o, based in Matsue, I like padding, building UI, Sci-Fi and FPS Game.</Sentence>
    </SectionContainer>
  )
}
