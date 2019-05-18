import React from 'react'
import Row from '~/components/abstracts/row'
import SectionContainer from '~/components/abstracts/section-container'
import SectionTitle from '~/components/elements/section-title'
import TextItem from '~/components/elements/text-item'

function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionTitle>Skills</SectionTitle>
      <Row space={24}>
        <TextItem>HTML5</TextItem>
        <TextItem>CSS3</TextItem>
        <TextItem>ES2018</TextItem>
        <TextItem>Node.js</TextItem>
        <TextItem>TypeScript</TextItem>
        <TextItem>React</TextItem>
        <TextItem>React Native</TextItem>
        <TextItem>Redux</TextItem>
        <TextItem>Webpack</TextItem>
        <TextItem>Git</TextItem>
      </Row>
    </SectionContainer>
  )
}

export default Skills
