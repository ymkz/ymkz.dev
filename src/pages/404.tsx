import { NextPage } from 'next'
import React from 'react'
import { styled } from 'goober'

const StatusCode = styled('div')`
  font-weight: 800;
  font-size: 128px;
  font-family: 'Montserrat', sans-serif;
`

const NotFound: NextPage = () => {
  return (
    <React.Fragment>
      <StatusCode>404</StatusCode>
    </React.Fragment>
  )
}

export default NotFound
