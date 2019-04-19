import React from 'react'
import styled from '@emotion/styled'

type Props = React.ImgHTMLAttributes<HTMLImageElement>

const ImageContainer = styled.div`
  height: 256px;
`

const Image = styled.img`
  border: 1px solid var(--image-border);
  height: 256px;
`

function ProductImage(props: Props) {
  return (
    <ImageContainer>
      <Image alt="" {...props} />
    </ImageContainer>
  )
}

export default ProductImage
