import { NextPageContext } from 'next'

export type Theme = 'light' | 'dark'

function parseThemeFromCookie(cookie: string): Theme | undefined {
  const theme = cookie.replace(/(?:(?:^|.*;\s*)theme\s*=\s*([^;]*).*$)|^.*$/, '$1')
  if (theme === 'light' || theme === 'dark') {
    return theme
  } else {
    return undefined
  }
}

export function getTheme(ctx?: NextPageContext): Theme | undefined {
  if (ctx) {
    if (ctx.req) {
      if (ctx.req.headers.cookie) {
        const theme = parseThemeFromCookie(ctx.req.headers.cookie)
        return theme
      }
    }
  }

  if (process.browser) {
    const theme = parseThemeFromCookie(document.cookie)
    if (theme) {
      return theme
    } else {
      const preferredDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
      return preferredDarkColorScheme.matches ? 'dark' : 'light'
    }
  }

  return undefined
}

export function setTheme(theme: Theme) {
  document.cookie = `theme=${theme}`
  document.documentElement.dataset.theme = theme
}

export function switchTheme() {
  const currentTheme = getTheme()
  if (currentTheme) {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  } else {
    const preferredDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(preferredDarkColorScheme.matches ? 'light' : 'dark')
  }
}

export const initializeTheme = `
(() => {
  function __setTheme(theme) {
    document.documentElement.dataset.theme = theme
  }
  const __preferredDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
  __preferredDarkColorScheme.addListener(mql => __setTheme(mql.matches ? 'dark' : 'light'))
  if (!document.cookie.split(';').find(str => str.trim().startsWith('theme='))) {
    __setTheme(__preferredDarkColorScheme.matches ? 'dark' : 'light')
  }
})()
`
