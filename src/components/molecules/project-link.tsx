import styled from '@emotion/styled'

import { LinkExternal } from '~/components/atoms/link-external'
import { primary } from '~/helpers/colors'

export const ProjectLink = styled(LinkExternal)`
  color: ${primary[800]};
  font-size: 18px;
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 1.75;
`
