import { formatDate } from '~/helpers/date'
import { ContentShape } from '~/types'

type Props = Pick<ContentShape, 'publishedAt' | 'updatedAt'>

export function PublishDate({ publishedAt, updatedAt }: Props) {
  return (
    <>
      <span className="post-item__date">
        {formatDate(publishedAt)}に投稿&nbsp;
        {updatedAt && <>（{formatDate(updatedAt)}に改稿）</>}
      </span>
    </>
  )
}
