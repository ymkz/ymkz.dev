import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import Particles from 'react-particles-js'

import { bubbles } from '~/constants/particles'

export const PageParticles = () => {
  const { query } = useRouter()
  return <Container params={bubbles} disabled={query.env === 'test'} />
}

const Container = styled(Particles)<{ disabled?: boolean }>`
  position: fixed;
  display: ${props => (props.disabled ? 'none' : 'block')};
  width: 100vw;
  height: 100vh;
`
