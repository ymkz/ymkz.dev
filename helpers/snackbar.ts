import { createSnackbar } from '@egoist/snackbar'
import { getTheme } from '~/helpers/theming'

export function snackbar(message: string, error?: boolean) {
  return createSnackbar(message, {
    timeout: error ? undefined : 4000,
    position: 'right',
    theme:
      getTheme() === 'light'
        ? {
            backgroundColor: '#2e3440',
            actionColor: '#4c566a',
            textColor: '#eceff4'
          }
        : {
            backgroundColor: '#eceff4',
            actionColor: '#4c566a',
            textColor: '#2e3440'
          }
  })
}
