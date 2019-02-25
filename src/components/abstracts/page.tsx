import React from 'react'
import Header from '../modules/header'

interface Props {
  children: React.ReactNode
}

function Page({ children }: Props) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  )
}

export default Page
