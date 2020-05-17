import fm from 'front-matter'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import { getSlugs } from '../../utils/get-slug'

type Props = {
  frontmatter: Frontmatter
  markdown: string
}

const Post: NextPage<Props> = ({ frontmatter, markdown }) => {
  return (
    <React.Fragment>
      <h1 className="title">{frontmatter.title}</h1>
      <div className="date">
        {frontmatter.createdAt}に投稿
        {frontmatter.updatedAt && <React.Fragment>（{frontmatter.updatedAt}に改稿）</React.Fragment>}
      </div>
      <section className="content">
        <ReactMarkdown source={markdown} />
      </section>
    </React.Fragment>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await import(`../../contents/${params?.slug}.md`)
  const { attributes: frontmatter, body: markdown } = fm(content.default)
  return { props: { frontmatter, markdown } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getSlugs(require.context('../../contents', true, /\.md$/))
  const paths = slugs.map((slug: string) => `/post/${slug}`)
  return { paths, fallback: false }
}
