import React from 'react'

import { switchTheme } from '~/helpers/theming'

export const NavIcon = () => {
  return (
    <img
      src={require('~/templates/icon.svg?inline')}
      alt=""
      width={24}
      height={24}
      onClick={switchTheme}
    />
  )
}
