import { styled } from 'goober'
import React from 'react'

import { Anchor, ExternalLink } from '../atomic/external-link'

type Props = {
  name: string
  href: string
  icon: JSX.Element
}

export const Badge = ({ name, href, icon }: Props) => {
  return (
    <Container>
      <ExternalLink href={href}>
        <Icon>{icon}</Icon>
        <Name>{name}</Name>
      </ExternalLink>
    </Container>
  )
}

const Container = styled('li')`
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid currentColor;
  border-left: 0;
  ${Anchor} {
    display: flex;
    align-items: center;
  }
`

const Icon = styled('div')`
  background-color: #263238;
  color: #eceff1;
  width: 32px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Name = styled('div')`
  padding: 0 8px;
`
