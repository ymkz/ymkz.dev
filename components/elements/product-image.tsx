import React from 'react'
import styled from '@emotion/styled'

type ResizedImage = {
  height: number
  width: number
  path: string
}

type Image = {
  height: number
  width: number
  images: ResizedImage[]
  placeholder: string
  src: string
  srcSet: string
}

type ProductImageProps = {
  image: Image
}

const Container = styled.div<ProductImageProps>`
  background-image: ${({ image }) => `url("${image.placeholder}")`};
  background-size: cover;
  height: ${({ image }) => image.height}px;
  width: ${({ image }) => image.width}px;
`

function ProductImage({ image }: ProductImageProps) {
  return (
    <Container image={image}>
      <img height={image.height} width={image.width} src={image.src} srcSet={image.srcSet} />
    </Container>
  )
}

export default ProductImage
