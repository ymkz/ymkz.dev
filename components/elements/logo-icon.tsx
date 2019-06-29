import React from 'react'

export function LogoIcon(props: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg viewBox="0 0 1024 1024" width="32px" height="32px" {...props}>
      <defs>
        <path
          d="M809.52 537.51l197.15 309.55H218.05l197.13-309.55 197.17-309.54 197.17 309.54z"
          id="logo-front"
        />
        <path
          d="M550.28 570.92l175.87 276.14H22.62l175.87-276.14 175.89-276.15 175.9 276.15z"
          id="logo-back"
        />
      </defs>
      <use xlinkHref="#logo-front" fill="var(--logo-fill-front)" />
      <use xlinkHref="#logo-back" fill="var(--logo-fill-back)" />
    </svg>
  )
}
