import React from 'react'
import styled from '@emotion/styled'
import { FlexRow } from '~/components/elements/flex-row'

type IconLinkProps = {
  src: string
  href: string
  name: string
}

export const IconLink = ({ src, href, name }: IconLinkProps) => {
  return (
    <Li>
      <FlexRow space={12}>
        <Icon dangerouslySetInnerHTML={{ __html: src }} />
        <Username href={href} target="_blank" rel="noopener noreferrer">
          {name}
        </Username>
      </FlexRow>
    </Li>
  )
}

const Li = styled.li`
  list-style: none;
`

const Icon = styled.div`
  width: 24px;
  height: 24px;
  path {
    fill: currentColor;
  }
`

const Username = styled.a`
  font-size: 18px;
  color: var(--base-text);
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
`
