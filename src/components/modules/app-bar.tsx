import styled from '@emotion/styled'
import React from 'react'

import { FlexRow } from '~/components/elements/flex-row'
import { NavIcon } from '~/components/elements/nav-icon'
import { NavLink } from '~/components/elements/nav-link'
import { up } from '~/helpers/breakpoints'

export const AppBar = () => {
  return (
    <Container>
      <FlexRow space={8}>
        <NavIcon />
        <NavLink href="/">ymkz</NavLink>
      </FlexRow>
      <FlexRow space={16}>
        <NavLink href="/about">about</NavLink>
        <NavLink href="/work">work</NavLink>
      </FlexRow>
    </Container>
  )
}

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background-color: var(--base-background);
  ${up('mobile')} {
    max-width: 768px;
    height: 64px;
    margin: 0 auto;
  }
`
