import React from 'react'

interface Props {
  href: string
  src: string
  alt: string
}

function SocialLink({ href, src, alt }: Props) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <img src={src} alt={alt} width={44} height={44} />
    </a>
  )
}

export default SocialLink
