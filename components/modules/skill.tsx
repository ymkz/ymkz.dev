import React from 'react'
import { FlexRow } from '~/components/elements/flex-row'
import { SectionContainer } from '~/components/abstracts/section-container'
import { SectionTitle } from '~/components/elements/section-title'
import { TextItem } from '~/components/elements/text-item'

export const Skill = () => {
  return (
    <SectionContainer id="skill">
      <SectionTitle>Skill</SectionTitle>
      <FlexRow space={24}>
        <TextItem>HTML5</TextItem>
        <TextItem>CSS3</TextItem>
        <TextItem>ES2019</TextItem>
        <TextItem>Node.js</TextItem>
        <TextItem>TypeScript</TextItem>
        <TextItem>React</TextItem>
        <TextItem>React Native</TextItem>
        <TextItem>Redux</TextItem>
        <TextItem>Webpack</TextItem>
        <TextItem>Git</TextItem>
      </FlexRow>
    </SectionContainer>
  )
}
