import React from 'react'
import { formatDate } from '../utils/date'

type Props = {
  publishedAt: Content['publishedAt']
  updatedAt: Content['updatedAt']
}

export const PublishedOrUpdated = ({ publishedAt, updatedAt }: Props) => {
  if (updatedAt) {
    return (
      <React.Fragment>
        {formatDate(publishedAt)}に投稿（{formatDate(updatedAt)}に改稿）
      </React.Fragment>
    )
  } else {
    return <React.Fragment>{formatDate(publishedAt)}に投稿</React.Fragment>
  }
}
