import React from 'react'
import SectionContainer from '../abstracts/section-container'
import SectionTitle from '../elements/section-title'
import Sentence from '../elements/sentence'

function Profile() {
  return (
    <SectionContainer>
      <SectionTitle>Profile</SectionTitle>
      <Sentence>I&apos;m Kazuya Yamashita a.k.a ymkz.</Sentence>
      <Sentence>Work as a Frontend engineer nearby UI/UX engineering.</Sentence>
      <Sentence>
        Major in computer science, studying Human-Computer Interaction with face/eye-tracking.
      </Sentence>
      <Sentence>22y/o, based in Matsue, I like padding, building UI, Sci-Fi and FPS Game.</Sentence>
    </SectionContainer>
  )
}

export default Profile
