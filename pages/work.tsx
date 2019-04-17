import React from 'react'
import Head from 'next/head'
import Portfolio from 'components/modules/portfolio'
import Narosirase from 'components/modules/narosirase'
import Cancelectures from 'components/modules/cancelectures'

function Work() {
  return (
    <React.Fragment>
      <Head>
        <title>Work - ymkz</title>
      </Head>
      <Portfolio />
      <Narosirase />
      <Cancelectures />
    </React.Fragment>
  )
}

export default Work
