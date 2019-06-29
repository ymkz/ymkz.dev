import React from 'react'

function Manifest() {
  return (
    <React.Fragment>
      <meta name="theme-color" content="#eceff4" />
      <link rel="manifest" href="/static/assets/manifest.json" />
      <link rel="icon" type="image/png" sizes="96x96" href="/static/assets/icon-96x96.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/static/assets/icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/static/assets/icon-512x512.png" />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="/static/assets/icon-180x180.png"
      />
    </React.Fragment>
  )
}

export default Manifest
