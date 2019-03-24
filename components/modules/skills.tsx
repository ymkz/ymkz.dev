import React from 'react'
import Row from '../abstracts/row'
import SectionContainer from '../abstracts/section-container'
import SectionTitle from '../elements/section-title'
import TextItem from '../elements/text-item'

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
