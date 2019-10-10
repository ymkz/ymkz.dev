export type Theme = 'light' | 'dark'

export function getTheme(): Theme {
  return (document.documentElement.getAttribute('theme') as Theme) || 'light'
}

export function setTheme(theme: Theme) {
  document.documentElement.setAttribute('theme', theme)
  localStorage.setItem('theme', theme)
}

export function switchTheme() {
  const prevTheme: Theme = (localStorage.getItem('theme') as Theme) || 'light'
  const nextTheme: Theme = prevTheme === 'light' ? 'dark' : 'light'
  setTheme(nextTheme)
}

export const injectscript = `
(() => {
  function __setTheme(theme) {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('theme', theme)
  }
  const __preferredTheme = localStorage.getItem('theme')
  const __darkColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
  __darkColorScheme.addListener(mql => __setTheme(mql.matches ? 'dark' : 'light'))
  __setTheme(__preferredTheme || (__darkColorScheme.matches ? 'dark' : 'light'))
})()
`
