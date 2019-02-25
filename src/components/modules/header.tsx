import React from 'react'
import styled from '@emotion/styled'
import Row from '../abstracts/row'
import NavLink from '../elements/nav-link'

const Container = styled.header`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 0 48px;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

function Header() {
  return (
    <Container>
      <Row>
        <NavLink href="/">ymkz</NavLink>
      </Row>
      <Row space={16}>
        <NavLink href="/about">about</NavLink>
        <NavLink href="/work">work</NavLink>
      </Row>
    </Container>
  )
}

export default Header
