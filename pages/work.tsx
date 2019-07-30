import React from 'react'
import Head from 'next/head'
import { Portfolio } from '~/components/modules/portfolio'
import { Narosirase } from '~/components/modules/narosirase'
import { Cancelectures } from '~/components/modules/cancelectures'
import { FrontendBoilerplate } from '~/components/modules/frontend-boilerplate'
import { Toodoo } from '~/components/modules/toodoo'
import { Json2String } from '~/components/modules/json2string'

const Work = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Work | ymkz</title>
      </Head>
      <Portfolio />
      <Narosirase />
      <Cancelectures />
      <FrontendBoilerplate />
      <Toodoo />
      <Json2String />
    </React.Fragment>
  )
}

export default Work
