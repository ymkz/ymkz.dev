import { styled } from 'goober'
import Router from 'next/router'
import React from 'react'

type Props = {
  preview: boolean
  slug: string
}

export const PreviewMode = ({ preview, slug }: Props) => {
  const handleClearCookie = async () => {
    await fetch('/api/clear')
    Router.replace(`/post/${slug}`)
  }

  if (preview) {
    return (
      <React.Fragment>
        <Button onClick={handleClearCookie}>PREVIEW MODE</Button>
      </React.Fragment>
    )
  } else {
    return null
  }
}

const Button = styled<React.ButtonHTMLAttributes<HTMLButtonElement>>('button')`
  position: fixed;
  top: 24px;
  left: 24px;
  padding: 4px 8px;
  color: #eceff1;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  background-color: #263238;
  border: 0;
  outline: 0;
  cursor: pointer;
`
