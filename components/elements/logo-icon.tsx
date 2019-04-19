import React from 'react'

type Props = React.SVGAttributes<HTMLOrSVGElement> & {
  theme: 'light' | 'dark'
}

function LogoIcon({ theme, ...props }: Props) {
  return (
    <svg viewBox="0 0 1024 1024" width="32px" height="32px" {...props}>
      <defs>
        <path
          d="M809.52 537.51l197.15 309.55H218.05l197.13-309.55 197.17-309.54 197.17 309.54z"
          id="prefix__a"
        />
        <path
          d="M550.28 570.92l175.87 276.14H22.62l175.87-276.14 175.89-276.15 175.9 276.15z"
          id="prefix__b"
        />
      </defs>
      {/* <use xlinkHref="#prefix__a" fill="#4c566a" /> */}
      {/* <use xlinkHref="#prefix__b" fill="#2e3440" /> */}
      <use xlinkHref="#prefix__a" fill={theme === 'light' ? '#4c566a' : '#d8dee9'} />
      <use xlinkHref="#prefix__b" fill={theme === 'light' ? '#2e3440' : '#eceff4'} />
    </svg>
  )
}

export default LogoIcon
