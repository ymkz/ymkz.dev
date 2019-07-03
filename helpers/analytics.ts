import ReactGA from 'react-ga'
import { createSnackbar } from '@egoist/snackbar'

export const analytics = {
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
    if (process.env.GOOGLE_ANALYTICS_ID) {
      ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID)
    } else {
      // eslint-disable-next-line no-console
      console.error('An Error was happened at Google Analytics Initilize.')
    }
  },
  pageview: (pathname: string) => {
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }
}
