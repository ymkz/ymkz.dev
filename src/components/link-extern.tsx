import React from 'react'

export const LinkExtern: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, href, children }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" className={className} href={href}>
      {children}
    </a>
  )
}
