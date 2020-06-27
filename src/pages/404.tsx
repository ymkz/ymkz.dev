import { NextPage } from 'next'
import React from 'react'

const NotFound: NextPage = () => {
  return (
    <React.Fragment>
      <div className="not-found__status-code">404</div>
      <style jsx>{`
        .not-found__status-code {
          font-weight: 800;
          font-size: 128px;
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </React.Fragment>
  )
}

export default NotFound
