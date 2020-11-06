import { Markup } from 'interweave'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { PublishDate } from '~/components/elements/date'
import { Preview } from '~/components/elements/preview'
import { fetchPostAll, fetchPostOne } from '~/helpers/post'

function Post({ content, preview }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (content) {
    return (
      <>
        <NextSeo title={content.title} />
        <Preview preview={preview} />
        <h1 className="post__title">{content.title}</h1>
        <PublishDate publishedAt={content.publishedAt} updatedAt={content.updatedAt} />
        {content.eyecatch && <img className="post__eyecatch" src={content.eyecatch.url} alt="" />}
        <main className="post__body">
          <Markup content={content.body} noWrap />
        </main>
      </>
    )
  } else {
    return null
  }
}

export async function getStaticPaths() {
  const { contents } = await fetchPostAll()
  const paths = contents.map((content) => `/post/${content.id}`)
  return { paths, fallback: true }
}

export async function getStaticProps({ params, preview, previewData }: GetStaticPropsContext) {
  const slug = params?.slug
  const draftKey = previewData?.draftKey
  const { content } = await fetchPostOne(slug, draftKey)
  return { props: { content, preview: preview || false }, revalidate: 1 }
}

export default Post
