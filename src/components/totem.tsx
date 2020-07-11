import React from 'react'

import { Wind } from './icon'

export const Totem = () => {
  return (
    <section className="section">
      <div className="list-row">
        <span className="totem__left">[</span>
        <Wind />
        <span className="totem__right">]</span>
      </div>
    </section>
  )
}
