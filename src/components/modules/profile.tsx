import React from 'react'
import SectionContainer from '../abstracts/section-container'
import SectionTitle from '../elements/section-title'
import Text from '../elements/text'

function Profile() {
  return (
    <SectionContainer>
      <SectionTitle>Profile</SectionTitle>
      <Text>I&apos;m Kazuya Yamashita a.k.a ymkz.</Text>
      <Text>Work as a Frontend engineer nearby UI/UX engineering.</Text>
      <Text>
        Major in computer science, studying Human-Computer Interaction with face/eye-tracking.
      </Text>
      <Text>22y/o, based in Matsue, I like padding, building UI, Sci-Fi and FPS Game.</Text>
    </SectionContainer>
  )
}

export default Profile
