import React from 'react'
import Header from '../modules/header'

interface Props {
  children: React.ReactNode
}

function Page({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Page
