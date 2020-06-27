import React from 'react'

import { GitHub, Twitter, Facebook, LinkedIn } from '../atomic/icon'
import { Badge } from '../element/badge'
import { ListRow } from '../element/list-row'
import { Section } from '../element/section'
import { Sentence } from '../element/sentence'

export const Social = () => {
  return (
    <Section>
      <Sentence>
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </Sentence>
      <ListRow>
        <Badge name="GitHub" href="https://github.com/ymkz" icon={<GitHub />} />
        <Badge name="Twitter" href="https://twitter.com/ymkzly" icon={<Twitter />} />
        <Badge name="Facebook" href="https://facebook.com/ymkzly" icon={<Facebook />} />
        <Badge name="LinkedIn" href="https://linkedin.com/in/ymkz" icon={<LinkedIn />} />
      </ListRow>
    </Section>
  )
}
