import styled from '@emotion/styled'
import React from 'react'

type IconDarkProps = React.SVGProps<SVGSVGElement>

export const IconDark: React.FC<IconDarkProps> = props => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </SVG>
  )
}

const SVG = styled.svg`
  display: var(--visible-icon-dark);
  fill: var(--base-color);
`
