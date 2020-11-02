import { InferGetStaticPropsType } from 'next'
import { DefaultSeo } from 'next-seo'
import Link from 'next/link'
import { InternalLink } from '~/components/elements/internal-link'
import { formatDate } from '~/utils/date'

function Index({ contents }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <DefaultSeo title="Posts" />
      <h1 className="heading">Posts</h1>
      <div className="description">
        This is my posts. My portfolio is <InternalLink href="/">ymkz.co</InternalLink> .
      </div>
      <ul className="list">
        {contents.map((content) => (
          <li key={content.id} className="item">
            <Link href="/post/[slug]" as={`/post/${content.id}`}>
              <a className="anchor">
                <p className="title">{content.title}</p>
                <p className="date">
                  {formatDate(content.publishedAt)}に投稿&nbsp;
                  {content.updatedAt && <>（{formatDate(content.updatedAt)}に改稿）</>}
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .heading {
          font-weight: 600;
          font-size: 72px;
          font-family: var(--pretty-font);
          line-height: 1.15;
        }
        .description {
          font-family: var(--pretty-font);
        }
        .list {
          margin-top: 48px;
        }
        .head {
          font-family: var(--pretty-font);
          font-size: 48px;
          font-weight: 600;
          color: var(--color-primary);
        }
        .item {
          margin-top: 24px;
        }
        .anchor {
          color: var(--color-primary);
          text-decoration: none;
          display: block;
          width: fit-content;
        }
        .title {
          font-family: var(--pretty-font);
          font-size: 32px;
          font-weight: 600;
        }
        .date {
          font-size: 12px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const endpoint = 'https://ymkz.microcms.io/api/v1/post'
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const { contents }: Contents = await response.json()
  return { props: { contents }, revalidate: true }
}
