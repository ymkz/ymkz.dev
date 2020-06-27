import { GetStaticProps, NextPage } from 'next'
import React from 'react'

import { Like } from '../components/module/like'
import { Motto } from '../components/module/motto'
import { Posts } from '../components/module/posts'
import { Profile } from '../components/module/profile'
import { Social } from '../components/module/social'
import { Study } from '../components/module/study'
import { Totem } from '../components/module/totem'

type Props = {
  contents: Content[]
}

const Index: NextPage<Props> = ({ contents }) => {
  return (
    <React.Fragment>
      <Motto />
      <Totem />
      <Profile />
      <Study />
      <Social />
      <Like />
      <Posts contents={contents} />
    </React.Fragment>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = 'https://ymkz.microcms.io/api/v1/post'
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const { contents }: Contents = await response.json()
  return { props: { contents }, unstable_revalidate: true }
}
