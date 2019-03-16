import React from 'react'
import styled from '@emotion/styled'
import colors from '../../constants/colors'

type Props = {
  href: string
  children: React.ReactNode
}

const List = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

const Anchor = styled.a`
  color: ${colors.nord0};
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
  &:focus {
    outline: 0;
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
