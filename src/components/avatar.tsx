import { css } from '@emotion/react'
import src from '../images/avatar.webp'

export const Avatar = () => {
  return <img src={src} alt="" css={avatar} />
}

const avatar = css`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`
