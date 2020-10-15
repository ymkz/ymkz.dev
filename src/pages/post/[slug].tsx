import Markdown from 'markdown-to-jsx'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import urlcat from 'urlcat'
import { Preview } from '~/components/preview'
import { formatDate } from '~/utils/date'

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
    <>
      <DefaultSeo title={content.title} />
      <article className="post-page__container">
        <Preview preview={preview} />
        <h1 className="post-page__title">{content.title}</h1>
        <p className="post-page__date">
          {formatDate(content.publishedAt)}に投稿&nbsp;
          {content.updatedAt && <>（{formatDate(content.updatedAt)}に改稿）</>}
        </p>
        <main className="post-page__body">
          <Markdown children={content.body} />
        </main>
      </article>
    </>
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
  const slug = params?.slug
  const draftKey = previewData?.draftKey
  const endpoint = urlcat('https://ymkz.microcms.io/api/v1/post/:slug', { slug, draftKey })
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const content: Content = await response.json()
  return { props: { content, preview: preview || false }, revalidate: 1 }
}
