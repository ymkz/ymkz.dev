import { css } from '@emotion/react'
import { font } from '../constants/font'

export const Text = () => {
  return (
    <div css={text}>
      I'm Kazuya Yamashita. a.k.a ymkz.
      <br />
      a web engineer, good at web frontend.
      <br />
      sleep, walk and write code.
    </div>
  )
}

const text = css`
  font-size: 20px;
  line-height: 1.75;
  font-weight: 500;
  font-family: ${font.mono};
`
