import React from 'react'

import { switchTheme } from '~/helpers/theming'
import icon from '~/images/icons/icon.svg?inline'

export const NavIcon = () => {
  return <img src={icon} alt="" width={24} height={24} onClick={switchTheme} />
}
