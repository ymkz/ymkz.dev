import { css } from '@emotion/core'
import React from 'react'

type SectionContainerProps = {
  id?: string
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return (
    <section
      css={css`
        margin-bottom: 4rem;
      `}
    >
      {children}
    </section>
  )
}
