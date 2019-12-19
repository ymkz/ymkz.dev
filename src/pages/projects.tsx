import { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'

import { Portfolio } from '~/components/organisms/portfolio'
import { PageContainer } from '~/components/templates/page-container'
import { PageTitle } from '~/components/templates/page-title'

const Projects: NextPage = () => {
  return (
    <React.Fragment>
      <NextHead>
        <title>Projects | ymkz.co</title>
      </NextHead>
      <PageContainer>
        <PageTitle>My Projects</PageTitle>
        <Portfolio />
      </PageContainer>
    </React.Fragment>
  )
}

export default Projects
