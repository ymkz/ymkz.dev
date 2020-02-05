import styled from '@emotion/styled'
import React from 'react'
import Particles from 'react-particles-js'

import { bubbles } from '~/constants/particles'

export const PageParticles = () => {
  return <Container params={bubbles} />
}

const Container = styled(Particles)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
`
