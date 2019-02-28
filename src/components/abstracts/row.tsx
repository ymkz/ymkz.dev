import styled from '@emotion/styled'

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  & > *:not(:last-of-type) {
    margin-right: ${({ space }: { space?: number }) => (space ? space : 0)}px;
  }
`

export default Row
