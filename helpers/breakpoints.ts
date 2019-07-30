/* eslint-disable security/detect-object-injection */

type Breakpoints = {
  mobile: string
  tablet: string
  desktop: string
}

const breakpoints: Breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1200px'
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
