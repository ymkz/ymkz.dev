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
  function setTheme(theme) {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('theme', theme)
  }
  const preferredTheme = localStorage.getItem('theme')
  const darkColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
  darkColorScheme.addListener(mql => {
    setTheme(mql.matches ? 'dark' : 'light')
  })
  setTheme(preferredTheme || (darkColorScheme.matches ? 'dark' : 'light'))
})()
`
