import styled from '@emotion/styled'
import React from 'react'

import { SectionContainer } from '~/components/abstracts/section-container'
import { Facebook, GitHub, LinkedIn, Twitter } from '~/components/abstracts/social-icons'
import { ExternalLink } from '~/components/elements/external-link'
import { SectionTitle } from '~/components/elements/section-title'

export const Social = () => {
  return (
    <SectionContainer id="social">
      <SectionTitle>Social</SectionTitle>
      <List>
        <ListItem>
          <GitHub />
          <ExternalLink href="https://github.com/ymkz">@ymkz</ExternalLink>
        </ListItem>
        <ListItem>
          <Twitter />
          <ExternalLink href="https://twitter.com/ymkzly">@ymkzly</ExternalLink>
        </ListItem>
        <ListItem>
          <Facebook />
          <ExternalLink href="https://facebook.com/ymkzly">ymkzly</ExternalLink>
        </ListItem>
        <ListItem>
          <LinkedIn />
          <ExternalLink href="https://www.linkedin.com/in/ymkz">/in/ymkz</ExternalLink>
        </ListItem>
      </List>
    </SectionContainer>
  )
}

const List = styled.ul`
  padding: 0;
  margin-top: 8px;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  & > *:not(:last-child) {
    margin-right: 12px;
  }
`
