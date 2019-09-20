import { NextPage } from 'next'
import React from 'react'

import { Head } from '~/components/abstracts/head'
import { Cancelectures } from '~/components/modules/cancelectures'
import { FrontendBoilerplate } from '~/components/modules/frontend-boilerplate'
import { Json2String } from '~/components/modules/json2string'
import { Narosirase } from '~/components/modules/narosirase'
import { Portfolio } from '~/components/modules/portfolio'
import { Toodoo } from '~/components/modules/toodoo'

const Work: NextPage = () => {
  return (
    <React.Fragment>
      <Head title="Work | ymkz.co" />
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
