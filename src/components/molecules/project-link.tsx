import styled from '@emotion/styled'

import { LinkExternal } from '~/components/atoms/link-external'
import { primary } from '~/helpers/colors'

export const ProjectLink = styled(LinkExternal)`
  color: ${primary[800]};
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18px;
  line-height: 1.75;
`
