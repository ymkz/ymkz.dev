import React from 'react'

import { ListRow, ListRowItem } from '../element/list-row'
import { Section } from '../element/section'
import { Sentence } from '../element/sentence'

export const Profile = () => {
  return (
    <Section>
      <Sentence>
        I&apos;m Kazuya Yamashita. a.k.a ymkz.
        <br />
        24y/o, based in Tokyo, Japan.
        <br />
        Working as a frontend engineer.
      </Sentence>
      <ListRow>
        <ListRowItem>React</ListRowItem>
        <ListRowItem>TypeScript</ListRowItem>
        <ListRowItem>Node.js</ListRowItem>
        <ListRowItem>Next.js</ListRowItem>
        <ListRowItem>React Native</ListRowItem>
        <ListRowItem>Redux</ListRowItem>
        <ListRowItem>Webpack</ListRowItem>
        <ListRowItem>HTML5</ListRowItem>
        <ListRowItem>CSS3</ListRowItem>
      </ListRow>
    </Section>
  )
}
