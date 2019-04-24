import React from 'react'
import styled from '@emotion/styled'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  svg: string
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

function SocialLink({ svg, ...props }: Props) {
  return (
    <Container
      target="_blank"
      rel="noopener noreferrer"
      dangerouslySetInnerHTML={{ __html: svg }}
      {...props}
    />
  )
}

export default SocialLink
