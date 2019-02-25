import React from 'react'
import NavLink from '../elements/nav-link'

function Header() {
  return (
    <header>
      <NavLink href="/">home</NavLink>
      <NavLink href="/about">about</NavLink>
    </header>
  )
}

export default Header
