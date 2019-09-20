import React from 'react'

import { SectionContainer } from '~/components/abstracts/section-container'
import { FlexRow } from '~/components/elements/flex-row'
import { SectionTitle } from '~/components/elements/section-title'
import { TextItem } from '~/components/elements/text-item'

export const Game = () => {
  return (
    <SectionContainer id="game">
      <SectionTitle>Game</SectionTitle>
      <FlexRow space={24}>
        <TextItem>PLAYERUNKNOWN&apos;S BATTLEGROUNDS</TextItem>
        <TextItem>Overwatch</TextItem>
        <TextItem>Battlefield 4</TextItem>
        <TextItem>Counter-Strike: Global Offensive</TextItem>
        <TextItem>Black Desert</TextItem>
      </FlexRow>
    </SectionContainer>
  )
}
