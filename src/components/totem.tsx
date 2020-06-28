import React from 'react'

import { Wind } from './icon'

export const Totem = () => {
  return (
    <section className="flex-center-vertical margin-bottom-48 font-weight-400 montserrat">
      <span className="margin-right-4">[&nbsp;</span>
      <Wind />
      <span className="margin-left-4">&nbsp;]</span>
    </section>
  )
}
