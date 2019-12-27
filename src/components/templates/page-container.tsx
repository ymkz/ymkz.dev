import styled from '@emotion/styled'
import React from 'react'

import { up } from '~/helpers/breakpoints'

export const PageContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.main`
  max-width: 672px;
  margin: 0 auto;
  padding: 32px 16px;
  ${up('mobile')} {
    padding: 48px 16px;
  }
`
