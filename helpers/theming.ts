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
  const initialTheme = localStorage.getItem('theme') || 'light'
  document.documentElement.setAttribute('theme', initialTheme)
  localStorage.setItem('theme', initialTheme)
})()
`
