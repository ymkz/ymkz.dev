import { NextPage } from 'next'
import React from 'react'

const NotFound: NextPage = () => {
  return (
    <React.Fragment>
      <div className="not-found__title">404</div>
      <div className="not-found__subtitle">PAGE NOT FOUND</div>
    </React.Fragment>
  )
}

export default NotFound
