import React from 'react'
import styled from '@emotion/styled'

const Snackbar = () => {
  return (
    <Container>
      <div>message</div>
      <div>action</div>
    </Container>
  )
}

export function snackbar() {
  return <Snackbar />
}

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: red;
  z-index: 100;
`
