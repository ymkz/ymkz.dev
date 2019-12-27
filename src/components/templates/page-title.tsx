import styled from '@emotion/styled'

import { up } from '~/helpers/breakpoints'
import { primary } from '~/helpers/colors'

export const PageTitle = styled.h1`
  margin: 0 0 32px;
  color: ${primary[800]};
  font-weight: 900;
  font-size: 48px;
  font-family: 'Nunito Sans', sans-serif;
  line-height: 1;
  ${up('mobile')} {
    margin: 0 0 48px;
    font-size: 80px;
  }
`
