import React from 'react'

import { Section } from '../element/section'
import { Sentence } from '../element/sentence'
import { ListColumn, ListColumnItem } from '../element/list-column'

export const Study = () => {
  return (
    <Section>
      <Sentence>
        Majored in computer science, studied human-computer interaction with face/eye tracking.
        <br />
        Master of Engineering.
      </Sentence>
      <ListColumn>
        <ListColumnItem>Shimane University</ListColumnItem>
        <ListColumnItem>Bachelor: 2014.4 - 2018.3</ListColumnItem>
        <ListColumnItem>Master: 2018.4 - 2020.3</ListColumnItem>
      </ListColumn>
    </Section>
  )
}
