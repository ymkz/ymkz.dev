import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { Like } from '~/components/like'
import { Motto } from '~/components/motto'
import { Posts } from '~/components/posts'
import { Profile } from '~/components/profile'
import { Social } from '~/components/social'
import { Study } from '~/components/study'
import { Totem } from '~/components/totem'

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const endpoint = 'https://ymkz.microcms.io/api/v1/post'
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const { contents }: Contents = await response.json()
  return { props: { contents }, revalidate: true }
}
