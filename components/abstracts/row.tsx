import styled from '@emotion/styled'

type RowProps = {
  space?: number
}

const Row = styled.div<RowProps>`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  & > *:not(:last-child) {
    margin-right: ${({ space }) => (space ? space : 0)}px;
  }
`

export default Row
