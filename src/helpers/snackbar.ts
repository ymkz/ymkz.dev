import { createSnackbar, SnackOptions, ThemeRules } from '@snackbar/core'

type Options = SnackOptions & {
  error?: boolean
}

export function snackbar(message: string, _options: Options = {}) {
  const { error, ...options } = _options

  const successTheme: ThemeRules = {
    backgroundColor: '#5e81ac',
    actionColor: '#d8dee9',
    textColor: '#eceff4'
  }

  const errorTheme: ThemeRules = {
    backgroundColor: '#bf616a',
    actionColor: '#d8dee9',
    textColor: '#eceff4'
  }

  return createSnackbar(message, {
    position: 'right',
    timeout: error ? undefined : 4000,
    theme: error ? errorTheme : successTheme,
    ...options
  })
}
