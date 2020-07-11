import NextLink from 'next/link'
import React from 'react'

import { formatDate } from '../utils/date'

type Props = {
  contents: Content[]
}

export const Posts = ({ contents }: Props) => {
  return (
    <section className="section">
      <p className="post-index__head">Post</p>
      <ul>
        {contents.map((content) => (
          <li key={content.id} className="post-index__item">
            <NextLink href="/post/[slug]" as={`/post/${content.id}`}>
              <a className="post-index__anchor">
                <p className="post-index__title">{content.title}</p>
                <p className="post-index__date">
                  {formatDate(content.publishedAt)}に投稿&nbsp;
                  {content.updatedAt && <React.Fragment>（{formatDate(content.updatedAt)}に改稿）</React.Fragment>}
                </p>
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
