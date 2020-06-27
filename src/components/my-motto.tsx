import { styled } from 'goober'
import React from 'react'

export const MyMotto = () => {
  return (
    <Container>
      Catch
      <br />
      the
      <br />
      wind.
    </Container>
  )
}

const Container = styled('h1')`
  margin-bottom: 48px;
  font-weight: 800;
  font-size: 64px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.15;
`
