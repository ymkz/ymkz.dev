import { css } from '@emotion/react'
import src from '../images/avatar.jpg'

export const Avatar = () => {
  return <img src={src} css={avatar} />
}

const avatar = css`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`
