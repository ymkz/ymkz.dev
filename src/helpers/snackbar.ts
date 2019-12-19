import { createSnackbar, SnackOptions, ThemeRules } from '@snackbar/core'

import { danger, primary, success } from '~/helpers/colors'

type Options = SnackOptions & {
  error?: boolean
}

export function snackbar(message: string, _options: Options = {}) {
  const { error, ...options } = _options

  const successTheme: ThemeRules = {
    backgroundColor: success['500'],
    actionColor: success['900'],
    textColor: primary[0],
  }

  const errorTheme: ThemeRules = {
    backgroundColor: danger['500'],
    actionColor: danger['900'],
    textColor: primary[0],
  }

  return createSnackbar(message, {
    position: 'right',
    timeout: error ? undefined : 4000,
    theme: error ? errorTheme : successTheme,
    ...options,
  })
}
