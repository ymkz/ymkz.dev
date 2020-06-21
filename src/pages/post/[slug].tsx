import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {
  content: Content
}

const Post: NextPage<Props> = ({ content }) => {
  return (
    <article>
      <h1 className="title">{content.title}</h1>
      <div className="date">
        {content.publishedAt}に投稿
        {content.updatedAt && <React.Fragment>（{content.updatedAt}に改稿）</React.Fragment>}
      </div>
      <main>
        <ReactMarkdown source={content.body} />
      </main>
    </article>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const endpoint: RequestInfo = 'https://ymkz.microcms.io/api/v1/post'
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const json: Contents = await response.json()
  const paths = json.contents.map((content) => `/post/${content.slug}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const endpoint: RequestInfo = 'https://ymkz.microcms.io/api/v1/post'
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const json: Contents = await response.json()
  const content = json.contents.find((content) => content.slug === params?.slug)
  return { props: { content }, unstable_revalidate: 1 }
}
