import { styled } from 'goober'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import { PreviewMode } from '../../components/element/preview-mode'
import { PublishedOrUpdated } from '../../components/atomic/published-or-updated'

type Props = {
  content: Content
  preview: boolean
}

const Post: NextPage<Props> = ({ content, preview }) => {
  return (
    <React.Fragment>
      <DefaultSeo title={content.title} />
      <Container>
        <PreviewMode preview={preview} slug={content.slug} />
        <Title>{content.title}</Title>
        <Date>
          <PublishedOrUpdated publishedAt={content.publishedAt} updatedAt={content.updatedAt} />
        </Date>
        <main>
          <ReactMarkdown source={content.body} />
        </main>
      </Container>
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

const Container = styled('article')`
  max-width: 1024px;
  font-size: 18px;
  line-height: 1.5;
`

const Title = styled('h1')`
  font-weight: 800;
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.25;
`

const Date = styled('div')`
  margin-top: 12px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
`
