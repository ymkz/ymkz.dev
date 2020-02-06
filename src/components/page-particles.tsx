import styled from '@emotion/styled'
import React from 'react'
import Particles from 'react-particles-js'

import { bubbles } from '~/constants/particles'

export const PageParticles = () => {
  return <Container params={bubbles} disabled={process.env.NODE_ENV === 'test'} />
}

const Container = styled(Particles)<{ disabled?: boolean }>`
  position: fixed;
  display: ${props => (props.disabled ? 'none' : 'block')};
  width: 100vw;
  height: 100vh;
`
