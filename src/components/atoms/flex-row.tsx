import styled from '@emotion/styled'

import { up } from '~/helpers/breakpoints'

type FlexRowProps = {
  space?: number
  mobileSpace?: number
}

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  flex-flow: row;
  align-items: center;
  > *:not(:last-child) {
    margin-right: ${({ space, mobileSpace }) => mobileSpace ?? space ?? 0}px;
    ${up('mobile')} {
      margin-right: ${({ space }) => space ?? 0}px;
    }
  }
`
