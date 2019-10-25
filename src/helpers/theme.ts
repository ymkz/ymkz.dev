import { NextPageContext } from 'next'

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
        return parseThemeFromCookie(ctx.req.headers.cookie)
      }
    }
  }

  if (process.browser) {
    return parseThemeFromCookie(document.cookie)
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
  if (!document.cookie.split(';').filter(str => str.trim().startsWith('theme=')).length) {
    __setTheme(__preferredDarkColorScheme.matches ? 'dark' : 'light')
  }
})()
`
