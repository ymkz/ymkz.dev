import { css } from '@emotion/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type NavLinkProps = {
  href: string
}

export const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  const { pathname } = useRouter()
  const active = href === pathname
  const root = href === '/'

  return (
    <Link href={href}>
      <a
        data-to={href}
        css={css`
          font-family: 'Nunito Sans', sans-serif;
          font-weight: ${active || root ? 900 : 300};
          pointer-events: ${active ? 'none' : 'auto'};
          text-decoration-line: none;
          &:hover {
            cursor: pointer;
            text-decoration-line: underline;
          }
          &:focus {
            outline: 0;
            text-decoration-line: underline;
          }
        `}
      >
        {children}
      </a>
    </Link>
  )
}
