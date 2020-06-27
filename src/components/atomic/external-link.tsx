import { styled } from 'goober'
import React from 'react'

export const ExternalLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, ...attrs }) => {
  return (
    <Anchor target="_blank" rel="noopener noreferrer" {...attrs}>
      {children}
    </Anchor>
  )
}

export const Anchor = styled('a')`
  color: currentColor;
  text-decoration: none;
`
