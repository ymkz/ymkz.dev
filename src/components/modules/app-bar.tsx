import styled from '@emotion/styled'
import React from 'react'

import { FlexRow } from '~/components/elements/flex-row'
import { NavIcon } from '~/components/elements/nav-icon'
import { NavLink } from '~/components/elements/nav-link'
import { ThemeSwitch } from '~/components/modules/theme-switch'
import { up } from '~/helpers/breakpoints'

export const AppBar = () => {
  return (
    <Container>
      <FlexRow space={12}>
        <NavIcon />
        <NavLink href="/">ymkz</NavLink>
      </FlexRow>
      <FlexRow space={16}>
        <ThemeSwitch />
        <NavLink href="/about">about</NavLink>
        <NavLink href="/work">work</NavLink>
      </FlexRow>
    </Container>
  )
}

const Container = styled.header`
  align-items: center;
  background-color: var(--base-background);
  display: flex;
  height: 52px;
  justify-content: space-between;
  left: 0;
  padding: 0 16px;
  position: sticky;
  top: 0;
  width: 100%;
  ${up('mobile')} {
    height: 64px;
    margin: 0 auto;
    max-width: 768px;
  }
`
