import { css } from '@emotion/core'
import React from 'react'

export const ProductImage: React.FC<OptimizeImage> = props => {
  return (
    <div
      css={css`
        width: ${props.width + 2}px;
        height: ${props.height + 2}px;
        background-image: url(${props.placeholder});
        background-size: cover;
        border: 1px solid var(--image-border);
      `}
    >
      <img height={props.height} width={props.width} src={props.src} srcSet={props.srcSet} alt="" />
    </div>
  )
}
