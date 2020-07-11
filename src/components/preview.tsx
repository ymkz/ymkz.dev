import Router from 'next/router'
import React from 'react'

type Props = {
  preview: boolean
}

export const Preview = ({ preview }: Props) => {
  const handleClearCookie = async () => {
    await fetch('/api/clear')
    Router.replace(`/`)
  }

  if (preview) {
    return (
      <React.Fragment>
        <button className="post-page__preview" onClick={handleClearCookie}>
          PREVIEW MODE
        </button>
      </React.Fragment>
    )
  } else {
    return null
  }
}
