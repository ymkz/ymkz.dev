import React from 'react'
import NextHead from 'next/head'

type HeadProps = {
  title: string
}

export const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  )
}
