import React from 'react'
import colors from '../../constants/colors'

function Manifest() {
  return (
    <React.Fragment>
      <meta name="theme-color" content={colors.nord6} />
      <link rel="icon" type="image/png" sizes="144x144" href="/static/assets/icon_144x144.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/static/assets/icon_192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/static/assets/icon_512x512.png" />
      <link rel="manifest" href="/static/manifest.json" />
    </React.Fragment>
  )
}

export default Manifest
