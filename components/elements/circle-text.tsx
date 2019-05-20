import React from 'react'
import styled from '@emotion/styled'

const SVG = styled.svg`
  display: block;
  overflow: visible;
  padding: 1rem;
  position: fixed;
  bottom: 16px;
  right: 16px;
`

function CircleText() {
  return (
    <SVG height="96" width="96" viewBox="-90, -90, 180, 180">
      <defs>
        <path id="circle-text" d="M-90, 0 A90, 90, 0 1 1 90, 0 A90, 90, 0 1 1 -90, 0Z" />
        <circle r="90" />
      </defs>
      <text fontSize={32}>
        <textPath xlinkHref="#circle-text">PLAY GAMES, SERIOUSLY WITH FUN.</textPath>
      </text>
    </SVG>
  )
}

export default CircleText
