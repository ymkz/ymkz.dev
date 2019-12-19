import styled from '@emotion/styled'
import React from 'react'

type LinkExternalProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkExternal: React.FC<LinkExternalProps> = ({ children, ...attrs }) => {
  return (
    <Anchor target="_blank" rel="noopener noreferrer" {...attrs}>
      {children}
    </Anchor>
  )
}

const Anchor = styled.a<LinkExternalProps>`
  text-decoration-line: none;
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
  &:focus {
    outline: 0;
    text-decoration-line: underline;
  }
`
