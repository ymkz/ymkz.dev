import React from 'react'

type Props = {
  name: string
  href: string
  icon: JSX.Element
}

export const Badge = ({ name, href, icon }: Props) => {
  return (
    <li className="margin-botom-8 border border-left-0">
      <a className="color-black link flex-center-vertical" target="_blank" rel="noopener noreferrer" href={href}>
        <div className="color-white bg-color-black size-24 flex-center">{icon}</div>
        <div className="padding-horizontal-8 montserrat">{name}</div>
      </a>
    </li>
  )
}
