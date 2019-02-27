import React from 'react'
import { withRouter, WithRouterProps } from 'next/router'
import styled from '@emotion/styled'
import Row from '../abstracts/row'
import NavLink from '../elements/nav-link'
import colors from '../../colors'

const Container = styled.header`
  align-items: center;
  background-color: ${colors.nord6};
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 0 48px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

function Header({ router }: WithRouterProps) {
  return (
    <Container>
      <Row>
        <NavLink href="/" pathname={router && router.pathname}>
          ymkz
        </NavLink>
      </Row>
      <Row space={16}>
        <NavLink href="/about" pathname={router && router.pathname}>
          about
        </NavLink>
        <NavLink href="/work" pathname={router && router.pathname}>
          work
        </NavLink>
      </Row>
    </Container>
  )
}

export default withRouter(Header)
