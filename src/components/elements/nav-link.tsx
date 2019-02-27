import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

interface Props {
  href: string
  pathname: string | undefined
  children: React.ReactNode
}

interface AnchorProps {
  root: boolean
  active: boolean
}

const Anchor = styled.a`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: ${({ active, root }: AnchorProps) => (active || root ? '900' : '300')};
  pointer-events: ${({ active }: AnchorProps) => active && 'none'};
  text-decoration-line: none;
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`

function NavLink({ href, pathname, children }: Props) {
  return (
    <Link href={href}>
      <Anchor active={pathname === href} root={href === '/'}>
        {children}
      </Anchor>
    </Link>
  )
}

export default NavLink
