import React from 'react'

import { GitHub, Twitter, Facebook, LinkedIn } from './icon'
import { Badge } from './badge'

export const Social = () => {
  return (
    <section className="margin-bottom-48">
      <p className="margin-bottom-16 font-size-18 montserrat line-height-1p5">
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </p>
      <ul className="flex gap-8">
        <Badge name="GitHub" href="https://github.com/ymkz" icon={<GitHub />} />
        <Badge name="Twitter" href="https://twitter.com/ymkzly" icon={<Twitter />} />
        <Badge name="Facebook" href="https://facebook.com/ymkzly" icon={<Facebook />} />
        <Badge name="LinkedIn" href="https://linkedin.com/in/ymkz" icon={<LinkedIn />} />
      </ul>
    </section>
  )
}
