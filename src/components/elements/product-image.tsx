import { css } from '@emotion/core'
import React from 'react'

type OptimizeImage = {
  height: number
  width: number
  images: {
    height: number
    width: number
    path: string
  }[]
  placeholder: string
  src: string
  srcSet: string
}

export const ProductImage: React.FC<OptimizeImage> = props => {
  return (
    <div
      css={css`
        background-image: url(${props.placeholder});
        background-size: cover;
        border: 1px solid var(--image-border);
        height: ${props.height + 2}px;
        width: ${props.width + 2}px;
      `}
    >
      <img height={props.height} width={props.width} src={props.src} srcSet={props.srcSet} alt="" />
    </div>
  )
}
