import styled from '@emotion/styled'

type BaseRowProps = {
  space?: number
}

export const BaseRow = styled.div<BaseRowProps>`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  & > *:not(:last-child) {
    margin-right: ${({ space }) => (space ? space : 0)}px;
  }
`
