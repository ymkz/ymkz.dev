import NextLink from 'next/link'
import React from 'react'

import { formatDate } from '../utils/date'

type Props = {
  contents: Content[]
}

export const Posts = ({ contents }: Props) => {
  return (
    <section>
      <p className="margin-bottom16 color-black font-weight-800 font-size-40 montserrat">Post</p>
      <ul>
        {contents.map((content) => (
          <li key={content.slug}>
            <NextLink href="/post/[slug]" as={`/post/${content.slug}`}>
              <a className="block link color-black margin-top-16">
                <p className="font-size-24 font-weight-800 montserrat">{content.title}</p>
                <p className="font-size-14 font-weight-400 montserrat margin-top-4">
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
