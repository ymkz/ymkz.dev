import { GetStaticProps, NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'

import { getPosts } from '../../utils/get-posts'

type Props = {
  posts: {
    frontmatter: Frontmatter
    slug: string
  }[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <React.Fragment>
      <h1>Blog</h1>
      <section>
        {posts.map((post) => (
          <div key={post.slug}>
            <NextLink href="/blog/[slug]" as={`/blog/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </NextLink>
          </div>
        ))}
      </section>
    </React.Fragment>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts(require.context('../../contents', true, /\.md$/))
  return { props: { posts } }
}
