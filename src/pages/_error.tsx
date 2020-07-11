import React from 'react'
import { NextPage, NextPageContext } from 'next'

type Props = {
  statusCode: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <React.Fragment>
      <div className="error-page__status-code">{statusCode}</div>
    </React.Fragment>
  )
}

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404
  return { statusCode }
}

export default Error
