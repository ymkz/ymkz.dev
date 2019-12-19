import styled from '@emotion/styled'
import NextLink, { LinkProps } from 'next/link'
import React from 'react'

type LinkInternalProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkInternal: React.FC<LinkInternalProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  ...attrs
}) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
    >
      <Anchor {...attrs}>{children}</Anchor>
    </NextLink>
  )
}

const Anchor = styled.a`
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
