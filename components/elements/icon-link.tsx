import React from 'react'
import { css } from '@emotion/core'

type IconLinkProps = {
  href: string
  src: string
}

export const IconLink: React.FC<IconLinkProps> = ({ href, src }) => {
  return (
    <a
      href={href}
      dangerouslySetInnerHTML={{ __html: src }}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        border-bottom: 1px solid transparent;
        height: 40px;
        width: 40px;
        &:focus {
          border-bottom: 1px solid var(--base-text);
          outline: 0;
        }
        & > svg {
          height: 40px;
          stroke: var(--base-text);
          width: 40px;
        }
      `}
    ></a>
  )
}
