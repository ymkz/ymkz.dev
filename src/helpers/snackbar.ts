import { createSnackbar } from '@egoist/snackbar'

import { getTheme } from '~/helpers/theme'

export function snackbar(message: string, error?: boolean) {
  const lightTheme = {
    backgroundColor: '#2e3440',
    actionColor: '#4c566a',
    textColor: '#eceff4'
  }
  const darkTheme = {
    backgroundColor: '#eceff4',
    actionColor: '#4c566a',
    textColor: '#2e3440'
  }
  return createSnackbar(message, {
    position: 'right',
    timeout: error ? undefined : 4000,
    theme: getTheme() === 'light' ? lightTheme : darkTheme
  })
}
