import Router from 'next/router'
import React from 'react'

type Props = {
  preview: boolean
  slug: string
}

export const Preview = ({ preview, slug }: Props) => {
  const handleClearCookie = async () => {
    await fetch('/api/clear')
    Router.replace(`/post/${slug}`)
  }

  if (preview) {
    return (
      <React.Fragment>
        <button
          className="fixed top-24 left-24 cursor-pointer color-white bg-color-black font-size-14 montserrat border-0"
          onClick={handleClearCookie}
        >
          PREVIEW MODE
        </button>
      </React.Fragment>
    )
  } else {
    return null
  }
}
