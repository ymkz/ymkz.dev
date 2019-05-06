import styled from '@emotion/styled'
import breakpoints from 'constants/breakpoints'

const ProductTitle = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 3.6rem;
  font-weight: 900;
  line-height: 1;
  @media ${breakpoints.mobile} {
    font-size: 2.8rem;
  }
`

export default ProductTitle
