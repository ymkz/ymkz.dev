import React from 'react'
import { useIntersection } from 'use-intersection'
import styled from '@emotion/styled'
import colors from '../../constants/colors'

const ImageContainer = styled.div`
  height: 256px;
`

const ImagePlaceholder = styled.div`
  background-color: ${colors.nord5};
  border: 1px solid ${colors.nord4};
  height: 256px;
  width: 145px;
`

const Image = styled.img`
  border: 1px solid ${colors.nord4};
  height: 256px;
`

const ProductImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = props => {
  const target = React.useRef<HTMLDivElement>(null)
  const intersected = useIntersection(target, { once: true })

  return (
    <ImageContainer ref={target}>
      {intersected ? <Image alt="" {...props} /> : <ImagePlaceholder />}
    </ImageContainer>
  )
}

export default ProductImage
