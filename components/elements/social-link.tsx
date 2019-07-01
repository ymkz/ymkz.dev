import React from 'react'
import styled from '@emotion/styled'

type SocialLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  svg: string
}

export function SocialLink({ svg, ...props }: SocialLinkProps) {
  return (
    <Container
      target="_blank"
      rel="noopener noreferrer"
      dangerouslySetInnerHTML={{ __html: svg }}
      {...props}
    />
  )
}

const Container = styled.a`
  width: 44px;
  border-bottom: 1px solid transparent;
  &:focus {
    border-bottom: 1px solid var(--base-text);
    outline: 0;
  }
  & > svg {
    fill: var(--base-text);
  }
`
