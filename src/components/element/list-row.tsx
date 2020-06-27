import { styled } from 'goober'
import { Anchor } from '../atomic/external-link'

export const ListRow = styled('ul')`
  display: flex;
  flex-flow: row wrap;
  > :not(:last-child) {
    margin-right: 8px;
  }
`

export const ListRowItem = styled('li')`
  padding: 4px 8px;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid currentColor;
`
