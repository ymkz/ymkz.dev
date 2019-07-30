import React from 'react'
import { css } from '@emotion/core'
import { up } from '~/helpers/breakpoints'
import { FlexRow } from '~/components/elements/flex-row'
import { NavIcon } from '~/components/elements/nav-icon'
import { NavLink } from '~/components/elements/nav-link'

export const AppBar = () => {
  return (
    <header
      css={css`
        align-items: center;
        background-color: var(--base-background);
        display: flex;
        height: 52px;
        justify-content: space-between;
        padding: 0 16px;
        position: sticky;
        left: 0;
        top: 0;
        width: 100%;
        ${up('mobile')} {
          height: 64px;
          margin: 0 auto;
          max-width: 768px;
        }
      `}
    >
      <FlexRow space={8}>
        <NavIcon />
        <NavLink href="/">ymkz</NavLink>
      </FlexRow>
      <FlexRow space={16}>
        <NavLink href="/about">about</NavLink>
        <NavLink href="/work">work</NavLink>
      </FlexRow>
    </header>
  )
}
