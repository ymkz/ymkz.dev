import React from 'react'

import { Section } from '../element/section'
import { Sentence } from '../element/sentence'
import { ListColumn, ListColumnItem } from '../element/list-column'

export const Like = () => {
  return (
    <Section>
      <Sentence>
        I Like Sleeping, Walking, Padding, Sci-Fi, FPS Games.
        <br />
        Play games seriously with fun.
      </Sentence>
      <ListColumn>
        <ListColumnItem>ARIA(天野こずえ)</ListColumnItem>
        <ListColumnItem>ハーモニー(伊藤計劃)</ListColumnItem>
        <ListColumnItem>Overwatch</ListColumnItem>
        <ListColumnItem>PUBG</ListColumnItem>
        <ListColumnItem>VALORANT</ListColumnItem>
      </ListColumn>
    </Section>
  )
}
