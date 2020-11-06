import { InferGetStaticPropsType } from 'next'
import { PublishDate } from '~/components/elements/date'
import { InternalBlockLink, InternalInlineLink } from '~/components/elements/link'
import { fetchPostAll } from '~/helpers/post'

function Posts({ contents }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1 className="posts-heading">Posts</h1>
      <p className="posts-description">
        There are my posts. My portfolio is <InternalInlineLink href="/">ymkz.co</InternalInlineLink>.
      </p>
      <ul className="posts-list">
        {contents.map((content) => (
          <li key={content.id} className="post-item">
            <InternalBlockLink href={`/post/${content.id}`}>
              <h2 className="post-item__title">{content.title}</h2>
              <PublishDate publishedAt={content.publishedAt} updatedAt={content.updatedAt} />
            </InternalBlockLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const { contents } = await fetchPostAll()
  return { props: { contents }, revalidate: true }
}

export default Posts
