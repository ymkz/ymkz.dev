import { styled } from 'goober'
import NextLink from 'next/link'
import React from 'react'

import { PublishedOrUpdated } from './published-or-updated'

type Props = {
  contents: Content[]
}

export const PostList = ({ contents }: Props) => {
  return (
    <React.Fragment>
      <Heading>Posts</Heading>
      <ul>
        {contents.map((content) => (
          <li key={content.slug}>
            <NextLink href="/post/[slug]" as={`/post/${content.slug}`}>
              <Title>{content.title}</Title>
            </NextLink>
            <Date>
              <PublishedOrUpdated publishedAt={content.publishedAt} updatedAt={content.updatedAt} />
            </Date>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

const Heading = styled('div')`
  margin-bottom: 16px;
  color: currentColor;
  font-weight: 800;
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
`

const Title = styled('a')`
  color: currentColor;
  cursor: pointer;
  font-weight: 800;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
`

const Date = styled('div')`
  margin-top: 4px;
  margin-bottom: 24px;
  color: currentColor;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
`
