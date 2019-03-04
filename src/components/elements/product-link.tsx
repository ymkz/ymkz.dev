import React from 'react'
import styled from '@emotion/styled'

interface Props {
  href: string
  children: React.ReactNode
}

const List = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`

const Anchor = styled.a`
  color: #2e3440;
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
`

function ProductLink({ href, children }: Props) {
  return (
    <List>
      <Anchor href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </Anchor>
    </List>
  )
}

export default ProductLink
