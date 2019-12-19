/* eslint-disable security/detect-object-injection */

/*
  reference: https://www.webdlab.com/labs/responsive-web-design-4/
*/

type Breakpoints = {
  mobile: string
  tablet: string
}

const breakpoints: Breakpoints = {
  mobile: '415px',
  tablet: '960px',
}

function mediaMinWidth(minWidth: string): string {
  return `@media (min-width: ${minWidth})`
}

function mediaMaxWidth(maxWidth: string): string {
  return `@media (max-width: ${maxWidth})`
}

export function up(query: keyof Breakpoints) {
  return mediaMinWidth(breakpoints[query])
}

export function down(query: keyof Breakpoints) {
  return mediaMaxWidth(breakpoints[query])
}
