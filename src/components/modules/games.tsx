import React from 'react'
import Row from '../abstracts/row'
import SectionContainer from '../abstracts/section-container'
import SectionTitle from '../elements/section-title'
import TextItem from '../elements/text-item'

function Games() {
  return (
    <SectionContainer>
      <SectionTitle>Games</SectionTitle>
      <Row space={24}>
        <TextItem>PLAYERUNKNOWN&apos;S BATTLEGROUNDS</TextItem>
        <TextItem>Overwatch</TextItem>
        <TextItem>Battlefield 4</TextItem>
        <TextItem>Battlefield V</TextItem>
        <TextItem>Counter-Strike: Global Offensive</TextItem>
      </Row>
    </SectionContainer>
  )
}

export default Games
