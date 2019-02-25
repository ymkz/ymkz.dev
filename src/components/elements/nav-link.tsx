import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

interface Props {
  href: string
  children: React.ReactNode
}

const Anchor = styled.a`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  text-decoration-line: none;
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`

function NavLink({ href, children }: Props) {
  return (
    <Link href={href}>
      <Anchor>{children}</Anchor>
    </Link>
  )
}

export default NavLink
