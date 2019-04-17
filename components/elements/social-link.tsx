import React from 'react'
import styled from '@emotion/styled'
import colors from 'constants/colors'

type Props = {
  href: string
  src: string
  alt: string
}

const Container = styled.a`
  height: 44px;
  width: 44px;
  &:focus {
    border-bottom: 1px solid ${colors.nord0};
    outline: 0;
  }
`

function SocialLink({ href, src, alt }: Props) {
  return (
    <Container href={href} rel="noopener noreferrer" target="_blank">
      <img src={src} alt={alt} width={44} height={44} />
    </Container>
  )
}

export default SocialLink
