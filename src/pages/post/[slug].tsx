import Markdown from 'markdown-to-jsx'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import urlcat from 'urlcat'
import { Preview } from '~/components/modules/preview'
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
      <article className="root">
        <Preview preview={preview} />
        <h1 className="title">{content.title}</h1>
        <p className="date">
          {formatDate(content.publishedAt)}に投稿&nbsp;
          {content.updatedAt && <>（{formatDate(content.updatedAt)}に改稿）</>}
        </p>
        <main className="body">
          <Markdown children={content.body} />
        </main>
      </article>
      <style jsx>{`
        .root {
          max-width: 1024px;
        }
        .title {
          font-family: var(--pretty-font);
          font-weight: 600;
          font-size: 48px;
          line-height: 1.5;
        }
        .date {
          font-size: 12px;
          font-weight: 500;
          margin-top: 20px;
        }
        .body {
          font-size: 18px;
          font-weight: 500;
          line-height: 1.5;
          margin-top: 24px;
        }
        .body h1 {
          font-size: 32px;
          margin-top: 24px;
        }
      `}</style>
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
