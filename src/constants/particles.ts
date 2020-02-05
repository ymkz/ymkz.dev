/* eslint-disable @typescript-eslint/camelcase */

import { IParticlesParams } from 'react-particles-js'

export const bubbles: IParticlesParams = {
  particles: {
    color: {
      value: '#ffffff',
    },
    number: {
      value: 36,
      density: {
        enable: false,
      },
    },
    line_linked: {
      enable: false,
    },
    size: {
      value: 4,
      random: true,
      anim: {
        speed: 4,
      },
    },
    move: {
      random: true,
      speed: 2,
      direction: 'top',
      out_mode: 'out',
    },
  },
}
