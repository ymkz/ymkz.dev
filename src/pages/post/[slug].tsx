import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  if (router.isFallback) {
    return null
  }

  return (
    <React.Fragment>
      <DefaultSeo title={content.title} />
      <article className="post-page__container">
        <Preview preview={preview} />
        <h1 className="post-page__title">{content.title}</h1>
        <p className="post-page__date">
          {formatDate(content.publishedAt)}に投稿&nbsp;
          {content.updatedAt && <React.Fragment>（{formatDate(content.updatedAt)}に改稿）</React.Fragment>}
        </p>
        <main className="post-page__body">
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
  const paths = json.contents.map((content) => `/post/${content.id}`)
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params, preview, previewData }) => {
  if (preview) {
    const { slug, draftKey } = previewData
    const endpoint = `https://ymkz.microcms.io/api/v1/post/${slug}${draftKey ? `?draftKey=${draftKey}` : ''}`
    const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
    const response = await fetch(endpoint, options)
    const content: Content = await response.json()
    return { props: { content, preview } }
  } else {
    const endpoint = `https://ymkz.microcms.io/api/v1/post/${params?.slug}`
    const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
    const response = await fetch(endpoint, options)
    const content: Content = await response.json()
    return { props: { content }, unstable_revalidate: 1 }
  }
}
