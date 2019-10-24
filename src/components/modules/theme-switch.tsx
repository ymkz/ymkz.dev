import React from 'react'

import { IconDark } from '~/components/elements/icon-dark'
import { IconLight } from '~/components/elements/icon-light'
import { switchTheme } from '~/helpers/theming'

export const ThemeSwitch = () => {
  return (
    <React.Fragment>
      <IconDark onClick={switchTheme} />
      <IconLight onClick={switchTheme} />
    </React.Fragment>
  )
}
