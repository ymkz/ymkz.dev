import React from 'react'
import styled from '@emotion/styled'

type ProductLinkProps = {
  href: string
  children: React.ReactNode
}

const List = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const Anchor = styled.a`
  color: var(--base-text);
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
  &:focus {
    outline: 0;
    text-decoration-line: underline;
  }
`

export function ProductLink({ href, children }: ProductLinkProps) {
  return (
    <List>
      <Anchor href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </Anchor>
    </List>
  )
}
