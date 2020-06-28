import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Preview } from '../../components/preview'
import { formatDate } from '../../utils/date'

type Props = {
  content: Content
  preview: boolean
}

const Post: NextPage<Props> = ({ content, preview }) => {
  return (
    <React.Fragment>
      <DefaultSeo title={content.title} />
      <article className="max-width-1024 font-size-18 line-height-1p5">
        <Preview preview={preview} slug={content.slug} />
        <h1 className="font-weight-800 font-size-48 montserrat line-height-1">{content.title}</h1>
        <p className="font-size-14 font-weight-400 montserrat margin-top-16">
          {formatDate(content.publishedAt)}に投稿&nbsp;
          {content.updatedAt && <React.Fragment>（{formatDate(content.updatedAt)}に改稿）</React.Fragment>}
        </p>
        <main className="margin-top-16">
          <ReactMarkdown source={content.body} />
        </main>
      </article>
    </React.Fragment>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const endpoint = 'https://ymkz.microcms.io/api/v1/post'
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const json: Contents = await response.json()
  const paths = json.contents.map((content) => `/post/${content.slug}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params, preview, previewData }) => {
  if (preview) {
    const { id, draftKey } = previewData
    const endpoint = `https://ymkz.microcms.io/api/v1/post/${id}${!draftKey ? `?draftKey=${draftKey}` : ''}`
    const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
    const response = await fetch(endpoint, options)
    const content: Content = await response.json()
    return { props: { preview, content } }
  } else {
    const endpoint = 'https://ymkz.microcms.io/api/v1/post'
    const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
    const response = await fetch(endpoint, options)
    const json: Contents = await response.json()
    const content = json.contents.find((content) => content.slug === params?.slug)
    return { props: { content }, unstable_revalidate: 1 }
  }
}
