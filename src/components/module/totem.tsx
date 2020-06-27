import { styled } from 'goober'
import React from 'react'

import { Wind } from '../atomic/icon'

export const Totem = () => {
  return (
    <Container>
      <span>[&nbsp;</span>
      <Wind />
      <span>&nbsp;]</span>
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 48px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  > *:not(:last-child) {
    margin-right: 4px;
  }
`
