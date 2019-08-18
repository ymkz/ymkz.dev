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
  right: 16px;
  bottom: 16px;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: red;
`
