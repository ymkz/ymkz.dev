import styled from '@emotion/styled'
import React from 'react'

import { FlexRow } from '~/components/atoms/flex-row'
import { LinkInternal } from '~/components/atoms/link-internal'
import { up } from '~/helpers/breakpoints'
import { primary } from '~/helpers/colors'

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <FlexRow space={10}>
          <img src="/icon.svg" width={20} alt="" />
          <Name>ymkz</Name>
        </FlexRow>
      </Link>
      <FlexRow space={20} mobileSpace={10}>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
        <Link href="/projects">projects</Link>
      </FlexRow>
    </Container>
  )
}

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 16px;
  border-bottom: 1px solid ${primary['50']};
  backdrop-filter: blur(10px);
`

const Link = styled(LinkInternal)`
  color: ${primary[800]};
  font-weight: 300;
  font-family: 'Nunito Sans', sans-serif;
`

const Name = styled.span`
  display: none;
  ${up('mobile')} {
    display: block;
  }
`
