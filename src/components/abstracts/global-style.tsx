import { Global } from '@emotion/core'
import React from 'react'

import { global } from '~/helpers/styles'

export const GlobalStyle = () => {
  return <Global styles={[global]} />
}
