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
  background-image: ${({ image }) => `url(${image.placeholder})`};
  background-size: cover;
  border: 1px solid var(--image-border);
  height: ${({ image }) => image.height + 2}px;
  width: ${({ image }) => image.width + 2}px;
`

export function ProductImage({ image }: ProductImageProps) {
  return (
    <Container image={image}>
      <img alt="" height={image.height} width={image.width} src={image.src} srcSet={image.srcSet} />
    </Container>
  )
}
