import styled from '@emotion/styled'
import React from 'react'

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, ...attrs }) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" {...attrs}>
      {children}
    </Link>
  )
}

export const Link = styled.a`
  color: var(--base-text);
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
`
