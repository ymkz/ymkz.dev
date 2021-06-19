import { css } from '@emotion/react'
import { font } from '../constants/font'

export const Motto = () => {
  return (
    <div css={motto}>
      Catch
      <br />
      the
      <br />
      wind.
    </div>
  )
}

const motto = css`
  font-size: 70px;
  font-weight: 700;
  font-family: ${font.mono};
`
