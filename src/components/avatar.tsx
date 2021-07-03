import { css } from 'solid-styled-components'
import src from '../images/avatar.webp'

export const Avatar = () => {
  return <img src={src} alt="" class={avatar} />
}

const avatar = css`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`
