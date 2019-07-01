import React from 'react'
// @ts-ignore
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { BaseRow } from '~/components/abstracts/base-row'
import { LogoIcon } from '~/components/elements/logo-icon'
import { NavLink } from '~/components/elements/nav-link'
import { breakpoints, constraints } from '~/helpers/constants'
import { switchTheme } from '~/helpers/theming'

export function Header() {
  const { pathname } = useRouter()

  return (
    <Container>
      <BaseRow space={8}>
        <LogoIcon onClick={switchTheme} />
        <NavLink href="/" pathname={pathname}>
          ymkz
        </NavLink>
      </BaseRow>
      <BaseRow space={16}>
        <NavLink href="/about" pathname={pathname}>
          about
        </NavLink>
        <NavLink href="/work" pathname={pathname}>
          work
        </NavLink>
      </BaseRow>
    </Container>
  )
}

const Container = styled.header`
  align-items: center;
  background-color: var(--base-background);
  display: flex;
  height: ${constraints.headerHeight.desktop};
  justify-content: space-between;
  padding: 0 48px;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  @media ${breakpoints.mobile} {
    height: ${constraints.headerHeight.mobile};
    padding: 0 16px;
  }
`
