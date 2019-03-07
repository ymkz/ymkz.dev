import styled from '@emotion/styled'
import query from '../../constants/media-query'

const ProductTitle = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 3.6rem;
  font-weight: 900;
  @media ${query.mobile} {
    font-size: 2.8rem;
  }
`

export default ProductTitle
