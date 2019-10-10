import styled from '@emotion/styled'
import React from 'react'

import { switchTheme } from '~/helpers/theming'

export const ThemeSwitch = ({ size = 16 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={switchTheme}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </Svg>
  )
}

const Svg = styled.svg`
  fill: var(--base-color);
`
