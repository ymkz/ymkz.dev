import { css } from '@emotion/react'
import { font } from '../constants/font'

export const Motto = () => {
  return (
    <header css={motto}>
      Catch
      <br />
      the
      <br />
      wind.
    </header>
  )
}

const motto = css`
  font-size: 70px;
  font-weight: 700;
  font-family: ${font.mono};
`
