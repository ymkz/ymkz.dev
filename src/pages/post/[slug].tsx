import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import { formatDate } from '../../utils/date'

type Props = {
  content: Content
  preview: boolean
}

const Post: NextPage<Props> = ({ content, preview }) => {
  const handleClear = async () => {
    await fetch('/api/clear')
  }

  return (
    <article>
      {preview && (
        <React.Fragment>
          <span>Preview Mode Enabled</span>
          <button onClick={handleClear}>Clear preview cookie</button>
        </React.Fragment>
      )}
      <h1 className="title">{content.title}</h1>
      <div className="date">
        {formatDate(content.publishedAt)}に投稿
        {content.updatedAt && <React.Fragment>（{formatDate(content.updatedAt)}に改稿）</React.Fragment>}
      </div>
      <main>
        <ReactMarkdown source={content.body} />
      </main>
    </article>
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
