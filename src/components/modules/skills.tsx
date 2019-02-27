import React from 'react'
import Row from '../abstracts/row'
import SectionContainer from '../abstracts/section-container'
import SectionTitle from '../elements/section-title'
import Text from '../elements/text'

function Skills() {
  return (
    <SectionContainer>
      <SectionTitle>Skills</SectionTitle>
      <Row space={24}>
        <Text>HTML5</Text>
        <Text>CSS3</Text>
        <Text>ES2018</Text>
        <Text>Node.js</Text>
        <Text>TypeScript</Text>
        <Text>React</Text>
        <Text>React Native</Text>
        <Text>Redux</Text>
        <Text>Webpack</Text>
        <Text>Git</Text>
      </Row>
    </SectionContainer>
  )
}

export default Skills
