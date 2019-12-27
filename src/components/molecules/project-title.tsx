import styled from '@emotion/styled'

import { up } from '~/helpers/breakpoints'
import { primary } from '~/helpers/colors'

export const ProjectTitle = styled.h2`
  color: ${primary[800]};
  font-weight: 900;
  font-size: 40px;
  font-family: 'Nunito Sans', sans-serif;
  line-height: 1;
  ${up('mobile')} {
    font-size: 48px;
  }
`
