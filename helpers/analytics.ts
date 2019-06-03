import ReactGA from 'react-ga'
import { createSnackbar } from '@egoist/snackbar'

export default {
  requestAuthorization: () => {
    const isGoogleAnalyticsEnabled = localStorage.getItem('isGoogleAnalyticsEnabled')
    if (!isGoogleAnalyticsEnabled || isGoogleAnalyticsEnabled === 'no') {
      createSnackbar('Activate Google Analytics.', {
        position: 'right',
        actions: [
          {
            text: 'CONFIRM',
            callback: (_, snackbar) => {
              snackbar.destroy()
              localStorage.setItem('isGoogleAnalyticsEnabled', 'yes')
            }
          }
        ]
      })
    }
  },
  initialize: () => {
    ReactGA.initialize('UA-140852595-1', { debug: process.env.NODE_ENV !== 'production' })
  },
  pageview: (pathname: string) => {
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }
}
