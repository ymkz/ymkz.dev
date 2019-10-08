import { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'

import { Cancelectures } from '~/components/modules/cancelectures'
import { FrontendBoilerplate } from '~/components/modules/frontend-boilerplate'
import { Json2String } from '~/components/modules/json2string'
import { Narosirase } from '~/components/modules/narosirase'
import { Portfolio } from '~/components/modules/portfolio'
import { Toodoo } from '~/components/modules/toodoo'

const Work: NextPage = () => {
  return (
    <React.Fragment>
      <NextHead>
        <title>Work | ymkz.co</title>
      </NextHead>
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
