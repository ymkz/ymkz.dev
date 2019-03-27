import React from 'react'
import colors from '../../constants/colors'

function Manifest() {
  return (
    <React.Fragment>
      <meta name="theme-color" content={colors.nord6} />
      <link rel="icon" type="image/png" sizes="196x196" href="/static/assets/icon-196x196.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/static/assets/icon-512x512.png" />
      <link rel="manifest" href="/static/manifest.json" />
    </React.Fragment>
  )
}

export default Manifest
