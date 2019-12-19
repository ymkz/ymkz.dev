import styled from '@emotion/styled'

import { up } from '~/helpers/breakpoints'
import { primary } from '~/helpers/colors'

export const PageTitle = styled.h1`
  color: ${primary[800]};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
  margin: 0 0 32px;
  ${up('mobile')} {
    font-size: 80px;
    margin: 0 0 48px;
  }
`
