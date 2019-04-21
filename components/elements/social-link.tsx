import React from 'react'
import styled from '@emotion/styled'

type Props = {
  href: string
  svg: string
}

const Container = styled.a`
  width: 44px;
  &:focus {
    border-bottom: 1px solid var(--base-text);
    outline: 0;
  }
  & > svg {
    fill: var(--base-text);
  }
`

function SocialLink({ href, svg }: Props) {
  return (
    <Container
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export default SocialLink
