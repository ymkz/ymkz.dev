import NextHead from 'next/head'
import React from 'react'

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
