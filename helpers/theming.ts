export function switchTheme() {
  const prevTheme = localStorage.getItem('theme') || 'light'
  const nextTheme = prevTheme === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('theme', nextTheme)
  localStorage.setItem('theme', nextTheme)
}

export const injectscript = `
(() => {
  const initialTheme = localStorage.getItem('theme') || 'light'
  document.documentElement.setAttribute('theme', initialTheme)
  localStorage.setItem('theme', initialTheme)
})()
`
