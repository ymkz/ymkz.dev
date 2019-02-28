import React from 'react'
import Row from '../abstracts/row'
import SectionContainer from '../abstracts/section-container'
import SectionTitle from '../elements/section-title'
import Text from '../elements/text'

function Games() {
  return (
    <SectionContainer>
      <SectionTitle>Games</SectionTitle>
      <Row space={24}>
        <Text>PLAYERUNKNOWN&apos;S BATTLEGROUNDS</Text>
        <Text>Overwatch</Text>
        <Text>Battlefield V</Text>
        <Text>Apex Legends</Text>
        <Text>Counter-Strike: Global Offensive</Text>
      </Row>
    </SectionContainer>
  )
}

export default Games
